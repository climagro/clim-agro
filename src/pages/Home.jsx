import { Link } from "react-router-dom";
import { company, stats } from "../data/site.js";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/75 to-forest/40" />

        <div className="relative container-x py-28 md:py-36">
          <p className="eyebrow text-leaf/90 mb-5 text-cream/80">
            Circular Agriculture · Rwanda
          </p>
          <h1 className="font-display font-bold text-cream text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            Transforming Market Waste into Climate-Smart Agriculture
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed">
            {company.coreMessage}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/model" className="btn-primary">
              See how our model works
            </Link>
            <Link
              to="/investors"
              className="btn-ghost border-cream/40 text-cream hover:bg-cream hover:text-forest"
            >
              For investors & partners
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-sand">
        <div className="container-x py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Our impact so far</p>
            <h2 className="font-display text-3xl md:text-4xl text-forest">
              Measurable change, year after year
            </h2>
            <p className="mt-3 text-ink/60 text-sm italic">
              (Figures below are placeholders — replace with your verified numbers.)
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-cream rounded-3xl p-6 text-center shadow-sm border border-forest/5"
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-earth">
                  {s.value}
                  {s.unit && (
                    <span className="text-lg text-leaf font-sans font-semibold ml-1">
                      {s.unit}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-ink/70 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO — section teasers */}
      <section className="container-x py-20">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">A complete circular system</p>
          <h2 className="font-display text-3xl md:text-4xl text-forest leading-tight">
            One stream of waste. A whole farm of value.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              to: "/model",
              title: "Our Integrated Model",
              desc: "Market waste becomes insect feed, which feeds poultry and rabbits, whose manure grows vegetables — a closed loop.",
              cta: "Explore the model",
            },
            {
              to: "/impact",
              title: "Climate Impact",
              desc: "Waste diverted from landfill, emissions avoided, soil regenerated, and water conserved across our operations.",
              cta: "See our impact",
            },
            {
              to: "/investors",
              title: "Invest & Partner",
              desc: "We're inviting impact investors, climate finance, and strategic partners to scale a proven circular model.",
              cta: "Partner with us",
            },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group bg-cream rounded-3xl p-8 border border-forest/10 shadow-sm hover:shadow-lg hover:border-leaf/40 transition flex flex-col"
            >
              <h3 className="font-display text-2xl text-forest mb-3">{card.title}</h3>
              <p className="text-ink/70 leading-relaxed flex-1">{card.desc}</p>
              <span className="mt-5 text-leaf font-semibold text-sm group-hover:translate-x-1 transition inline-flex items-center gap-1">
                {card.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="container-x">
        <div className="bg-forest rounded-[2rem] px-8 py-14 md:px-16 md:py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-cream max-w-2xl mx-auto leading-tight">
            Building climate resilience and food security in Rwanda
          </h2>
          <p className="mt-4 text-cream/75 max-w-xl mx-auto">
            Whether you're an investor, partner, or fellow grower — let's talk.
          </p>
          <Link
            to="/contact"
            className="btn-primary mt-8 bg-cream text-forest hover:bg-white"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
