import { OPERATING_MODEL_STEPS, OPERATING_SENTENCE } from '@/lib/content'

export function OperatingModel() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="max-w-3xl text-pretty font-serif text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
          {OPERATING_SENTENCE}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {OPERATING_MODEL_STEPS.map((item, index) => (
            <div key={item.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-serif text-sm text-primary/70">{item.step}</span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-sm font-medium text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              {index < OPERATING_MODEL_STEPS.length - 1 && (
                <span className="sr-only"> leads to </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
