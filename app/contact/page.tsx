import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Contact } from '@/components/contact'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}
