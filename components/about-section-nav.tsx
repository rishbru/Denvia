'use client'

import { SectionNav } from '@/components/section-nav'

const sections = [
  { id: 'who-we-are', label: 'Who We Are' },
  { id: 'vision', label: 'Vision' },
  { id: 'why-choose', label: 'Why Choose' },
  { id: 'what-sets-us-apart', label: 'What Sets Us Apart' },
  { id: 'board', label: 'Board' },
]

export function AboutSectionNav() {
  return <SectionNav label="Who We Are" sections={sections} />
}
