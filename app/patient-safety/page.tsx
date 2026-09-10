import { AlertTriangle, ShieldCheck, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

const points = [
  {
    icon: ShieldCheck,
    title: 'Why we ask',
    body: 'Every reported side effect or quality concern is logged and reviewed. This is how product safety is monitored after a medicine reaches patients.',
  },
  {
    icon: AlertTriangle,
    title: 'What to report',
    body: 'Any suspected side effect, unexpected reaction, or product quality issue (packaging, appearance, labelling) involving a Denvia product.',
  },
  {
    icon: Phone,
    title: 'What happens next',
    body: 'Our team acknowledges every report, records the relevant detail, and follows up directly if more information is needed.',
  },
]

export default function PatientSafetyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              For patients & caregivers
            </p>
            <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight tracking-tight text-accent-foreground sm:text-5xl">
              Patient Safety
            </h1>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-accent-foreground/75">
              If you have taken a Denvia product and experienced something
              unexpected, or have a concern about product quality, please
              tell us. Reporting helps keep every patient safer.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-6 md:grid-cols-3">
              {points.map((item) => (
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
                Report a side effect or quality concern.
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                If this is a medical emergency, please contact your doctor
                or local emergency services first — this page is not a
                substitute for urgent medical care.
              </p>
            </div>
            <Button size="lg" nativeButton={false} render={<Link href="/contact?topic=patient-safety" />}>
              Report an issue
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              This page is for patients and caregivers. Healthcare
              professionals seeking product or prescribing information
              should visit{' '}
              <Link href="/medical-information" className="text-primary underline underline-offset-2">
                Medical Information
              </Link>{' '}
              instead.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
