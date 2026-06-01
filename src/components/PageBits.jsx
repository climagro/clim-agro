/* Shared building blocks used across the scaffolded pages. */

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="bg-forest text-cream">
      <div className="container-x py-20">
        {eyebrow && <p className="eyebrow text-leaf mb-4">{eyebrow}</p>}
        <h1 className="font-display font-bold text-4xl md:text-5xl max-w-3xl leading-tight">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 text-cream/80 max-w-2xl text-lg leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}

/* A clearly-marked note showing where YOUR real content goes.
   Remove these once each section is filled with verified content. */
export function ToFill({ children }) {
  return (
    <div className="border-l-4 border-earth/50 bg-earth/5 rounded-r-xl px-5 py-4 my-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-earth mb-1">
        Content to add
      </p>
      <p className="text-ink/75 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
