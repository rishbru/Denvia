import type { Metadata } from 'next'
import {
  MapPin,
  Handshake,
  ClipboardCheck,
  ArrowRight,
  Globe2,
  Package,
  BadgeCheck,
  Headset,
} from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { CONDITION_FILTERS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'For Distributors',
  description:
    'Partner with Denvia as a distributor, stockist, or PCD—honest terms and dependable supply across India.',
}

const benefits = [
  {
    icon: Package,
    title: 'High-Demand Portfolio',
    body: 'Focused Cardiac, Pain, and Neuro formulations chosen for steady, year-round prescription demand.',
  },
  {
    icon: BadgeCheck,
    title: 'WHO-GMP Quality & Clear MRP',
    body: 'Every product comes with verified pack specifications, full batch traceability, and transparent documentation.',
  },
  {
    icon: Headset,
    title: 'Direct Support & Fast Dispatch',
    body: 'Work directly with our Bengaluru team for responsive order coordination, stock planning, and territory support.',
  },
]

const steps = [
  {
    icon: MapPin,
    title: 'Share Your Territory',
    body: 'Tell us your region, customer network (retail, hospital, or institutional), and the therapeutic lines you focus on.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quick Alignment Call',
    body: 'Our commercial team reviews territory availability, shares product & pack sheets, and aligns on terms.',
  },
  {
    icon: Handshake,
    title: 'Smooth Onboarding',
    body: 'Start receiving stock with complete regulatory documentation, promotional support, and a dedicated point of contact.',
  },
]

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For Distributors, Stockists &amp; PCD Partners
            </p>
            <h1 className="mt-3 max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl">
              Build a lasting distribution partnership with Denvia.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-accent-foreground/85">
              We partner with committed distributors, stockists, and regional PCD partners across India—with honest terms and dependable supply.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<Link href="/contact?topic=partnership" />}>
                Apply for a Partnership
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                nativeButton={false}
                render={<Link href="/therapies" />}
              >
                Browse Medicines
              </Button>
            </div>
          </div>
        </section>

        {/* Why Distribute Denvia */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why Partner With Us
              </p>
              <h2 className="mt-2.5 font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                Practical support for everyday trade and distribution.
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-bold text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Quick Portfolio Snapshot for Stockists */}
            <div className="mt-10 rounded-xl border border-border bg-secondary/45 p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Initial Product Portfolio Ready for Distribution
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Tablets and capsules across Cardiac, Pain, and Neuro care.
                  </p>
                </div>
                <Link
                  href="/therapies"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  Browse full composition &amp; strength list
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {CONDITION_FILTERS.filter((c) => c.id !== 'All').map((cat) => (
                  <div key={cat.id} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-bold text-card-foreground">
                        {cat.label}
                      </span>
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {cat.count} {cat.count === 1 ? 'Product' : 'Products'}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Onboarding */}
        <section className="border-b border-border bg-secondary/35">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <h2 className="font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
              How we get started together in 3 simple steps.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {steps.map((item, index) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-semibold text-primary">STEP 0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* International & Manufacturing Partners */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Globe2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="max-w-xl">
                  <h3 className="font-serif text-lg font-bold text-card-foreground">
                    International Distribution &amp; Manufacturing Enquiries
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
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
      </main>
      <SiteFooter />
    </div>
  )
}
