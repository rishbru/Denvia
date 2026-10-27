import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const href = '/about/#board'
// Relative so a GitHub Pages subpath is kept. Next Link adds basePath on its own.
const refreshHref = '../about/#board'

export const metadata: Metadata = {
  title: 'Board of Directors',
  description: 'The Board of Directors is part of Who We Are at Denvia Pharmaceuticals.',
}

export default function BoardOfDirectorsPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-background">
      <meta httpEquiv="refresh" content={`0; url=${refreshHref}`} />
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="font-serif text-3xl tracking-tight text-foreground">Board of Directors</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The Board of Directors is part of Who We Are.{' '}
          <Link href={href} className="font-semibold text-accent">
            Continue
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}
