import type { Metadata } from 'next'
import { ArrowRight, Globe2 } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionNav } from '@/components/section-nav'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Why Partner with Us',
  description:
    'Partner with Denvia as a distributor, stockist, or PCD—focused therapies, clear terms, and dependable supply from Bengaluru.',
}

const pageSections = [
  { id: 'what-we-bring', label: 'What We Bring' },
  { id: 'who-we-partner-with', label: 'Who We Partner With' },
  { id: 'direct-desk', label: 'Direct Desk' },
]

const offers: {
  index: string
  title: string
  body?: string
  points: { label: string; text: string }[]
}[] = [
  {
    index: '01',
    title: 'High-Demand, Year-Round Portfolio',
    body: 'We avoid slow-moving or bloated catalogs. Our portfolio is strictly focused on essential therapeutic segments with steady, recurring clinical demand:',
    points: [
      {
        label: 'Cardiology',
        text: 'High-compliance daily maintenance therapies for chronic cardiovascular management.',
      },
      {
        label: 'Pain & Inflammation',
        text: 'Fast-acting analgesics and multimodal pain regimens with strong prescription turnover.',
      },
      {
        label: 'Neurology',
        text: 'High-precision formulations addressing critical chronic and acute neurological indications.',
      },
      {
        label: 'Commercial Advantage',
        text: 'Steady cash flow, predictable repeat prescriptions, and minimal shelf stagnation.',
      },
    ],
  },
  {
    index: '02',
    title: 'WHO-GMP Standards & Batch Integrity',
    points: [
      {
        label: 'Certified Production',
        text: 'Manufactured in audited, WHO-GMP compliant Indian manufacturing hubs.',
      },
      {
        label: '100% Traceability',
        text: 'End-to-end batch tracking from raw active material to final dispensed pack.',
      },
      {
        label: 'Verified Documentation',
        text: 'Instant access to Certificates of Analysis (CoA) and complete regulatory filings.',
      },
      {
        label: 'Zero Specification Tolerance',
        text: 'Every commercial batch is released strictly upon meeting predefined analytical criteria.',
      },
    ],
  },
  {
    index: '03',
    title: 'Commercial Clarity & Fair Trade Pricing',
    points: [
      {
        label: 'Transparent Margins',
        text: 'Clear, protected MRP and billing structures designed for sustainable distributor and retailer profitability.',
      },
      {
        label: 'Packaging Integrity',
        text: 'Standardized, tamper-evident blisters and cartons with high-clarity regulatory labeling.',
      },
      {
        label: 'Predictable Terms',
        text: 'Straightforward commercial terms without hidden deductions or unpredictable price swings.',
      },
    ],
  },
  {
    index: '04',
    title: 'Direct Bengaluru Coordination & Rapid Dispatch',
    points: [
      {
        label: 'Prompt Turnaround',
        text: 'Centralized inventory management ensures minimal lead time from order placement to dispatch.',
      },
      {
        label: 'Proactive Stock Buffers',
        text: 'Continuous manufacturing planning safeguards your region against unexpected market stockouts.',
      },
      {
        label: 'Dedicated Territory Support',
        text: 'Direct line to our Bengaluru operations desk for logistics tracking, documentation, and territory queries.',
      },
    ],
  },
]

const partners = [
  {
    title: 'Hospital & Institutional Procurement',
    body: 'Dedicated batch allocations, verified CoAs, prompt compliance paperwork, and guaranteed delivery schedules for hospital tenders.',
  },
  {
    title: 'Stockists & Regional Distributors',
    body: 'High-demand SKUs, sustainable margin parity, robust packaging, and responsive regional territory coordination.',
  },
  {
    title: 'Pharmacy Chains & Retail Networks',
    body: 'Predictable stock replenishment, tamper-evident packaging, clear MRP visibility, and patient-trusted formulations.',
  },
]

export default function PartnershipsPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Partner with Us</p>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl">
              <span className="block">Operational Dependability.</span>
              <span className="block">High-Demand Therapies.</span>
              <span className="block">Transparent Growth.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-accent-foreground/85">
              At Denvia Pharmaceuticals Private Limited, we view our distribution network as strategic partners, not just supply channels. In the pharmaceutical trade, stockouts hurt reputations, inconsistent margins disrupt cash flow, and slow support stalls business. We answer that with a focused, high-prescription portfolio and responsive operational support from our Bengaluru headquarters.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<Link href="/contact?topic=partnership" />}>
                Apply for a Partnership
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl px-6 xl:grid-cols-[13rem_minmax(0,1fr)] xl:gap-x-14">
          <div>
            <SectionNav label="Why Partner with Us" sections={pageSections} />
          </div>
          <div className="min-w-0">
            <section id="what-we-bring" className="scroll-mt-24 border-b border-border">
              <div className="py-14 md:py-18">
                <h2 className="font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                  What We Bring to Your Business
                </h2>
                <div className="mt-8">
                  {offers.map((offer) => (
                    <article key={offer.title} className="border-t border-border py-8">
                      <p className="font-serif text-sm tracking-wide text-primary">{offer.index}</p>
                      <h3 className="mt-2 max-w-2xl font-serif text-2xl leading-snug tracking-tight text-foreground">
                        {offer.title}
                      </h3>
                      {offer.body ? (
                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/85">{offer.body}</p>
                      ) : null}
                      <dl className="mt-6 max-w-2xl space-y-4">
                        {offer.points.map((point) => (
                          <div key={point.label}>
                            <dt className="text-sm font-semibold text-foreground">{point.label}</dt>
                            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.text}</dd>
                          </div>
                        ))}
                      </dl>
                    </article>
                  ))}
                </div>
                <p className="mt-2">
                  <Link
                    href="/therapies"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Browse the current medicine list
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </section>

            <section id="who-we-partner-with" className="scroll-mt-24 border-b border-border">
              <div className="py-14 md:py-18">
                <h2 className="font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                  Who We Partner With
                </h2>
                <div className="mt-8">
                  {partners.map((partner) => (
                    <article
                      key={partner.title}
                      className="grid gap-2 border-t border-border py-6 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-10"
                    >
                      <h3 className="font-serif text-lg font-bold leading-snug text-foreground">{partner.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">{partner.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="direct-desk" className="scroll-mt-24 border-b border-border">
              <div className="py-14 md:py-18">
                <h2 className="max-w-2xl font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                  Distribution Inquiries &amp; Direct Desk
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/85">
                  Whether you are expanding your therapeutic portfolio or seeking a dependable manufacturer for your region, our team is ready to assist with product availability, territory rights, and commercial terms.
                </p>
                <div className="mt-6">
                  <Button nativeButton={false} render={<Link href="/contact?topic=partnership" />}>
                    Apply for a Partnership
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>

                <div className="mt-10 flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Globe2 className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        International Distribution &amp; Manufacturing Enquiries
                      </h3>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        We also welcome discussions with international distributors and contract manufacturers seeking a long-term partner in India.
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    nativeButton={false}
                    render={<Link href="/contact?topic=international-business" />}
                  >
                    Connect with us
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
