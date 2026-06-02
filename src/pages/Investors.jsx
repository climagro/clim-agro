import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageBits.jsx";
import { investors } from "../data/site.js";

export default function Investors() {
  return (
    <>
      <PageHeader
        eyebrow="Investors & Partners"
        title="Scale a working circular model with us"
        intro="CLIM-AGRO is inviting aligned capital and partners to grow our impact across Rwanda."
      />

      {/* The ask */}
      <section className="container-x py-16">
        <div className="bg-forest text-cream rounded-3xl p-8 md:p-12 max-w-4xl">
          <p className="eyebrow text-leaf mb-3">Our ask</p>
          <p className="font-display text-2xl md:text-3xl leading-snug">{investors.ask}</p>
        </div>
      </section>

      {/* Use of funds */}
      <section className="bg-sand">
        <div className="container-x py-16">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">Use of funds</p>
            <h2 className="font-display text-3xl text-forest">Where the investment goes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {investors.useOfFunds.map((f) => (
              <div key={f.title} className="bg-cream rounded-2xl p-6 border border-forest/10">
                <h3 className="font-display text-lg text-forest mb-2">{f.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="container-x py-16">
        <div className="max-w-2xl mb-8">
          <p className="eyebrow mb-3">Current traction</p>
          <h2 className="font-display text-3xl text-forest">What we've already built</h2>
        </div>
        <img
          src="/photos/capacity-building-team.jpg"
          alt="CLIM-AGRO at the Smart Waste Collection and Management initiative with government and partners"
          className="w-full rounded-3xl border border-forest/10 shadow-sm mb-6"
        />
        <div className="grid sm:grid-cols-2 gap-3">
          {investors.traction.map((t) => (
            <div key={t} className="flex items-start gap-3 bg-cream rounded-xl px-5 py-4 border border-forest/10">
              <span className="text-leaf font-bold mt-0.5">✓</span>
              <span className="text-ink/80 text-sm">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What we offer + why invest */}
      <section className="bg-sand">
        <div className="container-x py-16 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">What we offer investors</p>
            <h2 className="font-display text-3xl text-forest mb-6">Flexible partnership structures</h2>
            <ul className="space-y-3">
              {investors.offer.map((o) => (
                <li key={o} className="flex items-start gap-3 bg-cream rounded-xl px-5 py-3.5 border border-forest/10">
                  <span className="text-leaf font-bold mt-0.5">✓</span>
                  <span className="text-ink/80 text-sm">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Why invest in us</p>
            <h2 className="font-display text-3xl text-forest mb-6">The opportunity</h2>
            <div className="space-y-3">
              {investors.whyInvest.map((w) => (
                <div key={w.title} className="bg-cream rounded-xl p-5 border border-forest/10">
                  <h3 className="font-display text-lg text-forest">{w.title}</h3>
                  <p className="text-ink/70 text-sm mt-0.5">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16 text-center">
        <h2 className="font-display text-3xl text-forest mb-4">Let's start a conversation</h2>
        <p className="text-ink/70 max-w-xl mx-auto mb-8">
          For partnership, investment, or collaboration opportunities, reach out to our team directly.
        </p>
        <Link to="/contact" className="btn-primary">Contact our team</Link>
      </section>
    </>
  );
}
