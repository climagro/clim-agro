import { useState } from "react";
import { PageHeader } from "../components/PageBits.jsx";
import { company } from "../data/site.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = () => {
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    const subject = form.subject.trim() || `Website inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 bg-cream focus:outline-none focus:ring-2 focus:ring-leaf";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        intro="Reach out for partnerships, investment, consultancy, or to learn more about our work."
      />

      <section className="container-x py-16 grid lg:grid-cols-2 gap-12">
        {/* Details */}
        <div>
          <h2 className="font-display text-2xl text-forest mb-6">Reach us directly</h2>
          <ul className="space-y-4 text-ink/80">
            <li className="flex gap-3"><span>📍</span><span>{company.location}</span></li>
            <li className="flex gap-3"><span>📞</span><span>{company.phone}</span></li>
            <li className="flex gap-3"><span>✉️</span>
              <a href={`mailto:${company.email}`} className="text-sky hover:underline">{company.email}</a>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-leaf text-cream font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
            >
              💬 WhatsApp us
            </a>
            <a
              href={company.facebook}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-forest/30 text-forest font-semibold px-6 py-3 rounded-full hover:bg-forest hover:text-cream transition"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-cream rounded-3xl p-8 border border-forest/10 shadow-sm">
          <h2 className="font-display text-2xl text-forest mb-1">Send a message</h2>
          <p className="text-ink/60 text-sm mb-6">We'll get back to you as soon as we can.</p>

          {sent && (
            <div className="bg-leaf/10 border border-leaf/30 text-forest rounded-xl px-4 py-3 mb-5 text-sm">
              ✅ Thanks! Your email app should open with your message ready to send.
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5">Full name *</label>
              <input name="name" value={form.name} onChange={handleChange}
                className={`${inputBase} ${errors.name ? "border-earth" : "border-forest/20"}`} placeholder="Your name" />
              {errors.name && <p className="text-earth text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange}
                className={`${inputBase} ${errors.email ? "border-earth" : "border-forest/20"}`} placeholder="you@example.com" />
              {errors.email && <p className="text-earth text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange}
                className={`${inputBase} border-forest/20`} placeholder="What's this about?" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Message *</label>
              <textarea name="message" rows={5} value={form.message} onChange={handleChange}
                className={`${inputBase} resize-none ${errors.message ? "border-earth" : "border-forest/20"}`} placeholder="How can we help?" />
              {errors.message && <p className="text-earth text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="button" onClick={handleSubmit} className="btn-primary w-full">
              Send message
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
