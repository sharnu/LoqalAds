// Central source of truth for brand, contact, and navigation.
// Nothing brand-related should be hard-coded twice across the site.

export const site = {
  name: 'Nexus Engineering',
  legalName: 'LoqalAds Media Private Limited',
  domain: 'www.loqalads.in',
  url: 'https://www.loqalads.in',
  tagline: 'Building Solutions. Delivering Impact.',
  supportingLine: 'From requirements to production — and beyond.',
  description:
    'Nexus Engineering is a small, senior software engineering team — 14 to 25 years of experience per engineer — that designs, builds, ships, and maintains production-grade software, end-to-end.',
  email: 'loqalads@gmail.com',
  phone: '+91 99213 89393',
  phoneRaw: '+919921389393',
  whatsapp: 'https://wa.me/919921389393',
} as const;

// The SDLC spectrum — drawn from the lifecycle ring in the Nexus logo.
// Used as decorative per-item accents across the site. Each value works
// both as a foreground colour and, at low opacity, as a soft chip tint.
export const spectrum = [
  '#7C3AED', // violet
  '#2563EB', // blue
  '#0891B2', // cyan
  '#059669', // emerald
  '#D97706', // amber
  '#EA580C', // orange
  '#DB2777', // pink
] as const;

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Engagement', href: '/engagement' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
