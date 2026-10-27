'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  Search,
  X,
  Pill,
  Download,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  CONDITION_FILTERS,
  MEDICINES,
  type Medicine,
} from '@/lib/content'

const VALID_CONDITIONS = new Set(CONDITION_FILTERS.map((f) => f.id))

function csvCell(value: string) {
  return `"${value.replace(/"/g, '""')}"`
}

function downloadCategoryList(category: string) {
  const rows: Medicine[] =
    category === 'All' ? MEDICINES : MEDICINES.filter((medicine) => medicine.category === category)
  const lines = [
    ['Product', 'Content', 'Category', 'Available Strengths'],
    ...rows.map((medicine) => [
      medicine.name,
      medicine.specification,
      medicine.category,
      medicine.strengths.join('; '),
    ]),
  ]
  const csv = lines.map((line) => line.map(csvCell).join(',')).join('\r\n')
  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  const filename =
    category === 'All' ? 'Denvia-all-medicines.csv' : `Denvia-${category.replace(/\s+/g, '-')}.csv`
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

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
        selectedCondition === 'All' || med.category === selectedCondition
      if (!matchesCondition) return false
      if (!q) return true
      return (
        med.name.toLowerCase().includes(q) ||
        med.specification.toLowerCase().includes(q) ||
        med.category.toLowerCase().includes(q) ||
        med.strengths.some((strength) => strength.toLowerCase().includes(q))
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
            placeholder="Search by content or product name (Nicorandil, Rosuvastatin, etc.)"
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
            const Icon = Pill
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

        <div className="mb-3 flex justify-end">
          <Button
            variant="outline"
            size="lg"
            type="button"
            onClick={() => downloadCategoryList(selectedCondition)}
          >
            <Download aria-hidden="true" />
            {selectedCondition === 'All' ? 'Download full list' : `Download ${selectedCondition} list`}
          </Button>
        </div>

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
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-xs">
            <div
              className={`hidden items-center gap-4 border-b border-border bg-secondary/70 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:grid ${
                selectedCondition === 'All'
                  ? 'grid-cols-[2.5rem_1.5fr_0.8fr_1fr]'
                  : 'grid-cols-[2.5rem_1.6fr_1fr]'
              }`}
            >
              <span>#</span>
              <span>Product</span>
              {selectedCondition === 'All' ? <span>Category</span> : null}
              <span>Available Strengths</span>
            </div>

            <div className={showFullPageHeader ? undefined : 'max-h-[95rem] overflow-y-auto'}>
              <div className="divide-y divide-border">
            {filteredMedicines.map((med) => {
              const showCategory = selectedCondition === 'All'
              return (
                <article
                  key={med.id}
                  className={`grid gap-3 p-5 transition-colors hover:bg-secondary/35 sm:p-6 lg:items-center ${
                    showCategory
                      ? 'lg:grid-cols-[2.5rem_1.5fr_0.8fr_1fr]'
                      : 'lg:grid-cols-[2.5rem_1.6fr_1fr]'
                  }`}
                >
                  <span className="hidden font-mono text-xs font-semibold text-muted-foreground lg:inline">
                    {med.id}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-muted-foreground lg:hidden">
                        #{med.id}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-card-foreground">{med.name}</h3>
                    </div>
                    {showCategory ? (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary lg:hidden">
                        {med.category}
                      </p>
                    ) : null}
                    {med.specification ? (
                      <p className="mt-1 text-sm text-muted-foreground">{med.specification}</p>
                    ) : null}
                  </div>

                  {showCategory ? (
                    <p className="hidden text-sm font-medium text-foreground lg:block">{med.category}</p>
                  ) : null}

                  <div>
                    {med.strengths.length > 0 ? (
                      <>
                        <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground lg:hidden">
                          Available Strengths
                        </span>
                        <div className="mt-1 flex flex-wrap gap-1.5 lg:mt-0">
                          {med.strengths.map((strength) => (
                            <span
                              key={strength}
                              className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs font-semibold text-foreground"
                            >
                              {strength}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>
                </article>
              )
            })}
              </div>
            </div>
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
                If a molecule is not on this list, talk to us.
              </p>
            </div>

            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
