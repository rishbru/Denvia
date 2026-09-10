import { PORTFOLIO_DEVELOPMENT } from '@/lib/content'

export function PortfolioDevelopment() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Portfolio development
        </p>
        <h2 className="mt-3 max-w-xl text-pretty font-serif text-2xl leading-snug tracking-tight text-muted-foreground sm:text-3xl">
          Additional therapeutic areas under evaluation for future expansion.
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_DEVELOPMENT.map((area) => (
            <div
              key={area.name}
              className="flex items-center justify-between rounded-lg border border-dashed border-border bg-background/60 px-5 py-4"
            >
              <span className="text-sm text-muted-foreground">{area.name}</span>
              <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                In development
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          These areas are not yet active. A division moves from development to
          launch only once its portfolio, documentation and approved copy
          have been verified.
        </p>
      </div>
    </section>
  )
}
