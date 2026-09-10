export type Division = {
  slug: string
  name: string
  summary: string
  emphasis: string
}

export const THERAPEUTIC_DIVISIONS: Division[] = [
  {
    slug: 'cardio-metabolic',
    name: 'Cardio-Metabolic',
    summary:
      'Antihypertensive, lipid-management and diabetes-related prescription therapies for long-term, everyday care.',
    emphasis:
      'Emphasis on long-term availability, formulation clarity and continuity of supply for chronic-care regimens.',
  },
  {
    slug: 'dermatology',
    name: 'Dermatology',
    summary:
      'Premium topical and oral formulations, including antifungal and other clinician-directed dermatology products.',
    emphasis:
      'Dosage form, strength and pack are presented clearly to support confident, day-to-day prescribing.',
  },
  {
    slug: 'gastroenterology',
    name: 'Gastroenterology',
    summary:
      'Acid-peptic, motility and digestive-health prescription formulations across common gastrointestinal conditions.',
    emphasis:
      'Composition and release type are clearly distinguished so equivalent-looking products are never confused.',
  },
  {
    slug: 'anti-infectives',
    name: 'Anti-Infectives',
    summary:
      'Clinician-directed antimicrobial products for prescriber-led management of bacterial and fungal infections.',
    emphasis:
      'Presented through antimicrobial-stewardship-conscious, prescriber-directed language rather than promotion.',
  },
  {
    slug: 'pain-management',
    name: 'Pain Management',
    summary:
      'Clinician-directed analgesic and anti-inflammatory products for acute and chronic pain presentations.',
    emphasis:
      'Presented with balanced benefit-risk and safety language, consistent with responsible prescribing.',
  },
]

export const PORTFOLIO_DEVELOPMENT: { name: string }[] = [
  { name: 'Respiratory Care' },
  { name: 'Neurology & CNS' },
  { name: "Women's Health" },
  { name: 'Urology & Nephrology' },
]

export const OPERATING_MODEL_STEPS = [
  {
    step: '01',
    title: 'Qualified manufacturers',
    body: 'Selected third-party manufacturers produce approved products to agreed specifications.',
  },
  {
    step: '02',
    title: 'Denvia',
    body: 'We select the portfolio, own and market the brands, maintain documentation and coordinate supply.',
  },
  {
    step: '03',
    title: 'Doctors',
    body: 'Prescribing doctors build clinical confidence and create demand through verifiable product information.',
  },
  {
    step: '04',
    title: 'Trade partners',
    body: 'Stockists, distributors and pharmacies convert demand into dependable, everyday market availability.',
  },
  {
    step: '05',
    title: 'Patients',
    body: 'Patients are the end users and the ultimate beneficiaries of quality and safety at every step.',
  },
]

export const OPERATING_SENTENCE =
  'A clear path from qualified manufacturing partners to the healthcare professionals, trade partners and patients we serve.'
