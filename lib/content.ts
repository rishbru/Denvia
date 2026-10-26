export type Medicine = {
  id: string
  slug: string
  name: string
  fullTitle: string
  dosageForm: 'Tablet' | 'Capsule' | 'Controlled-Release Tablet'
  strengths: string[]
  therapeuticCategory: string
  conditionGroup: 'Heart & Angina' | 'Pain & Mobility' | 'Nerve & Nutritional Care'
  conditionTag: string
  clinicalUse: string
}

export const MEDICINES: Medicine[] = [
  {
    id: '01',
    slug: 'nicorandil-tablets',
    name: 'Nicorandil',
    fullTitle: 'Nicorandil Tablets',
    dosageForm: 'Tablet',
    strengths: ['5 mg', '10 mg'],
    therapeuticCategory: 'Cardiovascular / Anti-anginal',
    conditionGroup: 'Heart & Angina',
    conditionTag: 'Angina Care',
    clinicalUse: 'Vasodilator therapy for long-term management and prevention of chronic stable angina.',
  },
  {
    id: '02',
    slug: 'ticagrelor-tablets',
    name: 'Ticagrelor',
    fullTitle: 'Ticagrelor Tablets',
    dosageForm: 'Tablet',
    strengths: ['90 mg'],
    therapeuticCategory: 'Antiplatelet / Cardiovascular',
    conditionGroup: 'Heart & Angina',
    conditionTag: 'Antiplatelet Care',
    clinicalUse: 'Platelet aggregation inhibitor supporting secondary cardiovascular event prevention.',
  },
  {
    id: '03',
    slug: 'rosuvastatin-calcium-tablets',
    name: 'Rosuvastatin Calcium',
    fullTitle: 'Rosuvastatin Calcium Tablets',
    dosageForm: 'Tablet',
    strengths: ['10 mg', '20 mg'],
    therapeuticCategory: 'Lipid-lowering / Cardiovascular',
    conditionGroup: 'Heart & Angina',
    conditionTag: 'Cholesterol & Lipid Care',
    clinicalUse: 'Statin therapy for elevated cholesterol, dyslipidaemia, and cardiovascular risk reduction.',
  },
  {
    id: '04',
    slug: 'rosuvastatin-clopidogrel-capsules',
    name: 'Rosuvastatin + Clopidogrel',
    fullTitle: 'Rosuvastatin + Clopidogrel Capsules',
    dosageForm: 'Capsule',
    strengths: ['10 mg + 75 mg', '20 mg + 75 mg'],
    therapeuticCategory: 'Cardiovascular',
    conditionGroup: 'Heart & Angina',
    conditionTag: 'Heart & Stroke Prevention',
    clinicalUse: 'Dual lipid-lowering and antiplatelet capsule simplifying daily chronic cardiac regimens.',
  },
  {
    id: '05',
    slug: 'rosuvastatin-clopidogrel-aspirin-capsules',
    name: 'Rosuvastatin + Clopidogrel + Aspirin',
    fullTitle: 'Rosuvastatin + Clopidogrel + Aspirin Capsules',
    dosageForm: 'Capsule',
    strengths: ['10 mg + 75 mg + 75 mg', '20 mg + 75 mg + 75 mg'],
    therapeuticCategory: 'Cardiovascular / Antiplatelet',
    conditionGroup: 'Heart & Angina',
    conditionTag: 'Triple-Action Cardiac Care',
    clinicalUse: 'Fixed-dose combination supporting comprehensive lipid management and dual antiplatelet care.',
  },
  {
    id: '06',
    slug: 'nitroglycerin-cr-tablets',
    name: 'Nitroglycerin Controlled-Release',
    fullTitle: 'Nitroglycerin Controlled-Release Tablets',
    dosageForm: 'Controlled-Release Tablet',
    strengths: ['2.6 mg'],
    therapeuticCategory: 'Anti-anginal / Cardiovascular',
    conditionGroup: 'Heart & Angina',
    conditionTag: 'Angina Care',
    clinicalUse: 'Sustained-release nitrate formulation for continuous prophylaxis of angina pectoris.',
  },
  {
    id: '07',
    slug: 'methylcobalamin-ala-pyridoxine-folic-acid-capsules',
    name: 'Methylcobalamin + Alpha Lipoic Acid + Pyridoxine HCl + Folic Acid',
    fullTitle: 'Methylcobalamin + Alpha Lipoic Acid + Pyridoxine HCl + Folic Acid Capsules',
    dosageForm: 'Capsule',
    strengths: ['Standard Formulation'],
    therapeuticCategory: 'Neuro-vitamin / Supportive',
    conditionGroup: 'Nerve & Nutritional Care',
    conditionTag: 'Neuropathy & Nerve Care',
    clinicalUse: 'Neurotropic vitamin and antioxidant combination supporting peripheral nerve health and recovery.',
  },
  {
    id: '08',
    slug: 'aceclofenac-paracetamol-tablets',
    name: 'Aceclofenac + Paracetamol',
    fullTitle: 'Aceclofenac + Paracetamol Tablets',
    dosageForm: 'Tablet',
    strengths: ['100 mg + 325 mg'],
    therapeuticCategory: 'Analgesic / Anti-inflammatory',
    conditionGroup: 'Pain & Mobility',
    conditionTag: 'Pain & Fever Relief',
    clinicalUse: 'Proven NSAID and analgesic combination for acute musculoskeletal, dental, and joint pain.',
  },
  {
    id: '09',
    slug: 'aceclofenac-paracetamol-serratiopeptidase-tablets',
    name: 'Aceclofenac + Paracetamol + Serratiopeptidase',
    fullTitle: 'Aceclofenac + Paracetamol + Serratiopeptidase Tablets',
    dosageForm: 'Tablet',
    strengths: ['100 mg + 325 mg + 10 mg'],
    therapeuticCategory: 'Analgesic / Anti-inflammatory',
    conditionGroup: 'Pain & Mobility',
    conditionTag: 'Pain & Swelling Relief',
    clinicalUse: 'Triple-action relief for inflammatory pain accompanied by tissue oedema and post-traumatic swelling.',
  },
  {
    id: '10',
    slug: 'aceclofenac-paracetamol-thiocolchicoside-tablets',
    name: 'Aceclofenac + Paracetamol + Thiocolchicoside',
    fullTitle: 'Aceclofenac + Paracetamol + Thiocolchicoside Tablets',
    dosageForm: 'Tablet',
    strengths: ['100 mg + 325 mg + 4 mg'],
    therapeuticCategory: 'Analgesic / Muscle relaxant',
    conditionGroup: 'Pain & Mobility',
    conditionTag: 'Muscle Spasm & Pain',
    clinicalUse: 'Targeted analgesic and central muscle relaxant for acute low back pain and painful muscle spasms.',
  },
]

