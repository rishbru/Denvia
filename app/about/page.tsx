import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, ShieldCheck } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AboutSectionNav } from '@/components/about-section-nav'
import { LEADERSHIP_SEATS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Making high-quality prescription medicine accessible, reliable, and affordable across India.',
}

const whyChoose = [
  {
    title: 'Zero Compromise on Quality',
    body: 'Every commercial batch is released strictly upon meeting rigorous analytical testing and predefined specification standards. We adhere to tight quality benchmarks for therapeutic quality, purity, and patient safety in every dose.',
  },
  {
    title: 'Manufacturing Standards',
    body: 'Our products are manufactured in audited, WHO-GMP compliant Indian facilities equipped with modern processing infrastructure and monitored under strict Good Laboratory and Manufacturing Practices.',
  },
  {
    title: 'End-to-End Batch Traceability',
    body: 'From active ingredients to final packaging, complete batch visibility is embedded into our supply chain. We maintain transparent, verifiable documentation so our partners always know the exact provenance of what they dispense.',
  },
  {
    title: 'Dependable Supply & Commercial Clarity',
    body: 'We value our trade and institutional partners. Through predictable inventory planning, standardized packaging, and transparent pack and MRP structures, we keep hospital and retail supply lines moving without disruption.',
  },
]

const distinctions = [
  {
    title: 'Clinical Confidence',
    body: 'Consistent formulations that give physicians confidence in everyday practice.',
  },
  {
    title: 'Supply Chain Rigor',
    body: 'Minimized lead times, active stock buffers, and dedicated support for trade and institutional tenders.',
  },
  {
    title: 'Regulatory Integrity',
    body: 'Complete documentation, batch release certificates (CoA), and zero tolerance for specification deviations.',
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About Denvia Pharmaceuticals Private Limited
            </p>
            <h1 className="mt-3 max-w-3xl text-balance font-serif text-3xl leading-tight tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl">
              Advancing Healthcare Through Trust, Precision, and Dependable Supply
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-accent-foreground/85">
              Making high-quality prescription medicine accessible, reliable, and affordable across India.
            </p>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl px-6 xl:grid-cols-[13rem_minmax(0,1fr)] xl:gap-x-14">
          <div>
            <AboutSectionNav />
          </div>
          <div className="min-w-0">
        <section id="who-we-are" className="scroll-mt-24 border-b border-border">
          <div className="grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-18">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Who We Are</p>
              <div className="mt-3 space-y-4 text-pretty text-base leading-relaxed text-foreground/85">
                <p>
                  Denvia Pharmaceuticals Private Limited is an Indian pharmaceutical company. We supply safe, effective, and high-quality prescription medicines to hospitals, pharmacies, and clinics across India.
                </p>
                <p>
                  Clinicians should be able to prescribe with confidence, distributors should be able to count on continuous supply, and patients should receive medicines produced to rigorous pharmaceutical standards.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src="/images/quality-denvia.png"
                alt="Finished blister packs of tablets moving along a clean automated quality-control inspection line"
                className="aspect-[5/4] w-full object-cover"
                width={720}
                height={576}
                unoptimized
              />
              <div className="border-t border-border bg-card p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Award className="h-4 w-4" aria-hidden="true" />
                  Zero Compromise on Quality
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  Every commercial batch is released strictly upon meeting rigorous analytical testing and predefined specification standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="scroll-mt-24 border-b border-border">
          <div className="py-16 md:py-20">
            <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  Vision
                </p>
                <p className="mt-4 max-w-2xl text-pretty font-serif text-2xl font-normal leading-relaxed tracking-tight text-foreground">
                  To be one of India&apos;s most dependable pharmaceutical partners, recognized for unwavering product quality, patient-first ethics, and accessible therapeutic solutions.
                </p>
              </div>
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  Mission
                </p>
                <p className="mt-4 max-w-2xl text-pretty font-serif text-2xl font-normal leading-relaxed tracking-tight text-foreground">
                  To bridge quality and affordability by manufacturing formulations that adhere to global standards, ensuring transparent distribution, and safeguarding healthcare accessibility for all.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-choose" className="scroll-mt-24 border-b border-border">
          <div className="py-14 md:py-18">
            <h2 className="font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
              Why Choose Denvia
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-bold text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="what-sets-us-apart" className="scroll-mt-24 -mx-6 border-b border-border bg-secondary/35 px-6 xl:mx-0">
          <div className="py-14 md:py-18">
            <h2 className="font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
              What Sets Us Apart
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {distinctions.map((item) => (
                <div key={item.title}>
                  <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="board" className="scroll-mt-24 border-b border-border">
          <div className="py-14 md:py-18">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leadership</p>
            <h2 className="mt-3 font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
              Board of Directors
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
              Named director profiles will be published here. These seats are accountable for quality, ethics, and partner success.
            </p>
            <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {LEADERSHIP_SEATS.map((seat, index) => (
                <article key={`${seat.role}-${index}`} className="flex flex-col border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Profile forthcoming
                  </p>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">{seat.role}</h3>
                  <p className="mt-1.5 text-xs font-medium text-muted-foreground">{seat.focus}</p>
                  <div className="mt-3 h-0.5 w-10 bg-primary" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{seat.bio}</p>
                </article>
              ))}
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
