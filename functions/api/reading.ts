type CardPayload = {
  id?: string;
  name?: string;
  hook?: string;
  window?: string;
  mirror?: string;
  action?: string;
  categories?: string[];
};

type ReadingRequest = {
  question?: string;
  category?: string;
  card?: CardPayload;
  context?: {
    selectedPrompt?: string;
    pagePath?: string;
  };
};

type Env = {
  DEEPSEEK_API_KEY?: string;
  DEEPSEEK_MODEL?: string;
};

const DAILY_LIMIT = 3;
const MAX_QUESTION_LENGTH = 300;
const RATE_LIMIT_COOKIE = 'mirror_reading_daily';
const SAFE_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
};

const crisisPatterns = [
  /\bsuicide\b/i,
  /\bkill myself\b/i,
  /\bself[-\s]?harm\b/i,
  /\babuse\b/i,
  /\bviolence\b/i,
  /\bstalking\b/i,
  /\bthreat\b/i,
  /\bunsafe\b/i,
];

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const request = context.request;
  const env = context.env;

  let body: ReadingRequest;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body.' }, 400);
  }

  const question = sanitizeQuestion(body.question);
  const card = normalizeCard(body.card);
  const category = sanitizeShortText(body.category || 'general', 40);
  const selectedPrompt = sanitizeShortText(body.context?.selectedPrompt || '', 240);

  if (!question) {
    return jsonResponse({ error: 'Please enter a relationship question.' }, 400);
  }

  if (!card.name) {
    return jsonResponse({ error: 'Please choose a card.' }, 400);
  }

  const usage = readUsageCookie(request.headers.get('Cookie'));
  if (usage.count >= DAILY_LIMIT) {
    return jsonResponse(
      {
        error: 'Daily reading limit reached.',
        reading: fallbackReading(question, card, 'You have reached today\'s free AI reading limit. This grounded fallback is still here for reflection.'),
        source: 'fallback',
        note: 'Daily AI reading limit reached. Try another AI reading tomorrow.',
      },
      429,
      usage.count,
    );
  }

  if (crisisPatterns.some((pattern) => pattern.test(question))) {
    return jsonResponse(
      {
        reading: safetyReading(question, card),
        source: 'safety',
        note: 'This response prioritizes real-world safety over a tarot-style reading.',
      },
      200,
      usage.count + 1,
    );
  }

  if (!env.DEEPSEEK_API_KEY) {
    return jsonResponse(
      {
        reading: fallbackReading(question, card, 'The AI reading is not configured yet, so this is a grounded Mirror Tarot fallback.'),
        source: 'fallback',
        note: 'AI reading is not configured yet.',
      },
      200,
      usage.count + 1,
    );
  }

  try {
    const reading = await requestDeepSeekReading({
      apiKey: env.DEEPSEEK_API_KEY,
      model: env.DEEPSEEK_MODEL || 'deepseek-v4-flash',
      question,
      category,
      selectedPrompt,
      card,
    });

    return jsonResponse(
      {
        reading,
        source: 'ai',
        note: 'This AI-assisted reading is for entertainment and self-reflection, not professional advice or a guaranteed prediction.',
      },
      200,
      usage.count + 1,
    );
  } catch {
    return jsonResponse(
      {
        reading: fallbackReading(question, card, 'The AI reading could not be completed, so this grounded fallback keeps the reflection available.'),
        source: 'fallback',
        note: 'AI reading failed. Showing a Mirror Tarot fallback.',
      },
      200,
      usage.count + 1,
    );
  }
}

export async function onRequest(context: { request: Request }): Promise<Response> {
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: SAFE_HEADERS });
  }

  return jsonResponse({ error: 'Method not allowed.' }, 405);
}

