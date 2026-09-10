import { HeartPulse, Sparkles, Pill, Bug, Activity, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PortfolioDevelopment } from '@/components/portfolio-development'
import { Button } from '@/components/ui/button'
import { THERAPEUTIC_DIVISIONS } from '@/lib/content'

const icons = [HeartPulse, Sparkles, Pill, Bug, Activity]

export default function TherapiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Therapies
            </p>
            <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight tracking-tight text-accent-foreground sm:text-5xl">
              Five therapeutic divisions, chosen deliberately.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-accent-foreground/75">
              Denvia develops and commercialises a focused portfolio,
              produced through qualified third-party manufacturers.
              Products and therapeutic divisions sit at the centre of both
              the doctor and trade experience: doctors verify them, trade
              partners source, stock and support them.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-6 md:grid-cols-2">
              {THERAPEUTIC_DIVISIONS.map((division, index) => {
                const Icon = icons[index]
                return (
                  <article
                    key={division.slug}
                    id={division.slug}
                    className="flex flex-col rounded-xl border border-border bg-card p-8 scroll-mt-24"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-6 font-serif text-2xl text-card-foreground">{division.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{division.summary}</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">{division.emphasis}</p>
                    <p className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Prescriber information available on request
                    </p>
                  </article>
                )
              })}

              <div className="flex flex-col justify-center rounded-xl border border-dashed border-border bg-secondary/40 p-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  Product-level detail
                </p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Exact composition, strength, dosage form, pack and
                  referenced medical information are available to
                  healthcare professionals through Medical Information.
                </p>
                <Button
                  variant="outline"
                  className="mt-5 w-fit"
                  nativeButton={false}
                  render={<Link href="/medical-information" />}
                >
                  Visit Medical Information
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            <p className="mt-10 text-sm text-muted-foreground">
              Denvia products are prescription medicines. Availability and
              indications vary by market and are subject to local
              regulatory approval.
            </p>
          </div>
        </section>

        <PortfolioDevelopment />
      </main>
      <SiteFooter />
    </div>
  )
}
