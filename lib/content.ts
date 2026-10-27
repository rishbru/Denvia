/** Static product catalog served from /public/catalog */
export const PRODUCT_CATALOG_HREF = '/catalog/Denvia_Medicines_Catalog.pdf'
export const PRODUCT_CATALOG_FILENAME = 'Denvia_Medicines_Catalog.pdf'

/** Temporary WhatsApp Business number — replace when the official line is ready */
export const WHATSAPP_E164 = '918296682121'
export const WHATSAPP_DISPLAY = '+91 82966 82121'
export const WHATSAPP_PREFILL =
  "Hello, I'd like to know more about Denvia Pharmaceuticals."
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

export type MedicineCategory =
  | 'Cardiac'
  | 'Antibiotic'
  | 'Pain Management'
  | 'Cough Syrups'
  | 'Multivitamins'
  | 'Calcium'
  | 'Gastro'
  | 'Respiratory'
  | 'Protein Powder'

export type Medicine = {
  id: string
  name: string
  specification: string
  category: MedicineCategory
  strengths: string[]
}

export const MEDICINES: Medicine[] = [
  { id: '01', name: 'NICODENVIA', specification: 'Nicorandil', category: 'Cardiac', strengths: ['5 mg', '10 mg'] },
  { id: '02', name: 'ROSHUVIA', specification: 'Rosuvastatin', category: 'Cardiac', strengths: ['10 mg', '20 mg'] },
  { id: '03', name: 'Rosuvastatin 10 + Aspirin 75 + Clopidogrel 75', specification: '', category: 'Cardiac', strengths: [] },
  { id: '04', name: 'TICADENVIA', specification: 'Ticagrelor', category: 'Cardiac', strengths: ['90 mg'] },
  { id: '05', name: 'Rosuvastatin + Clopidogrel', specification: '', category: 'Cardiac', strengths: ['10 mg + 75 mg', '20 mg + 75 mg'] },
  { id: '06', name: 'NITRODENVIA', specification: 'Nitroglycerin', category: 'Cardiac', strengths: ['2.6 mg'] },
  { id: '07', name: 'CEFODENVIA', specification: 'Cefpodoxime Proxetil 20 mg', category: 'Antibiotic', strengths: [] },
  { id: '08', name: 'DENVICLAV', specification: 'Amoxycillin / Clavulanic acid', category: 'Antibiotic', strengths: [] },
  { id: '09', name: 'DENVIMOL', specification: 'Aceclofenac, Paracetamol', category: 'Pain Management', strengths: ['100 mg + 325 mg'] },
  { id: '10', name: 'Aceclofenac + Paracetamol + Serratiopeptidase', specification: '', category: 'Pain Management', strengths: [] },
  { id: '11', name: 'Aceclofenac + Paracetamol + Thiocolchicoside', specification: '', category: 'Pain Management', strengths: [] },
  { id: '12', name: 'DENVIKOF', specification: 'Expectorants, Mucolytics', category: 'Cough Syrups', strengths: [] },
  { id: '13', name: 'DENBION', specification: 'Multivitamins', category: 'Multivitamins', strengths: [] },
  { id: '14', name: 'DENAVITA', specification: 'Neurotropic Vitamins', category: 'Multivitamins', strengths: [] },
  { id: '15', name: 'DENVICOB', specification: 'Methylcobalamin / Alpha Lipoic Acid / Folic Acid', category: 'Multivitamins', strengths: [] },
  { id: '16', name: 'DENVIACAL', specification: 'Calcium Supplements', category: 'Calcium', strengths: [] },
  { id: '17', name: 'DENVIPANTA', specification: 'Pantoprazole + Domperidone', category: 'Gastro', strengths: [] },
  { id: '18', name: 'Proton Pump Inhibitors (Antacids)', specification: '', category: 'Gastro', strengths: [] },
  { id: '19', name: 'PULMONILIN', specification: 'Acebrophylline + Acetyl Cysteine', category: 'Respiratory', strengths: [] },
  { id: '20', name: 'MONTOVIA', specification: 'Montelukast + Levocetirizine', category: 'Respiratory', strengths: [] },
  { id: '21', name: 'MONTOVIA - LC', specification: '', category: 'Respiratory', strengths: [] },
  { id: '22', name: 'DENPROVIA', specification: 'Protein Powder', category: 'Protein Powder', strengths: [] },
]

const MEDICINE_CATEGORIES: MedicineCategory[] = [
  'Cardiac',
  'Antibiotic',
  'Pain Management',
  'Cough Syrups',
  'Multivitamins',
  'Calcium',
  'Gastro',
  'Respiratory',
  'Protein Powder',
]

export const CONDITION_FILTERS = (
  [
    { id: 'All', label: 'All' },
    ...MEDICINE_CATEGORIES.map((category) => ({ id: category, label: category })),
  ] as const
).map((filter) => ({
  ...filter,
  count:
    filter.id === 'All'
      ? MEDICINES.length
      : MEDICINES.filter((medicine) => medicine.category === filter.id).length,
}))

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
  { name: 'Dermatology', focus: 'Topical and oral skin-care formulations' },
  { name: 'Diabetes', focus: 'Chronic metabolic care' },
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
