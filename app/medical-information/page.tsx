import { FileText, ShieldCheck, MessageSquareText, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

const offerings = [
  {
    icon: FileText,
    title: 'Verified product information',
    body: 'Composition, strength, dosage form and pack details, referenced against approved documentation for every marketed product.',
  },
  {
    icon: ShieldCheck,
    title: 'Prescriber-directed materials',
    body: 'Clinically framed information intended to support prescribing decisions, not promotional or patient-facing claims.',
  },
  {
    icon: MessageSquareText,
    title: 'A direct enquiry line',
    body: 'A route to raise product queries, request documentation or flag anything requiring clarification from our medical team.',
  },
]

export default function MedicalInformationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              For healthcare professionals
            </p>
            <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight tracking-tight text-accent-foreground sm:text-5xl">
              Medical Information
            </h1>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-accent-foreground/75">
              Prescribing confidence starts with verifiable information.
              This is where doctors and other healthcare professionals can
              request composition, dosage, pack and referenced medical
              detail for any Denvia product.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-6 md:grid-cols-3">
              {offerings.map((item) => (
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
                Request product information for your practice.
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                Our medical information team responds to verified
                practitioner enquiries and will follow up directly with the
                relevant documentation.
              </p>
            </div>
            <Button size="lg" nativeButton={false} render={<Link href="/contact?topic=medical-information" />}>
              Request information
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              This page provides prescriber-directed information only. It is
              not intended for members of the public. If you have
              experienced or suspect an adverse event related to a Denvia
              product, please visit{' '}
              <Link href="/patient-safety" className="text-primary underline underline-offset-2">
                Patient Safety
              </Link>{' '}
              to report it.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
