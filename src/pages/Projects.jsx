import { PageHeader } from "../components/PageBits.jsx";
import { projects } from "../data/site.js";

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="What we're building on the ground"
        intro="Each project is a working piece of the circular model — with real objectives, outcomes, and impact."
      />

      <section className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="bg-cream rounded-3xl overflow-hidden border border-forest/10 shadow-sm flex flex-col">
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display text-2xl text-forest mb-3">{p.title}</h3>

                <p className="text-xs font-semibold text-leaf uppercase tracking-wide mb-1">Objective</p>
                <p className="text-ink/75 leading-relaxed mb-4">{p.objective}</p>

                {p.outcomes.length > 0 && (
                  <>
                    <p className="text-xs font-semibold text-leaf uppercase tracking-wide mb-1">Outcomes so far</p>
                    <ul className="mb-4 space-y-1.5">
                      {p.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-ink/75 text-sm">
                          <span className="text-leaf mt-0.5">✓</span><span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {p.metrics.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-forest/10">
                    <p className="text-xs font-semibold text-sky uppercase tracking-wide mb-2">Impact metrics</p>
                    <div className="flex flex-wrap gap-2">
                      {p.metrics.map((m) => (
                        <span key={m} className="text-xs bg-sky/10 text-sky font-medium px-3 py-1.5 rounded-full">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
