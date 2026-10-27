import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { TherapiesPreview } from '@/components/therapies-preview'
import { PortfolioDevelopment } from '@/components/portfolio-development'

export const metadata: Metadata = {
  title: 'Medicines',
  description:
    'Browse Denvia prescription medicines by composition or condition—Cardiac, Pain, and Neuro care.',
}

export default function TherapiesPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Suspense fallback={null}>
          <TherapiesPreview showFullPageHeader />
        </Suspense>
        <PortfolioDevelopment />
      </main>
      <SiteFooter />
    </div>
  )
}
