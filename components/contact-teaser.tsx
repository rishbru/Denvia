import { ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ContactTeaser() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            We&apos;d Love to Hear From You
          </p>
          <h2 className="mt-2.5 text-balance font-serif text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
            Ready to discuss distribution, PCD partnerships, or product details?
          </h2>
          <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted-foreground">
            Reach out to our Bengaluru team directly—we respond promptly to every distributor, pharmacy, and doctor enquiry.
          </p>
          <div className="mt-4 flex flex-wrap gap-5 text-xs font-semibold text-foreground/85">
            <a
              href="mailto:partnerships@denvia.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              partnerships@denvia.com
            </a>
            <a
              href="tel:+918041235600"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              +91 80 4123 5600
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
            Get in touch
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/therapies" />}
          >
            Browse Medicines
          </Button>
        </div>
      </div>
    </section>
  )
}
