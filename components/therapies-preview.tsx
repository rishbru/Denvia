'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  Search,
  X,
  Pill,
  HeartPulse,
  Activity,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONDITION_FILTERS, MEDICINES, PORTFOLIO_DEVELOPMENT } from '@/lib/content'

const conditionIcons: Record<string, typeof Pill> = {
  All: Pill,
  'Heart & Angina': HeartPulse,
  'Pain & Mobility': Activity,
  'Nerve & Nutritional Care': Sparkles,
}

const VALID_CONDITIONS = new Set(CONDITION_FILTERS.map((f) => f.id))

export function TherapiesPreview({
  showFullPageHeader = false,
}: {
  showFullPageHeader?: boolean
}) {
  const searchParams = useSearchParams()
  const conditionParam = searchParams.get('condition')
  const [search, setSearch] = useState('')
  const [selectedCondition, setSelectedCondition] = useState<string>(() =>
    conditionParam && VALID_CONDITIONS.has(conditionParam) ? conditionParam : 'All'
  )

  useEffect(() => {
    if (conditionParam && VALID_CONDITIONS.has(conditionParam)) {
      setSelectedCondition(conditionParam)
    }
  }, [conditionParam])

  const filteredMedicines = useMemo(() => {
    const q = search.trim().toLowerCase()
    return MEDICINES.filter((med) => {
      const matchesCondition =
        selectedCondition === 'All' || med.conditionGroup === selectedCondition
      if (!matchesCondition) return false
      if (!q) return true
      return (
        med.name.toLowerCase().includes(q) ||
        med.fullTitle.toLowerCase().includes(q) ||
        med.conditionTag.toLowerCase().includes(q) ||
        med.therapeuticCategory.toLowerCase().includes(q) ||
        med.clinicalUse.toLowerCase().includes(q) ||
        med.strengths.some((s) => s.toLowerCase().includes(q))
      )
    })
  }, [search, selectedCondition])

  return (
    <section
      id="medicines"
      className="scroll-mt-24 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 pt-12 md:pt-16">
        <div className="max-w-2xl">
          {showFullPageHeader ? (
            <h1 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Medicines
            </h1>
          ) : (
            <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Medicines
            </h2>
          )}
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Search by composition or filter by condition.
          </p>
        </div>

        <div className="relative mt-8">
          <label htmlFor="medicine-search" className="sr-only">
            Search medicines
          </label>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="medicine-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="e.g. Rosuvastatin, Aceclofenac, angina…"
            className="w-full rounded-full border border-border bg-card py-3.5 pl-12 pr-12 text-sm text-foreground shadow-xs outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-base"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2" aria-label="Filter by condition">
          {CONDITION_FILTERS.map((condition) => {
            const Icon = conditionIcons[condition.id] ?? Pill
            const isSelected = selectedCondition === condition.id
            return (
              <button
                key={condition.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCondition(condition.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  isSelected
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'border border-border bg-card text-foreground/85 hover:border-primary/40 hover:bg-secondary'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{condition.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.7rem] ${
                    isSelected
                      ? 'bg-accent/25 text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {condition.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div id="medicines-directory" className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        {(search || selectedCondition !== 'All') && (
          <div className="mb-4 flex flex-col justify-between gap-2 border-b border-border pb-3 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              {filteredMedicines.length} result{filteredMedicines.length === 1 ? '' : 's'}
              {search ? ` for “${search}”` : ''}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch('')
                setSelectedCondition('All')
              }}
              className="text-xs font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Clear filters
            </button>
          </div>
        )}

        {filteredMedicines.length === 0 ? (
          <div className="mt-8 rounded-xl border border-dashed border-border bg-secondary/40 p-10 text-center">
            <p className="font-serif text-lg text-foreground">
              No medicine matched &ldquo;{search}&rdquo;
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              We are continuously expanding our portfolio. Reach out to our team if you are looking for a specific composition or third-party manufacturing line.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearch('')
                  setSelectedCondition('All')
                }}
              >
                Show all medicines
              </Button>
              <Button
                size="sm"
                nativeButton={false}
                render={<Link href="/contact?topic=partnership" />}
              >
                Enquire about a molecule
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-xs">
            {/* Desktop Column Header */}
            <div className="hidden grid-cols-[2.5rem_1.8fr_0.9fr_1.1fr_auto] items-center gap-4 bg-secondary/70 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:grid">
              <span>#</span>
              <span>Medicine / Composition</span>
              <span>Form &amp; Condition</span>
              <span>Available Strengths</span>
              <span className="text-right">Enquire</span>
            </div>

            {filteredMedicines.map((med) => {
              const isCapsule = med.dosageForm === 'Capsule'
              return (
                <article
                  key={med.id}
                  className="grid gap-4 p-5 transition-colors hover:bg-secondary/35 sm:p-6 lg:grid-cols-[2.5rem_1.8fr_0.9fr_1.1fr_auto] lg:items-center"
                >
                  <span className="hidden font-mono text-xs font-semibold text-muted-foreground lg:inline">
                    {med.id}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-muted-foreground lg:hidden">
                        #{med.id}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-card-foreground">
                        {med.name}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs font-medium text-primary">
                      {med.therapeuticCategory}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {med.clinicalUse}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 lg:flex-col lg:items-start">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        isCapsule
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-primary/15 text-foreground'
                      }`}
                    >
                      <Pill className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      {med.dosageForm}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {med.conditionTag}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground lg:hidden">
                      Strengths
                    </span>
                    <div className="mt-1 flex flex-wrap gap-1.5 lg:mt-0">
                      {med.strengths.map((str) => (
                        <span
                          key={str}
                          className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs font-semibold text-foreground"
                        >
                          {str}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-start gap-2 pt-2 lg:justify-end lg:pt-0">
                    <Link
                      href={`/contact?topic=partnership&medicine=${encodeURIComponent(med.fullTitle)}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Stockist / Doctor Enquiry
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        {/* Cost Plus Drugs–style "Can't Find Your Medication?" & Upcoming Lines Banner */}
        <div className="mt-8 rounded-xl border border-border bg-secondary/55 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Expanding Portfolio
              </p>
              <h3 className="mt-2 font-serif text-xl text-foreground sm:text-2xl">
                Looking for a specific molecule or regional distribution line?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Alongside our Cardiac, Pain, and Neuro formulations, we are actively adding lines across{' '}
                <span className="font-medium text-foreground">
                  {PORTFOLIO_DEVELOPMENT.map((d) => d.name).join(', ')}
                </span>
                . Talk to us about distributor availability or prescriber product dossiers.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/partnerships" />}
              >
                For Distributors &amp; PCD
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={<Link href="/contact?topic=medical-information" />}
              >
                Request Prescriber Info
              </Button>
            </div>
          </div>

          <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
            Note: Prescription products only. Final formulations, pack sizes, and manufacturing specifications are subject to regulatory approval.
          </p>
        </div>
      </div>
    </section>
  )
}
