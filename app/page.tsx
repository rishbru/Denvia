import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TherapiesPreview } from '@/components/therapies-preview'
import { About } from '@/components/about'
import { AudienceCta } from '@/components/audience-cta'
import { ContactTeaser } from '@/components/contact-teaser'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <TherapiesPreview />
        </Suspense>
        <About />
        <AudienceCta />
        <ContactTeaser />
      </main>
      <SiteFooter />
    </div>
  )
}
