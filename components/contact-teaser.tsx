import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ContactTeaser() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Contact
          </p>
          <h2 className="mt-3 text-balance font-serif text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
            Have a question for the Denvia team?
          </h2>
          <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Contact us for partnership enquiries, product information or help
            finding the right route for your request.
          </p>
        </div>
        <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
          Get in touch
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
