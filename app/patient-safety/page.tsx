import type { Metadata } from 'next'
import { AlertTriangle, ShieldCheck, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Patient Safety',
  description:
    'Report an unexpected reaction or quality concern with a Denvia medicine. We follow up on every safety report.',
}

const points = [
  {
    icon: ShieldCheck,
    title: 'Every Report Matters',
    body: 'Your feedback helps us continuously monitor product safety and uphold strict quality standards after a medicine reaches patients.',
  },
  {
    icon: AlertTriangle,
    title: 'What to Share',
    body: 'Any unexpected side effect, reaction, or packaging/quality concern involving a Denvia tablet or capsule.',
  },
  {
    icon: Phone,
    title: 'Prompt Follow-Up',
    body: 'Our safety team logs every report with care and follows up directly if additional clinical detail is needed.',
  },
]

export default function PatientSafetyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Patient Safety &amp; Pharmacovigilance
            </p>
            <h1 className="mt-3 max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl">
              Patient safety comes first at every step.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-accent-foreground/85">
              If you or someone you care for has experienced an unexpected reaction or noticed a quality issue with a Denvia medicine, please let us know right away.
            </p>
            <Button
              size="lg"
              className="mt-7"
              nativeButton={false}
              render={<Link href="/contact?topic=patient-safety" />}
            >
              Report a Safety or Quality Concern
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <div className="grid gap-6 md:grid-cols-3">
              {points.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-serif text-lg font-bold text-card-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              Note: If you are experiencing a medical emergency, please contact your doctor or nearest hospital immediately.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
