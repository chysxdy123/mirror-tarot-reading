import type { CardCategory } from './cards';

export type PageType = 'hub' | 'question' | 'pattern' | 'trust' | 'cards';

export type SitePage = {
  slug: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  type: PageType;
  category?: CardCategory;
  eyebrow: string;
  heading: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
};

const questionPage = (
  page: Omit<SitePage, 'type' | 'eyebrow'> & { eyebrow?: string },
): SitePage => ({
  type: 'question',
  eyebrow: page.eyebrow ?? 'Relationship question',
  ...page,
});

const patternPage = (
  page: Omit<SitePage, 'type' | 'eyebrow'> & { eyebrow?: string },
): SitePage => ({
  type: 'pattern',
  eyebrow: page.eyebrow ?? 'Emotional pattern',
  ...page,
});

export const sitePages: SitePage[] = [
  {
    slug: '/',
    title: 'Mirror Tarot Reading | Reflective Love Card Readings',
    description:
      'Ask about them and discover what the question reveals about you with reflective love card readings for relationship uncertainty.',
    primaryKeyword: 'mirror tarot reading',
    secondaryKeywords: ['love tarot reading', 'relationship card reading'],
    type: 'hub',
    category: 'general',
    eyebrow: 'Reflective love card readings',
    heading: 'Ask about them. Discover what the question reveals about you.',
    intro:
      'Mirror Tarot Reading is a quiet space for love questions, mixed signals, no contact, and the emotional patterns that make uncertainty feel so loud.',
    sections: [
      {
        heading: 'A love reading with a mirror',
        body: 'The Window looks toward the relationship question you came with. The Mirror looks at what that question may be stirring inside you.',
      },
      {
        heading: 'Built for uncertainty, not certainty theater',
        body: 'These readings are for reflection and emotional clarity. They do not promise guaranteed outcomes, reunion timelines, or proof of another person’s hidden feelings.',
      },
    ],
    relatedSlugs: ['/love-tarot-reading/', '/does-he-miss-me-tarot/', '/should-i-text-him/'],
  },
  {
    slug: '/love-tarot-reading/',
    title: 'Free Love Tarot Reading | Mirror Tarot',
    description:
      'Try a free love card reading that pairs relationship insight with psychological self-reflection.',
    primaryKeyword: 'free love tarot reading',
    secondaryKeywords: ['love tarot reading', 'love tarot reading online free'],
    type: 'hub',
    category: 'general',
    eyebrow: 'Free love reading',
    heading: 'A free love card reading for the question underneath the question.',
    intro:
      'Choose a card for a relationship question and read both sides of the message: what may be happening between you, and what the uncertainty may reveal inside you.',
    sections: [
      {
        heading: 'How this reading works',
        body: 'Each result has a Window and a Mirror. The Window speaks to the relationship dynamic. The Mirror turns gently toward your emotional response.',
      },
      {
        heading: 'Before you draw',
        body: 'Think of one relationship question. Keep it specific, but do not ask the card to replace your judgment, boundaries, or real-world evidence.',
      },
    ],
    relatedSlugs: ['/does-he-miss-me-tarot/', '/what-do-they-feel-about-me/', '/relationship-anxiety-or-gut-feeling/'],
  },
  {
    slug: '/cards/',
    title: 'Mirror Tarot Cards | Relationship Reflection Cards',
    description:
      'Explore the first Mirror Tarot theme cards used for love readings, emotional patterns, and relationship uncertainty.',
    primaryKeyword: 'tarot cards love reading',
    secondaryKeywords: ['relationship cards', 'love card meanings'],
    type: 'cards',
    category: 'general',
    eyebrow: 'Card index',
    heading: 'Cards for the emotional weather of relationship uncertainty.',
    intro:
      'Mirror Tarot uses theme cards designed for modern relationship questions. They are not a full traditional tarot deck; they are a focused language for reflection.',
    sections: [
      {
        heading: 'Why theme cards',
        body: 'The first release uses cards like The Silence, The Message, and The Mixed Signal because these are the moments users actually bring to the site.',
      },
    ],
    relatedSlugs: ['/love-tarot-reading/', '/does-he-miss-me-tarot/', '/anxious-attachment-texting/'],
  },
  questionPage({
    slug: '/does-he-miss-me-tarot/',
    title: 'Does He Miss Me Tarot Reading | Mirror Tarot',
    description:
      'A reflective card reading for wondering whether he misses you, especially during silence, distance, or no contact.',
    primaryKeyword: 'does he miss me tarot',
    secondaryKeywords: ['does he miss me during no contact', 'does he miss me after a breakup'],
    category: 'missing',
    heading: 'Does he miss me, or am I missing the version of us I hoped for?',
    intro:
      'This reading meets the ache behind “does he miss me?” without turning silence into a guaranteed answer.',
    sections: [
      {
        heading: 'Why this question feels so urgent',
        body: 'Missing someone can make every silence feel meaningful. The mind starts collecting signs because uncertainty feels harder than a painful truth.',
      },
      {
        heading: 'The mirror in the question',
        body: 'Sometimes the deeper question is not whether he misses you, but whether you can feel valued before someone confirms it.',
      },
    ],
    faqs: [
      {
        question: 'Can a card prove he misses me?',
        answer: 'No. This reading is for reflection, not proof. It can help you examine the emotional pattern around the question.',
      },
    ],
    relatedSlugs: ['/no-contact-tarot-reading/', '/why-cant-i-stop-thinking-about-him/', '/should-i-text-him/'],
  }),
  questionPage({
    slug: '/should-i-text-him/',
    title: 'Should I Text Him? A Love Card Reading for Uncertainty',
    description:
      'Use a reflective card reading to explore whether texting him is clarity, connection, or anxiety seeking relief.',
    primaryKeyword: 'should i text him',
    secondaryKeywords: ['should i text him after breakup', 'should i text him yes or no'],
    category: 'texting',
    heading: 'Should I text him, or am I asking a message to calm my nervous system?',
    intro:
      'Before you press send, this reading helps separate honest communication from the urge to chase reassurance.',
    sections: [
      {
        heading: 'A text can be clear or loaded',
        body: 'One message can open a conversation, but it cannot carry every unspoken need in the relationship.',
      },
      {
        heading: 'The mirror in the urge',
        body: 'If the need to text feels urgent, pause and ask what feeling you are trying to end: loneliness, shame, fear, or uncertainty.',
      },
    ],
    relatedSlugs: ['/anxious-attachment-texting/', '/relationship-anxiety-or-gut-feeling/', '/does-he-miss-me-tarot/'],
  }),
  questionPage({
    slug: '/what-do-they-feel-about-me/',
    title: 'What Do They Feel About Me Tarot Reading | Mirror Tarot',
    description:
      'A love card reading for wondering what they feel about you while staying grounded in real-world behavior.',
    primaryKeyword: 'what do they feel about me tarot',
    secondaryKeywords: ['how do they feel about me tarot', 'what are they feeling tarot'],
    category: 'feelings',
    heading: 'What do they feel about me, and what am I hoping their feelings will fix?',
    intro:
      'This reading explores possible emotional signals without pretending to read another person with certainty.',
    sections: [
      {
        heading: 'Feelings are not the same as capacity',
        body: 'Someone can feel warmth, attraction, or nostalgia and still not offer clarity, consistency, or care.',
      },
      {
        heading: 'The mirror in wanting to know',
        body: 'The need to know their feelings may be connected to your need to know whether it is safe to keep hoping.',
      },
    ],
    relatedSlugs: ['/is-this-connection-real/', '/are-they-pulling-away/', '/love-tarot-reading/'],
  }),
  questionPage({
    slug: '/should-i-wait-or-let-go/',
    title: 'Should I Wait or Let Go? Reflective Love Reading',
    description:
      'A reflective card reading for deciding whether waiting is hope, fear, loyalty, or avoidance.',
    primaryKeyword: 'should i wait or let go',
    secondaryKeywords: ['should i move on or wait', 'wait or let go tarot'],
    category: 'waiting',
    heading: 'Should I wait or let go?',
    intro:
      'This reading does not rush your heart. It helps you notice whether waiting is still connected to reality.',
    sections: [
      {
        heading: 'Waiting needs evidence',
        body: 'Hope can be meaningful, but it becomes painful when it asks you to pause your life without any mutual movement.',
      },
      {
        heading: 'The mirror in waiting',
        body: 'Waiting may protect you from grief, from choosing yourself, or from accepting that potential is not the same as presence.',
      },
    ],
    relatedSlugs: ['/should-i-move-on/', '/the-release/', '/no-contact-tarot-reading/'],
  }),
  questionPage({
    slug: '/no-contact-tarot-reading/',
    title: 'No Contact Tarot Reading | Mirror Tarot',
    description:
      'A no contact card reading for silence, waiting, and the emotional meaning you may be placing on distance.',
    primaryKeyword: 'no contact tarot reading',
    secondaryKeywords: ['does he miss me during no contact', 'no contact love reading'],
    category: 'no-contact',
    heading: 'No contact can reveal more than whether they miss you.',
    intro:
      'Silence can feel like a locked room. This reading helps you notice what you are doing inside that room.',
    sections: [
      {
        heading: 'No contact is not one single signal',
        body: 'It can mean healing, avoidance, distance, self-protection, confusion, or a boundary. A reading should not flatten it into one fantasy answer.',
      },
      {
        heading: 'The mirror in silence',
        body: 'No contact often reveals how much of your emotional safety has been tied to another person’s response.',
      },
    ],
    relatedSlugs: ['/does-he-miss-me-tarot/', '/why-did-they-go-silent/', '/the-silence/'],
  }),
  patternPage({
    slug: '/why-cant-i-stop-thinking-about-him/',
    title: 'Why Can’t I Stop Thinking About Him? Psychology and Reflection',
    description:
      'Explore why you cannot stop thinking about him through emotional uncertainty, attachment, and unfinished meaning.',
    primaryKeyword: "why can't i stop thinking about him psychology",
    secondaryKeywords: ["why can't i stop thinking about him spiritual meaning", 'why can’t I stop thinking about him'],
    category: 'anxiety',
    heading: 'Why can’t I stop thinking about him?',
    intro:
      'Persistent thoughts can feel like a sign, but they can also be the mind trying to solve ambiguity.',
    sections: [
      {
        heading: 'Rumination can feel like closeness',
        body: 'Thinking about someone can create the feeling that the connection is still active, even when the real relationship is paused or unclear.',
      },
      {
        heading: 'What the thought may be protecting',
        body: 'The returning thought may be protecting hope, delaying grief, or trying to find one detail that makes everything make sense.',
      },
    ],
    relatedSlugs: ['/does-he-miss-me-tarot/', '/relationship-anxiety-or-gut-feeling/', '/anxious-attachment-texting/'],
  }),
  patternPage({
    slug: '/relationship-anxiety-or-gut-feeling/',
    title: 'Relationship Anxiety or Gut Feeling? How to Tell the Difference',
    description:
      'A grounded guide to relationship anxiety, intuition, and what uncertainty may be asking you to notice.',
    primaryKeyword: 'relationship anxiety or gut feeling',
    secondaryKeywords: ['relationship anxiety signs', 'intuition or anxiety relationship'],
    category: 'anxiety',
    heading: 'Relationship anxiety or gut feeling?',
    intro:
      'Both anxiety and intuition can be felt in the body. The difference often shows up in tone, timing, and what the feeling asks you to do.',
    sections: [
      {
        heading: 'Anxiety often demands immediate relief',
        body: 'It may push you to check, text, test, search, or decide before you feel steady.',
      },
      {
        heading: 'Intuition is usually quieter',
        body: 'A gut feeling may be firm, but it often feels less frantic than anxiety. It points toward clarity rather than compulsion.',
      },
    ],
    relatedSlugs: ['/should-i-text-him/', '/anxious-attachment-texting/', '/love-or-attachment/'],
  }),
  patternPage({
    slug: '/anxious-attachment-texting/',
    title: 'Anxious Attachment and Texting | Mirror Tarot',
    description:
      'Understand why texting can feel urgent with anxious attachment and how to pause before chasing reassurance.',
    primaryKeyword: 'anxious attachment texting',
    secondaryKeywords: ['anxious attachment no response', 'anxious attachment texting too much'],
    category: 'attachment',
    heading: 'Anxious attachment can turn texting into a test of worth.',
    intro:
      'When your nervous system is activated, a delayed reply can feel like rejection before you have enough evidence.',
    sections: [
      {
        heading: 'The phone becomes the relationship',
        body: 'For anxious attachment, the message thread can start to feel like the place where safety is granted or removed.',
      },
      {
        heading: 'Pause before protest',
        body: 'A pause is not self-silencing. It is a way to choose communication from clarity instead of panic.',
      },
    ],
    relatedSlugs: ['/should-i-text-him/', '/relationship-anxiety-or-gut-feeling/', '/emotionally-unavailable-relationship/'],
  }),
  patternPage({
    slug: '/emotionally-unavailable-relationship/',
    title: 'Why Do I Chase Emotionally Unavailable People?',
    description:
      'Explore the emotional pattern of chasing unavailable people and why inconsistency can feel so compelling.',
    primaryKeyword: 'emotionally unavailable relationship',
    secondaryKeywords: ['why do i chase emotionally unavailable people', 'emotionally unavailable partner'],
    category: 'attachment',
    heading: 'Why do I chase emotionally unavailable people?',
    intro:
      'Unavailable people can feel magnetic when affection arrives in unpredictable flashes.',
    sections: [
      {
        heading: 'Inconsistency can mimic chemistry',
        body: 'The nervous system may become attached to relief after distance, mistaking the relief for proof of deep connection.',
      },
      {
        heading: 'The mirror in the chase',
        body: 'The chase may reveal a familiar story: love must be earned, decoded, or proven through endurance.',
      },
    ],
    relatedSlugs: ['/are-they-pulling-away/', '/love-or-attachment/', '/should-i-wait-or-let-go/'],
  }),
  questionPage({
    slug: '/do-they-think-about-me/',
    title: 'Do They Think About Me? Reflective Card Reading',
    description: 'A reflective card reading for wondering whether they think about you and what that hope means.',
    primaryKeyword: 'do they think about me tarot',
    secondaryKeywords: ['are they thinking about me', 'do they miss me'],
    category: 'missing',
    heading: 'Do they think about me?',
    intro: 'This question often appears when the connection still feels alive inside you.',
    sections: [
      {
        heading: 'Thoughts are private, behavior is visible',
        body: 'They may think of you, but the more useful question is whether their visible behavior supports mutual care.',
      },
      {
        heading: 'The mirror in wondering',
        body: 'Wanting to be on their mind may be a longing to know the connection mattered.',
      },
    ],
    relatedSlugs: ['/does-he-miss-me-tarot/', '/what-do-they-feel-about-me/', '/why-cant-i-stop-thinking-about-him/'],
  }),
  questionPage({
    slug: '/will-they-come-back/',
    title: 'Will They Come Back? A Gentle Love Card Reading',
    description: 'A reflective reading for wondering whether they will come back without making reunion promises.',
    primaryKeyword: 'will he come back tarot',
    secondaryKeywords: ['will they come back', 'will my ex come back'],
    category: 'waiting',
    heading: 'Will they come back?',
    intro: 'This reading holds the hope of return without asking you to pause your life for an unknown timeline.',
    sections: [
      {
        heading: 'Return is not the same as repair',
        body: 'Someone can come back and still not bring the clarity, accountability, or consistency the relationship needs.',
      },
      {
        heading: 'The mirror in hoping',
        body: 'The hope that they return may also be the hope that the pain will finally make sense.',
      },
    ],
    relatedSlugs: ['/no-contact-tarot-reading/', '/should-i-wait-or-let-go/', '/should-i-move-on/'],
  }),
  questionPage({
    slug: '/are-they-pulling-away/',
    title: 'Are They Pulling Away? Relationship Card Reading',
    description: 'A reflective relationship reading for distance, mixed signals, and fear of being left behind.',
    primaryKeyword: 'why is he pulling away',
    secondaryKeywords: ['are they pulling away', 'he is pulling away'],
    category: 'feelings',
    heading: 'Are they pulling away?',
    intro: 'Distance can be real, but the meaning you attach to distance deserves careful attention.',
    sections: [
      {
        heading: 'Distance has many meanings',
        body: 'People pull away for fear, disinterest, overwhelm, avoidance, or timing. The pattern matters more than one quiet day.',
      },
      {
        heading: 'The mirror in the fear',
        body: 'When distance feels unbearable, it may touch a deeper fear of being replaced, forgotten, or too much.',
      },
    ],
    relatedSlugs: ['/emotionally-unavailable-relationship/', '/relationship-anxiety-or-gut-feeling/', '/what-do-they-feel-about-me/'],
  }),
  questionPage({
    slug: '/is-this-connection-real/',
    title: 'Is This Connection Real? Reflective Love Reading',
    description: 'A love card reading for wondering whether a connection is real, mutual, or mostly imagined.',
    primaryKeyword: 'is this connection real',
    secondaryKeywords: ['is this connection mutual', 'spiritual connection or attachment'],
    category: 'feelings',
    heading: 'Is this connection real?',
    intro: 'A connection can feel real and still need grounded evidence before you build your life around it.',
    sections: [
      {
        heading: 'Real feeling needs real-world shape',
        body: 'Intensity, synchronicity, and longing can be meaningful, but consistency and care show whether a connection can hold weight.',
      },
      {
        heading: 'The mirror in intensity',
        body: 'Sometimes intensity reveals chemistry. Sometimes it reveals uncertainty, projection, or a hunger to be deeply seen.',
      },
    ],
    relatedSlugs: ['/what-do-they-feel-about-me/', '/love-or-attachment/', '/relationship-anxiety-or-gut-feeling/'],
  }),
  questionPage({
    slug: '/why-did-they-go-silent/',
    title: 'Why Did They Go Silent? A Reflective Reading',
    description: 'A reflective card reading for sudden silence, distance, and the stories your mind creates around it.',
    primaryKeyword: 'why did he go silent',
    secondaryKeywords: ['why did they go silent', 'sudden silence in relationship'],
    category: 'no-contact',
    heading: 'Why did they go silent?',
    intro: 'Silence can make the mind race. This reading helps you slow the story down.',
    sections: [
      {
        heading: 'Silence is information, but not always explanation',
        body: 'It tells you something about availability or communication, but it may not reveal the entire emotional truth.',
      },
      {
        heading: 'The mirror in decoding',
        body: 'The urge to decode silence may come from wanting control where there is no clear answer.',
      },
    ],
    relatedSlugs: ['/no-contact-tarot-reading/', '/does-he-miss-me-tarot/', '/relationship-anxiety-or-gut-feeling/'],
  }),
  questionPage({
    slug: '/should-i-move-on/',
    title: 'Should I Move On? Reflective Love Card Reading',
    description: 'A gentle card reading for asking whether moving on is self-protection, grief, or premature closure.',
    primaryKeyword: 'should i move on',
    secondaryKeywords: ['should i move on or wait', 'move on from relationship'],
    category: 'letting-go',
    heading: 'Should I move on?',
    intro: 'Moving on does not mean the relationship meant nothing. It may mean your life needs room again.',
    sections: [
      {
        heading: 'Moving on is not a verdict',
        body: 'You can honor what happened without continuing to organize your future around it.',
      },
      {
        heading: 'The mirror in holding on',
        body: 'Holding on may protect hope, identity, or the part of you that wants the story to end differently.',
      },
    ],
    relatedSlugs: ['/should-i-wait-or-let-go/', '/will-they-come-back/', '/relationship-anxiety-or-gut-feeling/'],
  }),
  questionPage({
    slug: '/do-they-regret-losing-me/',
    title: 'Do They Regret Losing Me? Reflective Love Reading',
    description: 'A reflective card reading for wondering whether they regret losing you and why that answer matters.',
    primaryKeyword: 'does he regret losing me',
    secondaryKeywords: ['do they regret losing me', 'will he regret leaving me'],
    category: 'missing',
    heading: 'Do they regret losing me?',
    intro: 'The wish for regret is often the wish for your pain to be witnessed.',
    sections: [
      {
        heading: 'Regret is not repair',
        body: 'Someone may regret losing you and still lack the maturity to return differently.',
      },
      {
        heading: 'The mirror in wanting regret',
        body: 'Wanting them to regret losing you may be a longing for proof that you were valuable all along.',
      },
    ],
    relatedSlugs: ['/does-he-miss-me-tarot/', '/will-they-come-back/', '/should-i-move-on/'],
  }),
  patternPage({
    slug: '/love-or-attachment/',
    title: 'Is It Love or Attachment? Relationship Reflection',
    description: 'Explore the difference between love, attachment, intensity, and fear of loss in relationship uncertainty.',
    primaryKeyword: 'love or attachment',
    secondaryKeywords: ['is it love or attachment', 'attachment vs love'],
    category: 'attachment',
    heading: 'Is it love or attachment?',
    intro: 'Love and attachment can overlap, but they do not always feel the same in your body or choices.',
    sections: [
      {
        heading: 'Love tends to make room for reality',
        body: 'Attachment may cling to potential, fantasy, or the fear of losing access to someone.',
      },
      {
        heading: 'The mirror in intensity',
        body: 'If the connection feels consuming, ask whether it expands your life or narrows it around uncertainty.',
      },
    ],
    relatedSlugs: ['/emotionally-unavailable-relationship/', '/is-this-connection-real/', '/relationship-anxiety-or-gut-feeling/'],
  }),
  patternPage({
    slug: '/am-i-waiting-or-avoiding/',
    title: 'Am I Waiting or Avoiding? Relationship Reflection',
    description: 'A reflective guide for noticing whether waiting for someone is hope or avoidance of your next step.',
    primaryKeyword: 'waiting for someone who is not ready',
    secondaryKeywords: ['am i waiting or avoiding', 'waiting for someone relationship'],
    category: 'waiting',
    heading: 'Am I waiting or avoiding?',
    intro: 'Waiting can be devotion, but it can also become a quiet way to delay choosing yourself.',
    sections: [
      {
        heading: 'Waiting should have a relationship to reality',
        body: 'If there is no mutual movement, no conversation, and no timeline, waiting may be costing more than it gives.',
      },
      {
        heading: 'The mirror in the pause',
        body: 'Ask what you would have to feel if you stopped waiting. That feeling may explain why the waiting continues.',
      },
    ],
    relatedSlugs: ['/should-i-wait-or-let-go/', '/should-i-move-on/', '/will-they-come-back/'],
  }),
  patternPage({
    slug: '/what-is-this-relationship-teaching-me/',
    title: 'What Is This Relationship Teaching Me? Mirror Tarot Reflection',
    description: 'A reflective relationship reading for finding meaning without romanticizing pain.',
    primaryKeyword: 'relationship lesson tarot',
    secondaryKeywords: ['what is this relationship teaching me', 'relationship lesson'],
    category: 'general',
    heading: 'What is this relationship teaching me?',
    intro: 'Not every painful connection is meant to stay. Some teach you where you left yourself.',
    sections: [
      {
        heading: 'Meaning is not the same as destiny',
        body: 'A relationship can be important without being permanent. A lesson can be real without requiring more suffering.',
      },
      {
        heading: 'The mirror in the lesson',
        body: 'This question asks what part of you became clearer through the connection: a need, a boundary, a fear, or a desire.',
      },
    ],
    relatedSlugs: ['/love-tarot-reading/', '/love-or-attachment/', '/should-i-move-on/'],
  }),
  {
    slug: '/about/',
    title: 'About Mirror Tarot Reading',
    description:
      'Learn about Mirror Tarot Reading, a reflective love card reading site for relationship uncertainty and emotional self-inquiry.',
    primaryKeyword: 'about mirror tarot reading',
    secondaryKeywords: ['mirror tarot', 'love card reflection'],
    type: 'trust',
    category: 'general',
    eyebrow: 'About',
    heading: 'A card reading site for the question underneath the question.',
    intro:
      'Mirror Tarot Reading was created for people who arrive with love questions and leave with a little more emotional clarity.',
    sections: [
      {
        heading: 'What this site is',
        body: 'It is an entertainment and self-reflection space that uses cards, relationship questions, and psychological language to support gentle inquiry.',
      },
      {
        heading: 'What this site is not',
        body: 'It is not a guarantee of another person’s feelings, a prediction service, or a substitute for therapy, crisis care, legal advice, or medical support.',
      },
    ],
    relatedSlugs: ['/love-tarot-reading/', '/disclaimer/', '/privacy-policy/'],
  },
  {
    slug: '/contact/',
    title: 'Contact Mirror Tarot Reading',
    description: 'Contact Mirror Tarot Reading about site feedback, content questions, or policy requests.',
    primaryKeyword: 'contact mirror tarot reading',
    secondaryKeywords: ['mirror tarot contact'],
    type: 'trust',
    category: 'general',
    eyebrow: 'Contact',
    heading: 'Contact Mirror Tarot Reading',
    intro:
      'For feedback, content questions, or policy requests, use the contact details that will be published here before launch.',
    sections: [
      {
        heading: 'Before launch',
        body: 'This project is in development. A public contact method will be added before the site is submitted for AdSense review.',
      },
    ],
    relatedSlugs: ['/about/', '/privacy-policy/', '/disclaimer/'],
  },
  {
    slug: '/privacy-policy/',
    title: 'Privacy Policy | Mirror Tarot Reading',
    description: 'Privacy policy for Mirror Tarot Reading, including analytics, cookies, and advertising notes.',
    primaryKeyword: 'mirror tarot privacy policy',
    secondaryKeywords: ['privacy policy'],
    type: 'trust',
    category: 'general',
    eyebrow: 'Privacy',
    heading: 'Privacy Policy',
    intro:
      'This privacy policy explains the basic data practices planned for Mirror Tarot Reading. It must be updated before analytics or advertising services are connected.',
    sections: [
      {
        heading: 'Personal information',
        body: 'The first version of the site does not require accounts, names, birth dates, or personal relationship details to use the card reading tool.',
      },
      {
        heading: 'Cookies, analytics, and ads',
        body: 'Analytics and advertising services may use cookies or similar technologies after they are configured. This page should be updated with provider details before launch.',
      },
    ],
    relatedSlugs: ['/about/', '/contact/', '/disclaimer/'],
  },
  {
    slug: '/disclaimer/',
    title: 'Disclaimer | Mirror Tarot Reading',
    description:
      'Mirror Tarot readings are for entertainment and self-reflection, not guaranteed prediction or professional advice.',
    primaryKeyword: 'mirror tarot disclaimer',
    secondaryKeywords: ['tarot disclaimer', 'entertainment only tarot'],
    type: 'trust',
    category: 'general',
    eyebrow: 'Disclaimer',
    heading: 'Disclaimer',
    intro:
      'Mirror Tarot Reading is for entertainment and self-reflection. It does not provide guaranteed predictions or professional advice.',
    sections: [
      {
        heading: 'No guaranteed outcomes',
        body: 'Readings cannot prove what another person feels, guarantee reunion, or predict future events with certainty.',
      },
      {
        heading: 'Not professional advice',
        body: 'Content on this site is not psychological, medical, legal, financial, or crisis advice. If you are unsafe or in crisis, seek real-world support from qualified services.',
      },
    ],
    relatedSlugs: ['/about/', '/privacy-policy/', '/love-tarot-reading/'],
  },
];

export const contentPages = sitePages.filter((page) => page.slug !== '/');

export function getPageBySlug(slug: string): SitePage | undefined {
  return sitePages.find((page) => page.slug === slug);
}

export function getRelatedPages(page: SitePage): SitePage[] {
  return page.relatedSlugs
    .map((slug) => getPageBySlug(slug))
    .filter((relatedPage): relatedPage is SitePage => Boolean(relatedPage));
}