async function requestDeepSeekReading(input: {
  apiKey: string;
  model: string;
  question: string;
  category: string;
  selectedPrompt: string;
  card: Required<Pick<CardPayload, 'name' | 'hook' | 'window' | 'mirror' | 'action'>>;
}) {
  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${input.apiKey}`,
    },
    body: JSON.stringify({
      model: input.model,
      response_format: { type: 'json_object' },
      temperature: 0.72,
      max_tokens: 620,
      messages: [
        {
          role: 'system',
          content:
            'You write Mirror Tarot relationship readings in English. Output valid JSON only with keys comfort, window, mirror, action. Be warm, specific, grounded, and non-deterministic. Do not claim to know another person\'s true thoughts. Do not promise reunion, love, pregnancy, health, legal, financial, or therapy outcomes. If the user seems unsafe, encourage real-world support.',
        },
        {
          role: 'user',
          content: JSON.stringify({
            task: 'Generate one AI-assisted Mirror Tarot reading.',
            structure: {
              comfort: 'Validate the user gently in 2-3 sentences.',
              window: 'Reflect what the relationship situation may be showing in 3-4 sentences.',
              mirror: 'Reflect the emotional pattern this question may reveal in 3-4 sentences.',
              action: 'Give one low-risk next step in 2-3 sentences.',
            },
            question: input.question,
            category: input.category,
            selectedPrompt: input.selectedPrompt,
            card: input.card,
          }),
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error('DeepSeek request failed');
  }

  const payload = await response.json() as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = payload.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('DeepSeek response was empty');
  }

  const parsed = JSON.parse(content) as Record<string, unknown>;
  return normalizeReading(parsed, input.question, input.card);
}

function normalizeReading(
  parsed: Record<string, unknown>,
  question: string,
  card: Required<Pick<CardPayload, 'name' | 'hook' | 'window' | 'mirror' | 'action'>>,
) {
  const fallback = fallbackReading(question, card, 'This fallback keeps the reading grounded when a section is missing.');

  return {
    comfort: sanitizeLongText(parsed.comfort, fallback.comfort),
    window: sanitizeLongText(parsed.window, fallback.window),
    mirror: sanitizeLongText(parsed.mirror, fallback.mirror),
    action: sanitizeLongText(parsed.action, fallback.action),
  };
}

function fallbackReading(question: string, card: CardPayload, comfort: string) {
  return {
    comfort,
    window: `For "${question}", ${card.window || 'the card asks you to look at what is consistent, not only what is intense.'}`,
    mirror: card.mirror || 'This question may be touching a need for reassurance, steadiness, or being chosen.',
    action: card.action || 'Take one small step that protects your peace before seeking another sign.',
  };
}

function safetyReading(question: string, card: CardPayload) {
  return {
    comfort: `Your question matters, and your safety matters more than any reading. If this situation involves harm, threats, self-harm, abuse, or immediate danger, please reach out to local emergency services or a trusted real-world support person now.`,
    window: `The card ${card.name || 'you chose'} cannot safely answer this as a prediction. This is a moment to look for practical support, not more signs.`,
    mirror: `The part of you asking "${question}" may be trying to find safety, certainty, or permission to take care of yourself. You do not need a perfect interpretation before protecting your wellbeing.`,
    action: 'Pause the reading and contact someone safe. If you may be in immediate danger, use local emergency services or a crisis hotline in your country.',
  };
}

function sanitizeQuestion(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, MAX_QUESTION_LENGTH);
}

function sanitizeShortText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

function sanitizeLongText(value: unknown, fallback: string): string {
  if (typeof value !== 'string') return fallback;
  const cleaned = value.replace(/\s+/g, ' ').trim().slice(0, 1200);
  return cleaned || fallback;
}

function normalizeCard(card: CardPayload | undefined): Required<Pick<CardPayload, 'name' | 'hook' | 'window' | 'mirror' | 'action'>> {
  return {
    name: sanitizeShortText(card?.name, 80),
    hook: sanitizeLongText(card?.hook, ''),
    window: sanitizeLongText(card?.window, ''),
    mirror: sanitizeLongText(card?.mirror, ''),
    action: sanitizeLongText(card?.action, ''),
  };
}

function readUsageCookie(cookieHeader: string | null): { count: number } {
  if (!cookieHeader) return { count: 0 };

  const match = cookieHeader.match(new RegExp(`${RATE_LIMIT_COOKIE}=([^;]+)`));
  if (!match) return { count: 0 };

  const count = Number.parseInt(decodeURIComponent(match[1]), 10);
  return { count: Number.isFinite(count) ? count : 0 };
}

function jsonResponse(body: unknown, status = 200, nextCount?: number): Response {
  const headers = new Headers(SAFE_HEADERS);

  if (typeof nextCount === 'number') {
    headers.append('Set-Cookie', `${RATE_LIMIT_COOKIE}=${Math.max(0, nextCount)}; Max-Age=86400; Path=/; SameSite=Lax; Secure`);
  }

  return new Response(JSON.stringify(body), { status, headers });
}
