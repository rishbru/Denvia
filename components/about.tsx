import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Award, ArrowRight } from 'lucide-react'
import { TRUST_PILLARS } from '@/lib/content'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-info-foreground/15 bg-info">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About Denvia
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Making high-quality healthcare accessible, reliable, and affordable.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/85">
              <strong className="font-semibold text-foreground">
                Denvia Pharmaceuticals Private Limited
              </strong>{' '}
              brings safe, effective prescription medicines to hospitals, pharmacies, and clinics
              across India—so doctors can prescribe with confidence and distributors can count on
              steady supply.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {TRUST_PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-border bg-card p-4 shadow-2xs">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-serif text-sm font-bold text-card-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                render={<Link href="/board-of-directors" />}
              >
                Board of Directors
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <Image
              src="/images/quality-denvia.png"
              alt="Finished blister packs of tablets moving along a clean automated quality-control inspection line"
              className="aspect-[5/4] w-full object-cover"
              width={720}
              height={576}
              unoptimized
            />
            <div className="border-t border-border bg-card p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Award className="h-4 w-4" aria-hidden="true" />
                Zero Compromise on Quality
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Every batch is tested and released only after analytical checks and stability
                verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
