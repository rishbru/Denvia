import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { OperatingModel } from '@/components/operating-model'
import { About } from '@/components/about'
import { TherapiesPreview } from '@/components/therapies-preview'
import { Quality } from '@/components/quality'
import { AudienceCta } from '@/components/audience-cta'
import { ContactTeaser } from '@/components/contact-teaser'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <OperatingModel />
        <About />
        <TherapiesPreview />
        <Quality />
        <AudienceCta />
        <ContactTeaser />
      </main>
      <SiteFooter />
    </div>
  )
}
