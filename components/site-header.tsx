'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { href: '/therapies', label: 'Browse Medicines' },
  { href: '/partnerships', label: 'Why Partner with Us' },
  { href: '/about', label: 'Who We Are' },
]

const linkClassName =
  'rounded-full px-3.5 py-2 text-[0.925rem] font-semibold text-foreground/85 transition-colors hover:bg-secondary hover:text-accent'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary/25 bg-background/95 text-foreground shadow-xs backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label="Denvia home">
          <Image
            src="/brand/denvia-horizontal.png"
            alt="Denvia Pharmaceuticals"
            className="h-auto w-44 max-w-[46vw] object-contain"
            width={855}
            height={290}
            priority
            unoptimized
          />
        </Link>

        <nav
          className="hidden items-center gap-1.5 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClassName}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            size="sm"
            className="rounded-full px-5 text-[0.925rem] font-semibold"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Contact Us
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-accent lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1.5 px-6 py-4" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3.5 py-2.5 text-[0.95rem] font-semibold text-foreground/90 transition-colors hover:bg-secondary hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="sm"
              className="mt-2 w-full rounded-full"
              nativeButton={false}
              render={<Link href="/contact" onClick={() => setOpen(false)} />}
            >
              Contact Us
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
