import { HeartPulse, Brain, Wind, Bone, Stethoscope, ArrowUpRight } from 'lucide-react'

const areas = [
  {
    icon: HeartPulse,
    name: 'Cardiometabolic',
    body: 'Everyday therapies for hypertension, lipid management and type 2 diabetes.',
  },
  {
    icon: Wind,
    name: 'Respiratory',
    body: 'Reliable maintenance and relief treatments for asthma and chronic airway conditions.',
  },
  {
    icon: Brain,
    name: 'Neurology',
    body: 'Focused options across seizure management, migraine and neuropathic pain.',
  },
  {
    icon: Bone,
    name: 'Bone & Joint',
    body: 'Supportive therapies for bone health, inflammation and long-term mobility.',
  },
  {
    icon: Stethoscope,
    name: 'General Medicine',
    body: 'Trusted primary-care essentials for common infections, pain and everyday ailments.',
  },
]

export function Therapies() {
  return (
    <section id="therapies" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Products &amp; therapies
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              A focused portfolio across five therapeutic areas.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Each area is chosen deliberately and supported end to end, from
            formulation and quality to professional service and access.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {areas.map((area) => (
            <article
              key={area.name}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <area.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 font-serif text-lg text-card-foreground">{area.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Denvia products are prescription medicines. Availability and
          indications vary by market and are subject to local regulatory
          approval.
        </p>
      </div>
    </section>
  )
}
