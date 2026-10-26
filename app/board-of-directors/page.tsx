import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { LEADERSHIP_SEATS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Board of Directors',
  description:
    'Leadership accountability at Denvia Pharmaceuticals—quality, ethics, and partner success.',
}

export default function BoardOfDirectorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-accent-foreground/15 bg-accent text-accent-foreground">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 20% 40%, rgba(255,255,255,0.12), transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(0,0,0,0.2), transparent 50%)',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</p>
            <h1 className="mt-3 font-serif text-3xl tracking-tight text-accent-foreground sm:text-4xl lg:text-5xl">
              Board of Directors
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-accent-foreground/80 sm:text-base">
              Named director profiles will be published here. Until then, these are the leadership
              seats accountable for quality, ethics, and partner success.
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {LEADERSHIP_SEATS.map((seat) => (
                <article key={seat.role} className="flex flex-col border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Profile forthcoming
                  </p>
                  <h2 className="mt-3 text-lg font-bold tracking-tight text-foreground">
                    {seat.role}
                  </h2>
                  <p className="mt-1.5 text-xs font-medium text-muted-foreground">{seat.focus}</p>
                  <div className="mt-3 h-0.5 w-10 bg-primary" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{seat.bio}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
              <p className="max-w-xl text-sm text-muted-foreground">
                Want to speak with our leadership about distribution, PCD, or clinical partnerships?
              </p>
              <Button nativeButton={false} render={<Link href="/contact" />}>
                Contact us
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
