import type { Metadata } from 'next'
import { FileText, ShieldCheck, MessageSquareText, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Medical Information',
  description:
    'Composition, dosage form, and strength details for Denvia prescription medicines—plus product literature on request.',
}

const offerings = [
  {
    icon: FileText,
    title: 'Composition & Strength Specs',
    body: 'Exact active ingredients, release profile, dosage form, and available strengths for every product.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Manufacturing',
    body: 'Produced at audited WHO-GMP partner facilities with full batch traceability.',
  },
  {
    icon: MessageSquareText,
    title: 'Direct Enquiry Support',
    body: 'Request product monographs, pack details, or formulation clarifications from our team.',
  },
]

export default function MedicalInformationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For Doctors &amp; Healthcare Professionals
            </p>
            <h1 className="mt-3 max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl">
              Product information for confident prescribing.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-accent-foreground/85">
              Browse our Cardiac, Pain, and Neuro formulations online, or request detailed
              prescribing literature from our team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<Link href="/therapies" />}>
                Browse Medicines
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                nativeButton={false}
                render={<Link href="/contact?topic=medical-information" />}
              >
                Request Product Literature
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <div className="grid gap-6 md:grid-cols-3">
              {offerings.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-serif text-lg font-bold text-card-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-2xl border-t border-border pt-8">
              <h2 className="font-serif text-xl text-foreground">How to request literature</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us the medicine name, your clinic or hospital, and what you need
                (composition sheet, pack details, or a clinical clarification). We respond
                directly to healthcare professionals.
              </p>
              <Button
                className="mt-5"
                variant="outline"
                nativeButton={false}
                render={<Link href="/contact?topic=medical-information" />}
              >
                Contact medical information
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              Information on this page is intended for healthcare professionals. It does not replace
              clinical judgement. To report an unexpected reaction or product quality concern, visit{' '}
              <Link href="/patient-safety" className="font-medium text-primary underline-offset-2 hover:underline">
                Patient Safety
              </Link>
              . In an emergency, contact a doctor or local emergency services immediately.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
