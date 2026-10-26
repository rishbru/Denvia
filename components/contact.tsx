'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Mail, Phone, MapPin, Check, Pill, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CONTACT_EMAIL = 'partnerships@denvia.com'

const details = [
  { icon: Mail, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: 'Phone', value: '+91 80 4123 5600', href: 'tel:+918041235600' },
  { icon: MapPin, label: 'Headquarters', value: 'Bengaluru, Karnataka, India' },
]

const topicCopy: Record<string, { label: string; heading: string; placeholder: string; subject: string; note?: string }> = {
  partnership: {
    label: 'Distributor & PCD Partnership',
    heading: 'Start a conversation with our commercial team.',
    placeholder:
      'Tell us your location/territory, business type (Stockist / PCD / Pharmacy), and the medicines you are interested in…',
    subject: 'Denvia partnership enquiry',
  },
  'medical-information': {
    label: 'For Doctors & Prescribers',
    heading: 'Request product or prescribing information.',
    placeholder: 'Tell us which formulation or strength you would like detailed information on…',
    subject: 'Denvia medical information request',
  },
  'trade-support': {
    label: 'Trade & Ordering Support',
    heading: 'We are here to help with your order or supply query.',
    placeholder: 'Share your order, pack/MRP, or supply question and our team will assist you right away…',
    subject: 'Denvia trade support enquiry',
  },
  'patient-safety': {
    label: 'Patient Safety & Pharmacovigilance',
    heading: 'Report a side effect or product quality concern.',
    placeholder: 'Please share what happened, including the medicine name and batch number if available…',
    subject: 'Denvia patient safety / quality report',
    note: 'If this is a medical emergency, please contact your doctor or local emergency services immediately.',
  },
  'international-business': {
    label: 'International & Manufacturing',
    heading: 'Explore international distribution or manufacturing partnerships.',
    placeholder: 'Tell us about your market, organisation, and how we can collaborate…',
    subject: 'Denvia international / manufacturing enquiry',
  },
}

const fieldClass =
  'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-2xs outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30'

export function Contact() {
  const [prepared, setPrepared] = useState(false)
  const [mailtoHref, setMailtoHref] = useState('')
  const searchParams = useSearchParams()
  const topicKey = searchParams.get('topic') ?? ''
  const selectedMedicine = searchParams.get('medicine') ?? ''
  const topic = topicCopy[topicKey]

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const email = String(data.get('email') || '').trim()
    const organisation = String(data.get('organisation') || '').trim()
    const message = String(data.get('message') || '').trim()

    const subject = topic?.subject ?? 'Denvia website enquiry'
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : null,
      topic ? `Topic: ${topic.label}` : null,
      selectedMedicine ? `Medicine: ${selectedMedicine}` : null,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n')

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setMailtoHref(href)
    setPrepared(true)
    window.location.href = href
  }

  return (
    <section id="contact" className="border-t border-accent-foreground/15 bg-accent text-accent-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {topic ? topic.label : 'Get in Touch'}
          </p>
          <h1 className="mt-3 text-balance font-serif text-3xl leading-tight tracking-tight text-accent-foreground sm:text-4xl">
            {topic ? topic.heading : "We'd love to hear from you."}
          </h1>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-accent-foreground/85 sm:text-base">
            {topic?.note ??
              'Whether you are a distributor, stockist, doctor, or manufacturing partner, our team in Bengaluru is ready to assist you promptly and personally.'}
          </p>

          {selectedMedicine && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-xs font-semibold text-accent-foreground">
              <Pill className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Enquiring about: {selectedMedicine}</span>
            </div>
          )}

          <dl className="mt-8 space-y-5">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-foreground/10 text-primary">
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-accent-foreground/65">
                    {d.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-accent-foreground">
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {prepared ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-serif text-xl font-bold text-card-foreground">
                Open your email app to send
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                We do not store form submissions on this website. Your email app should open with a
                pre-filled message to{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-primary underline-offset-2 hover:underline">
                  {CONTACT_EMAIL}
                </a>
                . If nothing opened, use the button below.
              </p>
              <Button
                className="mt-6"
                size="lg"
                nativeButton={false}
                render={<a href={mailtoHref || `mailto:${CONTACT_EMAIL}`} />}
              >
                Open email
                <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
              <button
                type="button"
                onClick={() => setPrepared(false)}
                className="mt-4 text-xs font-semibold text-primary underline underline-offset-4"
              >
                Edit message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Your Name *
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={fieldClass}
                    placeholder="+91 …"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                    placeholder="you@company.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="organisation" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Company / Clinic &amp; City
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    className={fieldClass}
                    placeholder="Organisation & city"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  How can we help you? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  defaultValue={selectedMedicine ? `I would like to enquire about ${selectedMedicine}. ` : ''}
                  className={`${fieldClass} resize-none`}
                  placeholder={topic?.placeholder ?? 'Tell us how we can support you…'}
                />
              </div>

              <Button type="submit" size="lg" className="mt-1">
                Continue to email
              </Button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Submissions open your email app addressed to {CONTACT_EMAIL}. Nothing is stored on
                this site. For urgent medical issues, contact a doctor or emergency services.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
