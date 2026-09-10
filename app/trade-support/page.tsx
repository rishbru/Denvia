import { Package, BadgeCheck, Headset, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

const offerings = [
  {
    icon: Package,
    title: 'Current portfolio access',
    body: 'Up-to-date visibility of the active portfolio across all five therapeutic divisions, by division and by pack.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified pack & MRP information',
    body: 'Pack sizes and maximum retail price are confirmed against current documentation, so stock and billing stay accurate.',
  },
  {
    icon: Headset,
    title: 'Ordering & escalation support',
    body: 'A direct line for order placement queries, supply questions and escalation when something needs attention quickly.',
  },
]

export default function TradeSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              For stockists, distributors & pharmacies
            </p>
            <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight tracking-tight text-accent-foreground sm:text-5xl">
              Trade Support
            </h1>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-accent-foreground/75">
              Dependable availability depends on dependable partners. Trade
              Support is where stockists, distributors and pharmacies get
              the current portfolio, ordering support and a direct
              escalation route.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-6 md:grid-cols-3">
              {offerings.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-serif text-lg text-card-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                Become a Denvia stockist or distributor.
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                New trade partnerships go through a short evaluation process
                covering territory, capacity and current lines carried.
              </p>
            </div>
            <Button size="lg" nativeButton={false} render={<Link href="/partnerships" />}>
              Apply for a trade partnership
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Existing trade partners with an order, supply or billing query
              can reach our team directly through{' '}
              <Link href="/contact?topic=trade-support" className="text-primary underline underline-offset-2">
                Contact
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
