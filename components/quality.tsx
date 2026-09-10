import { Check } from 'lucide-react'
import Image from 'next/image'

const points = [
  'GMP-aligned manufacturing partners, audited and monitored',
  'Full batch traceability from active ingredient to dispensed dose',
  'Independent testing and rigorous release criteria',
  'Continuous pharmacovigilance and transparent reporting',
]

export function Quality() {
  return (
    <section id="quality" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="order-2 overflow-hidden rounded-xl border border-border shadow-sm md:order-1">
          <Image
            src="/images/quality-denvia.png"
            alt="Finished blister packs of tablets moving along a clean automated quality-control inspection line"
            className="aspect-[5/4] w-full object-cover"
            width={720}
            height={576}
            unoptimized
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Quality &amp; access
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Controls that protect every batch.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Our role is to make the product journey visible and accountable —
            from partner selection and testing through release, reporting and
            ongoing safety monitoring.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary"
                  aria-hidden="true"
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
