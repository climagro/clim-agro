import { PageHeader } from "../components/PageBits.jsx";
import { stats } from "../data/site.js";

export default function Impact() {
  const pillars = [
    { icon: "🚮", title: "Waste diverted from landfill", desc: "Organic waste collected and bioconverted instead of rotting and emitting methane." },
    { icon: "🌍", title: "Carbon reduction", desc: "Emissions avoided through waste diversion and reduced feed/fertilizer imports." },
    { icon: "🌾", title: "Regenerative practices", desc: "Organic fertilizer rebuilds soil health and biodiversity." },
    { icon: "💧", title: "Water conservation", desc: "Efficient irrigation and closed-loop nutrient cycling." },
    { icon: "🍂", title: "Compost production", desc: "Frass and manure replace synthetic fertilizers." },
    { icon: "🔄", title: "Circular economy", desc: "Every output becomes the next input — minimal external resources." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Climate Impact"
        title="Climate action you can measure"
        intro="Many climate investors visit this page first. Here's how our model creates measurable environmental value."
      />

      {/* Key metrics strip */}
      <section className="bg-sand">
        <div className="container-x py-14">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <div key={i} className="bg-cream rounded-2xl p-6 text-center border border-forest/5">
                <div className="font-display font-bold text-3xl text-sky">
                  {s.value}
                  {s.unit && <span className="text-base text-leaf ml-1 font-sans font-semibold">{s.unit}</span>}
                </div>
                <p className="mt-2 text-sm text-ink/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-x py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="bg-cream rounded-2xl p-6 border border-forest/10 shadow-sm">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-display text-xl text-forest mb-1.5">{p.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Carbon methodology note */}
      <section className="container-x pb-16">
        <div className="bg-sky/5 border border-sky/20 rounded-3xl p-8 max-w-3xl">
          <h2 className="font-display text-2xl text-forest mb-3">
            How we estimate avoided emissions
          </h2>
          <p className="text-ink/75 leading-relaxed text-sm">
            Our headline estimate is based on organic waste diverted from landfill, using a
            standard factor of roughly <strong>0.9 t CO₂e avoided per tonne of organic
            waste</strong>. This gives an indicative figure of about{" "}
            <strong>~45 t CO₂e per year</strong> at our current scale.
          </p>
        </div>
      </section>
    </>
  );
}
