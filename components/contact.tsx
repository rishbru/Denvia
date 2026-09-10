'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Mail, Phone, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const details = [
  { icon: Mail, label: 'Email', value: 'partnerships@denvia.com', href: 'mailto:partnerships@denvia.com' },
  { icon: Phone, label: 'Phone', value: '+91 80 4123 5600', href: 'tel:+918041235600' },
]

const topicCopy: Record<string, { label: string; heading: string; placeholder: string; note?: string }> = {
  'medical-information': {
    label: 'Medical Information',
    heading: 'Request product or prescribing information.',
    placeholder: 'Tell us which product or division you need information on…',
  },
  'trade-support': {
    label: 'Trade Support',
    heading: 'Talk to our trade support team.',
    placeholder: 'Tell us about your order, supply or billing query…',
  },
  partnership: {
    label: 'Partnership',
    heading: 'Apply for a regional partnership.',
    placeholder: 'Tell us about your territory, capacity and current lines carried…',
  },
  'patient-safety': {
    label: 'Patient Safety',
    heading: 'Report a side effect or quality concern.',
    placeholder: 'Tell us what happened, including the product name if known…',
    note: 'If this is a medical emergency, contact your doctor or local emergency services first.',
  },
  'international-business': {
    label: 'International Business',
    heading: 'Send an international market enquiry.',
    placeholder: 'Tell us which market you are enquiring from and about…',
  },
}

const fieldClass =
  'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const searchParams = useSearchParams()
  const topic = topicCopy[searchParams.get('topic') ?? '']

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-accent-foreground/15 bg-accent text-accent-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {topic ? topic.label : 'Contact'}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-accent-foreground sm:text-4xl">
            {topic ? topic.heading : "Let's talk about partnership or access."}
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-accent-foreground/75">
            {topic?.note ??
              "Whether you're a distributor, healthcare professional or prospective partner, we'd be glad to hear from you. Reach out and our team will respond promptly."}
          </p>

          <dl className="mt-10 space-y-6">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-foreground/10 text-primary">
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-accent-foreground/60">{d.label}</dt>
                  <dd className="mt-0.5 text-sm text-accent-foreground">
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
          {submitted ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl text-card-foreground">Thank you</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Your message has been received. A member of the Denvia team
                will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Ananya Rao" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                    placeholder="ananya@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="organisation" className="text-sm font-medium text-foreground">
                  Organisation
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  className={fieldClass}
                  placeholder="Company or institution"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`${fieldClass} resize-none`}
                  placeholder={topic?.placeholder ?? 'Tell us a little about your enquiry…'}
                />
              </div>

              <Button type="submit" size="lg" className="mt-1">
                Send message
              </Button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                This form is for general and business enquiries only. For
                adverse event reporting, please contact your local health
                authority.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
