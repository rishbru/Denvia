'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { href: '/therapies', label: 'Therapies' },
  { href: '/medical-information', label: 'Medical Information' },
  { href: '/trade-support', label: 'Trade Support' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-primary/35 bg-background text-foreground shadow-sm">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label="Denvia home">
          <Image
            src="/brand/denvia-horizontal.png"
            alt="Denvia"
            className="h-auto w-48 max-w-[48vw] object-contain"
            width={855}
            height={290}
            priority
            unoptimized
          />
        </Link>

        <nav
          className="hidden items-center gap-2 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-[0.95rem] font-semibold tracking-[0.01em] text-foreground/80 transition-colors hover:bg-secondary hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            size="sm"
            className="rounded-full px-5 text-[0.95rem] font-semibold"
            nativeButton={false}
            render={<Link href="/partnerships" />}
          >
            Partner with us
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
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[0.95rem] font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/patient-safety"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-foreground/75 transition-colors hover:bg-secondary hover:text-accent"
            >
              Patient Safety
            </Link>
            <Button
              size="sm"
              className="mt-2 w-full rounded-full"
              nativeButton={false}
              render={<Link href="/partnerships" onClick={() => setOpen(false)} />}
            >
              Partner with us
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
