import { Building2, Truck, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const audiences = [
  {
    icon: Truck,
    label: 'For distributors and stockists',
    title: 'Grow with a dependable, high-demand medicine portfolio.',
    highlights: [
      'Regional PCD and stockist opportunities',
      'Clear terms and verified documentation',
    ],
    href: '/partnerships',
    cta: 'Why Partner with Us',
    primary: true,
  },
  {
    icon: Building2,
    label: 'The company',
    title: 'Safe, effective prescription medicines, made to a high standard.',
    highlights: [
      'Hospitals, pharmacies, and clinics across India',
      'Board of Directors',
    ],
    href: '/about',
    cta: 'Who We Are',
    primary: true,
  },
]

export function AudienceCta() {
  return (
    <section className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Who We Serve
          </p>
          <h2 className="mt-2.5 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Distributors, stockists, and the company.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.href}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <audience.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {audience.label}
                  </p>
                </div>

                <h3 className="mt-5 font-serif text-xl leading-snug text-card-foreground sm:text-2xl">
                  {audience.title}
                </h3>

                <ul className="mt-5 space-y-2 border-t border-border pt-4">
                  {audience.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs font-medium text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-none text-primary" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={audience.primary ? 'default' : 'outline'}
                className="mt-6 w-fit"
                nativeButton={false}
                render={<Link href={audience.href} />}
              >
                {audience.cta}
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
