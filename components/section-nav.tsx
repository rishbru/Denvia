'use client'

import { useEffect, useState } from 'react'

export type SectionLink = {
  id: string
  label: string
}

export function SectionNav({
  label,
  sections,
}: {
  label: string
  sections: readonly SectionLink[]
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const marker = 112

    const update = () => {
      let current = sections[0]?.id ?? ''
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (!element) continue
        if (element.getBoundingClientRect().top <= marker) current = section.id
      }
      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sections])

  return (
    <nav aria-label={label} className="border-b border-border py-6 xl:sticky xl:top-24 xl:border-b-0 xl:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">On this page</p>
      <ul className="mt-3 flex flex-col">
        {sections.map((section) => {
          const current = activeId === section.id
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? 'true' : undefined}
                className={`block border-l-2 py-2 pl-3 text-sm font-semibold transition-colors ${
                  current
                    ? 'border-primary text-accent'
                    : 'border-transparent text-foreground/70 hover:border-border hover:text-accent'
                }`}
              >
                {section.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
