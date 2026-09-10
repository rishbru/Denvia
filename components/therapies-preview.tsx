import { HeartPulse, Sparkles, Pill, Bug, Activity, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { THERAPEUTIC_DIVISIONS } from '@/lib/content'

const icons = [HeartPulse, Sparkles, Pill, Bug, Activity]

export function TherapiesPreview() {
  return (
    <section id="therapies" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Therapeutic divisions
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              A focused portfolio across five therapeutic divisions.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Explore the areas in which Denvia currently works, with product
            information and market availability presented by division.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {THERAPEUTIC_DIVISIONS.map((division, index) => {
            const Icon = icons[index]
            return (
              <Link
                key={division.slug}
                href={`/therapies#${division.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 font-serif text-lg text-card-foreground">{division.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{division.summary}</p>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm text-muted-foreground">
            Denvia products are prescription medicines. Availability and
            indications vary by market and are subject to local regulatory
            approval.
          </p>
          <Link
            href="/therapies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all therapies
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
