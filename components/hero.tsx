import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustPoints = ['WHO-GMP manufacturing partners', 'Full batch traceability']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-4 border-primary bg-accent text-accent-foreground">
      <div className="relative mx-auto max-w-6xl px-6 py-10 md:py-12 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-4">
          <div className="relative z-10">
            <h1 className="max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Trusted medicines.{' '}
              <span className="text-primary">Dependable access across India.</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-accent-foreground/85 sm:text-lg">
              Making high-quality prescription medicine accessible, reliable, and affordable across India.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<a href="#medicines" />}>
                Browse Medicines
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                nativeButton={false}
                render={<Link href="/partnerships" />}
              >
                Why Partner with Us
              </Button>
            </div>

            <ul className="mt-8 flex flex-col gap-2.5 text-sm text-accent-foreground/85 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 flex-none text-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual relative lg:-mb-14 lg:-mt-14 lg:-mr-6">
            <Image
              src="/images/hero-indian-pharma-v2.png"
              alt="Pharmaceutical professional reviewing medicine and manufacturing quality data"
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
