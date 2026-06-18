export type CardCategory =
  | 'general'
  | 'missing'
  | 'texting'
  | 'feelings'
  | 'waiting'
  | 'no-contact'
  | 'anxiety'
  | 'attachment'
  | 'letting-go';

export type MirrorCard = {
  id: string;
  name: string;
  hook: string;
  window: string;
  mirror: string;
  action: string;
  categories: CardCategory[];
};

export const mirrorCards: MirrorCard[] = [
  {
    id: 'the-silence',
    name: 'The Silence',
    hook: 'The quiet is asking to be understood before it is filled.',
    window:
      'Their silence may mean distance, uncertainty, overwhelm, or simple avoidance. This card does not turn silence into proof of love or rejection.',
    mirror:
      'Notice how quickly silence becomes a story about your worth. The ache may be less about one missing reply and more about needing reassurance to feel steady.',
    action: 'Wait before reaching again. Write what you want their reply to prove, then ask whether you can give part of that reassurance to yourself.',
    categories: ['missing', 'no-contact', 'anxiety'],
  },
  {
    id: 'the-message',
    name: 'The Message',
    hook: 'A message can open a door, but it cannot carry the whole relationship.',
    window:
      'Communication may still be possible, especially if the message is simple and grounded. The card favors clarity over emotional testing.',
    mirror:
      'If you want to text, ask whether you are sharing something true or trying to force relief from uncertainty.',
    action: 'Draft one honest sentence. If it asks for clarity without chasing, it may be worth sending.',
    categories: ['texting', 'feelings', 'general'],
  },
  {
    id: 'the-waiting-room',
    name: 'The Waiting Room',
    hook: 'Waiting becomes heavy when your life has to pause with it.',
    window:
      'The connection may be unresolved, but unresolved does not mean active. Something is suspended rather than moving clearly toward you.',
    mirror:
      'This card asks whether waiting has become a way to avoid choosing your own next step.',
    action: 'Set one real-world boundary around how long you will keep checking, hoping, or rereading signs.',
    categories: ['waiting', 'no-contact', 'letting-go'],
  },
  {
    id: 'the-mirror',
    name: 'The Mirror',
    hook: 'What you ask about them may be revealing what you need from yourself.',
    window:
      'The other person may matter, but this reading centers the emotional meaning you have placed on their behavior.',
    mirror:
      'Your question may be about being chosen, seen, or safe. That need deserves respect even if this person cannot meet it well.',
    action: 'Name the need underneath the question before deciding what to do next.',
    categories: ['general', 'attachment', 'anxiety'],
  },
  {
    id: 'the-closed-door',
    name: 'The Closed Door',
    hook: 'Not every closed door is a challenge to prove your devotion.',
    window:
      'There may be a real limit here: emotional unavailability, timing, avoidance, or a lack of mutual effort.',
    mirror:
      'The painful part may be accepting that effort cannot turn every unavailable person into a safe one.',
    action: 'Stop negotiating with a pattern that repeatedly leaves you smaller.',
    categories: ['letting-go', 'waiting', 'no-contact'],
  },
  {
    id: 'the-returning-thought',
    name: 'The Returning Thought',
    hook: 'A thought that keeps returning may be asking for care, not obedience.',
    window:
      'Thinking of them often does not prove they are thinking of you with the same intensity.',
    mirror:
      'The loop may be your mind trying to solve emotional ambiguity. Rumination often feels like progress, but it can keep the wound open.',
    action: 'When the thought returns, ask what feeling came right before it.',
    categories: ['missing', 'anxiety', 'attachment'],
  },
  {
    id: 'the-unsent-text',
    name: 'The Unsent Text',
    hook: 'The message you do not send may still tell the truth.',
    window:
      'There is something you want to say, but timing and motive matter. Contact may not bring the response you hope for.',
    mirror:
      'The unsent text may reveal the part of you that wants to be met without having to ask twice.',
    action: 'Write the message privately first. Keep only the sentence that preserves your dignity.',
    categories: ['texting', 'anxiety', 'waiting'],
  },
  {
    id: 'the-soft-boundary',
    name: 'The Soft Boundary',
    hook: 'A boundary can be gentle and still be real.',
    window:
      'This connection may need clearer terms, less guessing, or a pause from emotional overextension.',
    mirror:
      'You may be confusing empathy with unlimited access to you. Care does not require self-abandonment.',
    action: 'Choose one behavior you will no longer perform just to keep the connection alive.',
    categories: ['letting-go', 'attachment', 'texting'],
  },
  {
    id: 'the-mixed-signal',
    name: 'The Mixed Signal',
    hook: 'Inconsistency is also information.',
    window:
      'They may feel something and still be unable or unwilling to offer steadiness. Mixed signals are not the same as clear intention.',
    mirror:
      'Part of the pull may come from intermittent reassurance. The nervous system can mistake unpredictability for chemistry.',
    action: 'Watch the pattern, not the peak moments. Consistency matters more than intensity.',
    categories: ['feelings', 'attachment', 'anxiety'],
  },
  {
    id: 'the-old-pattern',
    name: 'The Old Pattern',
    hook: 'This may feel familiar because it is familiar.',
    window:
      'The situation may be echoing a previous relationship dynamic: pursuit, withdrawal, proving, waiting, or overexplaining.',
    mirror:
      'This card asks what role you keep being invited to play, and whether you still want to accept it.',
    action: 'Name the pattern in one sentence. A named pattern is easier to interrupt.',
    categories: ['attachment', 'anxiety', 'general'],
  },
  {
    id: 'the-nervous-heart',
    name: 'The Nervous Heart',
    hook: 'An anxious heart needs care before conclusions.',
    window:
      'The relationship may be unclear, but your body may be responding as if danger is already certain.',
    mirror:
      'This card separates intuition from activation. A loud feeling is real, but it is not always a final answer.',
    action: 'Regulate first, decide second. Do not make a relationship decision at the peak of panic.',
    categories: ['anxiety', 'attachment', 'texting'],
  },
  {
    id: 'the-clear-no',
    name: 'The Clear No',
    hook: 'A clear no can be kinder than a confusing maybe.',
    window:
      'The available evidence may not support continued pursuit. This card leans toward acceptance rather than another attempt to decode them.',
    mirror:
      'You may be bargaining with reality because the truth hurts. That does not make you weak; it means this mattered.',
    action: 'Let the answer be simple enough to protect your peace.',
    categories: ['letting-go', 'waiting', 'no-contact'],
  },
  {
    id: 'the-almost-yes',
    name: 'The Almost Yes',
    hook: 'Almost can feel intoxicating when you are starving for certainty.',
    window:
      'There may be warmth, attraction, or unfinished energy here, but not yet enough clarity to call it secure.',
    mirror:
      'The almost may be what keeps you invested: close enough to hope, far enough to ache.',
    action: 'Ask for behavior, not potential. What is actually being offered now?',
    categories: ['feelings', 'waiting', 'missing'],
  },
  {
    id: 'the-unchosen-self',
    name: 'The Unchosen Self',
    hook: 'The fear of not being chosen deserves tenderness, not proof-seeking.',
    window:
      'Their actions may be touching an old wound around being selected, prioritized, or special.',
    mirror:
      'This reading asks you to separate your worth from their current capacity to choose you well.',
    action: 'Do one thing today that treats you as already worthy of care.',
    categories: ['attachment', 'anxiety', 'letting-go'],
  },
  {
    id: 'the-honest-pause',
    name: 'The Honest Pause',
    hook: 'The pause is not punishment; it is space to hear yourself.',
    window:
      'Rushing may blur the truth. This card favors a short pause before texting, deciding, or interpreting.',
    mirror:
      'Your urgency may be asking for relief, not necessarily action. Relief and clarity are not always the same thing.',
    action: 'Wait 24 hours, then reread your question with a calmer nervous system.',
    categories: ['texting', 'anxiety', 'general'],
  },
  {
    id: 'the-release',
    name: 'The Release',
    hook: 'Letting go is not pretending it did not matter.',
    window:
      'This connection may have given you something real, but the next step may involve loosening your grip on the outcome.',
    mirror:
      'Release begins when you stop making your future depend on one person becoming clear.',
    action: 'Choose one ritual of closure: delete a draft, mute a trigger, or reclaim one hour for yourself.',
    categories: ['letting-go', 'no-contact', 'waiting'],
  },
];

export function getCardsForCategory(category: CardCategory): MirrorCard[] {
  const filtered = mirrorCards.filter((card) => card.categories.includes(category));
  return filtered.length > 0 ? filtered : mirrorCards;
}
