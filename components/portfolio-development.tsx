import { PORTFOLIO_DEVELOPMENT } from '@/lib/content'

export function PortfolioDevelopment() {
  return (
    <section className="border-t border-border bg-secondary/35">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Upcoming Therapeutic Additions
          </p>
          <h2 className="mt-2 font-serif text-2xl leading-snug tracking-tight text-foreground">
            Growing steadily with clinical and distributor demand.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PORTFOLIO_DEVELOPMENT.map((area) => (
            <div
              key={area.name}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-5"
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-primary">
                  Upcoming Line
                </span>
                <h3 className="mt-3 font-serif text-lg text-card-foreground">{area.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{area.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
