import { Compass, ShieldCheck, HeartHandshake } from 'lucide-react'

const values = [
  {
    icon: Compass,
    title: 'Selective by design',
    body: 'We choose therapeutic areas carefully, then build the product knowledge and partnerships needed to support them well.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible quality',
    body: 'Quality is not a checkpoint but a discipline, embedded from formulation and sourcing through to release and pharmacovigilance.',
  },
  {
    icon: HeartHandshake,
    title: 'Human at the centre',
    body: 'Clinicians, pharmacists and patients guide our decisions. We measure success by outcomes and trust, not volume alone.',
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-info-foreground/15 bg-info">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Our mission
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            To make responsible pharmaceutical care easier to understand and
            easier to access.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Denvia is a pharmaceutical company built around restraint and
            responsibility. We choose where to participate carefully, then
            bring together clear product information, thoughtful partnerships
            and accountable support for the people who depend on medicines.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col bg-card p-8">
              <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-xl text-card-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
