import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ShieldCheck } from 'lucide-react'

const groups = [
  {
    title: 'Medicines',
    links: [
      { label: 'All Medicines', href: '/therapies' },
      { label: 'Cardiac', href: '/therapies?condition=Cardiac' },
      { label: 'Pain Management', href: '/therapies?condition=Pain+Management' },
      { label: 'Antibiotic', href: '/therapies?condition=Antibiotic' },
      { label: 'Respiratory', href: '/therapies?condition=Respiratory' },
      { label: 'Gastro', href: '/therapies?condition=Gastro' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Who We Are', href: '/about' },
      { label: 'Board of Directors', href: '/about/#board' },
      { label: 'Why Partner with Us', href: '/partnerships' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-accent-foreground/15 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Denvia home">
              <Image
                src="/images/denvia-mark.jpg"
                alt=""
                width={132}
                height={100}
                className="h-auto w-14 rounded-md"
              />
              <span className="font-serif text-lg leading-tight tracking-tight text-accent-foreground">
                Denvia Pharmaceuticals
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-accent-foreground/80">
              Making high-quality prescription medicine accessible, reliable, and affordable across India.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-accent-foreground/75">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                Bengaluru, Karnataka, India
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
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
