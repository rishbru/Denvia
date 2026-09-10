import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustPoints = [
  'WHO-GMP aligned partners',
  'End-to-end batch traceability',
  'Dependable distribution network',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-4 border-primary bg-accent text-accent-foreground">
      <div className="relative mx-auto max-w-6xl px-6 py-10 md:py-12 lg:py-14">
        <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-2">
          <div className="relative z-10">
            <h1 className="max-w-3xl text-balance font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Trusted medicines. <span className="text-primary">Dependable access.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-accent-foreground/80 sm:text-lg">
              Denvia develops and commercialises prescription medicines with clear information, disciplined portfolio choices and a practical focus on everyday care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<Link href="/therapies" />}>
                Explore our therapies
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground hover:text-accent" nativeButton={false} render={<a href="#about" />}>
                Why Denvia
              </Button>
            </div>
            <ul className="mt-9 grid gap-3 text-sm text-accent-foreground/80 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 flex-none text-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual relative lg:-mb-14 lg:-mt-14 lg:-mr-6">
            <Image
              src="/images/hero-indian-pharma-v2.png"
              alt="Indian pharmaceutical scientist reviewing digital medicine and manufacturing information"
              width={1536}
              height={1024}
              className="h-auto w-full object-contain object-right"
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
