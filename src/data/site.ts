export const site = {
  name: 'Mirror Tarot Reading',
  url: 'https://mirrortarotreading.com',
  tagline: 'Ask about them. Discover what the question reveals about you.',
  description:
    'A reflective love card reading site for relationship uncertainty, emotional patterns, and gentle self-inquiry.',
  nav: [
    { label: 'Love Reading', href: '/love-tarot-reading/' },
    { label: 'Questions', href: '/does-he-miss-me-tarot/' },
    { label: 'Patterns', href: '/relationship-anxiety-or-gut-feeling/' },
    { label: 'Cards', href: '/cards/' },
    { label: 'About', href: '/about/' },
  ],
};

export type SiteNavItem = (typeof site.nav)[number];
