import { Stethoscope, Truck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const audiences = [
  {
    icon: Stethoscope,
    label: 'For healthcare professionals',
    title: 'Verified product information for confident prescribing.',
    body: 'Composition, strength, dosage form, pack and referenced medical information — available on request through Medical Information.',
    href: '/medical-information',
    cta: 'Visit Medical Information',
  },
  {
    icon: Truck,
    label: 'For stockists & distributors',
    title: 'Practical support for everyday distribution.',
    body: 'Current portfolio access, verified pack and MRP information, ordering guidance and a clear escalation route for trade partners.',
    href: '/trade-support',
    cta: 'Visit Trade Support',
  },
]

export function AudienceCta() {
  return (
    <section className="border-t border-border bg-secondary/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.href}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <audience.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-primary">
                {audience.label}
              </p>
              <h3 className="mt-3 font-serif text-xl leading-snug text-card-foreground sm:text-2xl">
                {audience.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{audience.body}</p>
              <Button
                variant="outline"
                className="mt-6 w-fit"
                nativeButton={false}
                render={<Link href={audience.href} />}
              >
                {audience.cta}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
