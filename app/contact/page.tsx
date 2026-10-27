import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Denvia Pharmaceuticals in Bengaluru for distribution, PCD, medical information, or product enquiries.',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}
