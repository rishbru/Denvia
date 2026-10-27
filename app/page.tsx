import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TherapiesPreview } from '@/components/therapies-preview'
import { AudienceCta } from '@/components/audience-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Suspense fallback={null}>
          <TherapiesPreview />
        </Suspense>
        <AudienceCta />
      </main>
      <SiteFooter />
    </div>
  )
}
