/** Site-wide settings. Edit here; every page reads from this file. */
export const SITE = {
  url: 'https://ogxing.com',
  name: 'ogxing',
  title: 'ogxing · Research',
  description:
    'Research notes and findings on ISRA, an experimental architecture for general intelligence, and on hardware, robotics and automation.',
  locale: 'en',
} as const;

export const AUTHOR = {
  name: 'Ong Guan Xing',
  email: 'xing12397@gmail.com',
} as const;

/** Footer icon links. */
export type LinkIcon = 'github' | 'linkedin' | 'youtube' | 'email';
export const LINKS: { label: string; href: string; icon: LinkIcon }[] = [
  { label: 'GitHub', href: 'https://github.com/ogxing', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ogxing', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ogxing', icon: 'youtube' },
  { label: 'Email', href: 'mailto:xing12397@gmail.com', icon: 'email' },
];

/**
 * Topics, in display order. A post's `topic` front-matter must be one of these keys.
 * Topics with no published posts are hidden automatically.
 */
export const TOPICS = {
  isra: { label: 'ISRA', description: 'An experimental architecture for artificial general intelligence.' },
  robotics: { label: 'Robotics', description: 'Embodiment, actuation and control.' },
  hardware: { label: 'Hardware', description: 'Sensors, compute and the physical substrate.' },
  automation: { label: 'Automation', description: 'Systems that do work without supervision.' },
  notes: { label: 'Notes', description: 'Shorter observations and working notes.' },
} as const;
export type TopicKey = keyof typeof TOPICS;
