import type { Metadata } from 'next'
import { Package, BadgeCheck, Headset, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Trade Support',
  description:
    'Order coordination, pack and MRP clarity, and supply support for Denvia stockists and distributors.',
}

const offerings = [
  {
    icon: Package,
    title: 'Portfolio Visibility',
    body: 'Browse Cardiac, Pain, and Neuro formulations with exact strengths and dosage forms.',
  },
  {
    icon: BadgeCheck,
    title: 'Pack & MRP Clarity',
    body: 'Clear pack sizes, documentation, and batch traceability for stock and billing.',
  },
  {
    icon: Headset,
    title: 'Order & Supply Support',
    body: 'Direct coordination with our commercial team for orders, dispatch, and territory questions.',
  },
]

export default function TradeSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For Stockists, Distributors &amp; Pharmacies
            </p>
            <h1 className="mt-3 max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl">
              Trade support for our distribution partners.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-accent-foreground/85">
              Whether you are placing an order or exploring a regional partnership, we keep
              working with Denvia simple and reliable.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<Link href="/partnerships" />}>
                Distributor &amp; PCD Partnerships
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

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <div className="grid gap-6 md:grid-cols-3">
              {offerings.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-serif text-lg font-bold text-card-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-2xl border-t border-border pt-8">
              <h2 className="font-serif text-xl text-foreground">Need help with an order?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Share your territory, product interest, and preferred contact number. Our team
                will follow up on stock availability and next steps.
              </p>
              <Button
                className="mt-5"
                variant="outline"
                nativeButton={false}
                render={<Link href="/contact?topic=partnership" />}
              >
                Contact trade support
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
