import Image from 'next/image'
import Link from 'next/link'
const groups = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Therapies', href: '/therapies' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'For professionals',
    links: [
      { label: 'Medical Information', href: '/medical-information' },
      { label: 'Trade Support', href: '/trade-support' },
      { label: 'Partnerships', href: '/partnerships' },
    ],
  },
  {
    title: 'Patients & legal',
    links: [
      { label: 'Patient Safety', href: '/patient-safety' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Pharmacovigilance', href: '/patient-safety' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-accent-foreground/15 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1.45fr] lg:items-start lg:gap-12">
          <Link href="/" className="inline-block justify-self-start" aria-label="Denvia home">
            <Image
              src="/images/denvia-mark.jpg"
              alt="Denvia mark"
              width={132}
              height={100}
              className="h-auto w-24 rounded-md"
            />
          </Link>

          <nav className="contents" aria-label="Footer">
            {groups.map((group) => (
              <section key={group.title}>
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground/60">
                  {group.title}
                </h3>
                <ul
                  className={`mt-3 flex gap-x-5 gap-y-1.5 ${
                    group.title === 'Patients & legal' ? 'flex-wrap' : 'flex-col'
                  }`}
                >
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

        <div className="mt-7 flex flex-col gap-2 border-t border-accent-foreground/15 pt-4 text-xs text-accent-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Denvia Pharmaceuticals. All rights reserved.</p>
          <p>Prescription medicines. Availability varies by market and regulatory approval.</p>
        </div>
      </div>
    </footer>
  )
}
