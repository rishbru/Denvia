import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ShieldCheck } from 'lucide-react'

const groups = [
  {
    title: 'Browse Medicines',
    links: [
      { label: 'All Medicines', href: '/therapies' },
      { label: 'Heart & Cholesterol', href: '/therapies?condition=Heart+%26+Angina' },
      { label: 'Pain & Muscle Spasm', href: '/therapies?condition=Pain+%26+Mobility' },
      { label: 'Nerve Care', href: '/therapies?condition=Nerve+%26+Nutritional+Care' },
    ],
  },
  {
    title: 'Company & Partners',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Board of Directors', href: '/board-of-directors' },
      { label: 'For Distributors & PCD', href: '/partnerships' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Quality & Safety',
    links: [
      { label: 'Medical Information', href: '/medical-information' },
      { label: 'Patient Safety', href: '/patient-safety' },
      { label: 'Trade Support', href: '/trade-support' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-accent-foreground/15 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:items-start">
          <div>
            <Link href="/" className="inline-block" aria-label="Denvia home">
              <Image
                src="/images/denvia-mark.jpg"
                alt="Denvia Pharmaceuticals"
                width={132}
                height={100}
                className="h-auto w-20 rounded-md"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-accent-foreground/80">
              Prescription medicines for Cardiac, Pain, and Neuro care—with clear quality standards and dependable access across India.
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-xs text-accent-foreground/70">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                Bengaluru, Karnataka, India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                WHO-GMP manufacturing partners
              </span>
            </div>
          </div>

          <nav className="contents" aria-label="Footer">
            {groups.map((group) => (
              <section key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {group.title}
                </h3>
                <ul className="mt-3.5 flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-accent-foreground/80 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-accent-foreground/15 pt-6 text-xs text-accent-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Denvia Pharmaceuticals Private Limited. All rights reserved.</p>
          <p>Prescription medicines only. Final formulations and pack specifications are subject to regulatory approval.</p>
        </div>
      </div>
    </footer>
  )
}
