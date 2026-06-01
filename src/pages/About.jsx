import { PageHeader } from "../components/PageBits.jsx";
import { about } from "../data/site.js";

export default function About() {
  const problems = [
    { icon: "🗑️", title: "Inefficient waste management", desc: "Organic waste piles up in markets and landfills, releasing methane." },
    { icon: "🌡️", title: "Climate change", desc: "Farmers face declining productivity and unpredictable weather." },
    { icon: "💰", title: "Rising production costs", desc: "Expensive imported feed makes livestock farming costly." },
    { icon: "🌱", title: "Limited access to technology", desc: "Many farmers lack modern, climate-smart agricultural tools." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Our story starts with a problem worth solving"
        intro="CLIM-AGRO turns an environmental burden into an engine for food security, climate resilience, and rural jobs."
      />

      {/* Story */}
      <section className="container-x py-16">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Our story</p>
          <h2 className="font-display text-3xl text-forest mb-6">Why we started</h2>
          {about.story.map((para, i) => (
            <p key={i} className="text-ink/75 leading-relaxed mb-4">{para}</p>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section className="bg-sand">
        <div className="container-x py-16">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">The problem</p>
            <h2 className="font-display text-3xl text-forest">Challenges, deeply connected</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-cream rounded-2xl p-6 border border-forest/10">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display text-xl text-forest mb-1.5">{p.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container-x py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-forest text-cream rounded-3xl p-8">
            <p className="eyebrow text-leaf mb-3">Our mission</p>
            <p className="text-cream/90 leading-relaxed">{about.mission}</p>
          </div>
          <div className="bg-sky/10 border border-sky/20 rounded-3xl p-8">
            <p className="eyebrow text-sky mb-3">Our vision</p>
            <p className="text-ink/80 leading-relaxed">{about.vision}</p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-sand">
        <div className="container-x py-16">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="font-display text-3xl text-forest">An integrated agricultural system</h2>
            <p className="text-ink/70 mt-3">
              Through these activities we create a circular agricultural economy where waste
              becomes a resource, productivity is maximized, and environmental impacts are minimized.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {about.whatWeDo.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-cream rounded-xl px-5 py-4 border border-forest/10">
                <span className="text-leaf font-bold mt-0.5">✓</span>
                <span className="text-ink/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership team */}
      <section className="container-x py-16">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">Leadership team</p>
          <h2 className="font-display text-3xl text-forest">The people behind CLIM-AGRO</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {about.team.map((member) => (
            <div key={member.name} className="bg-cream rounded-3xl p-8 border border-forest/10 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="grid place-items-center w-14 h-14 rounded-full bg-forest text-cream font-display font-bold text-xl shrink-0">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-forest">{member.name}</h3>
                  <p className="text-leaf text-sm font-semibold">{member.role}</p>
                </div>
              </div>
              <p className="text-xs uppercase tracking-wide text-ink/50 mb-3">{member.credential}</p>
              {member.bio.map((para, i) => (
                <p key={i} className="text-ink/75 text-sm leading-relaxed mb-3">{para}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-forest text-cream">
        <div className="container-x py-16">
          <div className="max-w-2xl mb-8">
            <p className="eyebrow text-leaf mb-3">Our commitment</p>
            <h2 className="font-display text-3xl text-cream">What we stand for</h2>
            <p className="text-cream/75 mt-3">
              We believe the future of agriculture lies in innovation, sustainability, and inclusivity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {about.commitment.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-cream/10 rounded-xl px-5 py-4">
                <span className="text-leaf font-bold mt-0.5">✓</span>
                <span className="text-cream/90 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
