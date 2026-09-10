import { MapPin, Handshake, ClipboardCheck, ArrowRight, Globe2 } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: MapPin,
    title: 'Territory review',
    body: 'We look at the region, current coverage and where a new partner would add dependable reach.',
  },
  {
    icon: ClipboardCheck,
    title: 'Partner evaluation',
    body: 'Capacity, current lines carried and distribution experience are reviewed against our partner criteria.',
  },
  {
    icon: Handshake,
    title: 'Onboarding',
    body: 'Approved partners are onboarded with portfolio access, documentation and a direct support contact.',
  },
]

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Regional partnerships
            </p>
            <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight tracking-tight text-accent-foreground sm:text-5xl">
              Partner with Denvia across India.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-accent-foreground/75">
              We are actively building regional PCD (Propaganda-Cum-Distribution)
              partnerships across India, working with distributors and
              stockists who can offer dependable, everyday market
              availability for our therapeutic divisions.
            </p>
            <Button size="lg" className="mt-8" nativeButton={false} render={<Link href="/contact?topic=partnership" />}>
              Apply for a regional partnership
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
              How a regional partnership comes together.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((item, index) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-7">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-serif text-sm text-primary/70">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-lg text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              This describes our current evaluation process and does not
              guarantee approval. Timelines and outcomes vary by region and
              application.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="flex flex-col gap-6 rounded-xl border border-dashed border-border bg-background/60 p-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Globe2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="max-w-xl">
                  <h3 className="text-sm font-medium text-foreground">International Business</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    We occasionally evaluate enquiries from outside India on
                    a market-by-market basis. This is not an active
                    expansion programme, and any engagement depends on
                    local regulatory feasibility.
                  </p>
                </div>
              </div>
              <Link
                href="/contact?topic=international-business"
                className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Send an enquiry
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