export type LeadershipSeat = {
  role: string
  focus: string
  bio: string
}

/** Leadership seats — publish named director profiles here when ready (do not invent names). */
export const LEADERSHIP_SEATS: LeadershipSeat[] = [
  {
    role: 'Founder & Managing Director',
    focus: 'Strategy, portfolio & clinical partnerships',
    bio: 'Guides company strategy and portfolio priorities so cardiac, pain, and chronic-care medicines stay accessible and dependable across India.',
  },
  {
    role: 'Director — Operations & Quality',
    focus: 'Manufacturing oversight & compliance',
    bio: 'Accountable for partner audits, batch-level quality assurance, and regulatory compliance before products reach the market.',
  },
  {
    role: 'Director — Commercial & Distribution',
    focus: 'Stockist, PCD & institutional network',
    bio: 'Builds long-term relationships with stockists, regional PCD partners, and pharmacies with clear terms and reliable supply.',
  },
]

export const CONDITION_FILTERS = (
  [
    {
      id: 'All',
      label: 'All',
      description: 'Full tablet and capsule list.',
    },
    {
      id: 'Heart & Angina',
      label: 'Heart & Cholesterol',
      description: 'Cardiovascular, anti-anginal, antiplatelet, and lipid-lowering therapies.',
    },
    {
      id: 'Pain & Mobility',
      label: 'Pain & Muscle Spasm',
      description: 'Analgesic, anti-inflammatory, and muscle-relaxant combinations.',
    },
    {
      id: 'Nerve & Nutritional Care',
      label: 'Nerve Care',
      description: 'Neuro-vitamin and antioxidant support for nerve health.',
    },
  ] as const
).map((filter) => ({
  ...filter,
  count:
    filter.id === 'All'
      ? MEDICINES.length
      : MEDICINES.filter((m) => m.conditionGroup === filter.id).length,
}))

export const TRUST_PILLARS = [
  {
    title: 'WHO-GMP Partners',
    body: 'Produced at audited, WHO-GMP compliant Indian manufacturing facilities.',
  },
  {
    title: 'Batch Traceability',
    body: 'Analytical testing, stability checks, and full batch documentation before release.',
  },
  {
    title: 'Dependable Supply',
    body: 'Consistent availability and clear pack/MRP support for trade and hospitals.',
  },
]

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
      'Anti-anginal, antiplatelet, and lipid-lowering therapies built for dependable, long-term cardiac care.',
    emphasis:
      '6 initial formulations including Nicorandil, Ticagrelor, Rosuvastatin, and fixed-dose cardiac capsules.',
  },
  {
    slug: 'pain-management',
    name: 'Pain & Mobility',
    summary:
      'Trusted analgesic, anti-inflammatory, and muscle-relaxant combinations for acute and chronic pain relief.',
    emphasis:
      '3 initial Aceclofenac + Paracetamol combinations tailored for pain, swelling, and muscle spasm.',
  },
  {
    slug: 'neuro-supportive',
    name: 'Neuro & Nutritional Care',
    summary:
      'Neurotropic vitamin and antioxidant formulations supporting peripheral nerve recovery and daily vitality.',
    emphasis:
      'Methylcobalamin + Alpha Lipoic Acid + Pyridoxine HCl + Folic Acid capsules.',
  },
]

export const PORTFOLIO_DEVELOPMENT: { name: string; focus: string }[] = [
  { name: 'Gastroenterology', focus: 'Acid-peptic, PPI & digestive care' },
  { name: 'Dermatology', focus: 'Topical & oral skin care formulations' },
  { name: 'Anti-Infectives', focus: 'Antibacterial & antifungal care' },
  { name: 'Respiratory & Diabetes', focus: 'Airway & chronic metabolic care' },
]

export const OPERATING_MODEL_STEPS = [
  {
    step: '01',
    title: 'WHO-GMP Manufacturing',
    body: 'Audited third-party manufacturing partners produce our formulations to strict quality specifications.',
  },
  {
    step: '02',
    title: 'Denvia Quality & Brand Care',
    body: 'We verify every batch, maintain regulatory documentation, and ensure steady stock availability.',
  },
  {
    step: '03',
    title: 'Distributors & Stockists',
    body: 'Regional PCD and trade partners bring our portfolio to hospitals and pharmacies across India.',
  },
  {
    step: '04',
    title: 'Doctors & Patients',
    body: 'Clinicians prescribe with confidence, and patients receive safe, effective, and affordable care.',
  },
]

export const OPERATING_SENTENCE =
  'A transparent path from WHO-GMP certified manufacturing partners to the distributors, doctors, and patients who count on us.'
