import { useState } from "react";

export default function AgricultureWebsite() {
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
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = () => {
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    const subject = form.subject.trim() || "Website inquiry from " + form.name;
    const body =
      "Name: " + form.name + "\n" +
      "Email: " + form.email + "\n\n" +
      form.message;

    const mailto =
      "mailto:climagroltd@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">CLIM-AGRO LTD</h1>
            <p className="text-sm text-blue-100">Smart Agriculture & Climate Resilient Solutions</p>
          </div>

          <nav className="space-x-6 text-sm md:text-base">
            <a href="#home" className="hover:text-blue-200">Home</a>
            <a href="#about" className="hover:text-blue-200">About</a>
            <a href="#services" className="hover:text-blue-200">Services</a>
            <a href="#projects" className="hover:text-blue-200">Projects</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center h-[85vh] flex items-center"
      >
        <div className="bg-black/50 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
              Smart Agriculture for a Sustainable Future
            </h2>

            <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
              We provide smart agriculture solutions including poultry farming, rabbit farming, Black Soldier Fly production, irrigation systems, climate-smart technologies, and environmentally friendly agricultural innovations.
            </p>

            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-2xl shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"
            alt="Agriculture"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h3 className="text-4xl font-bold text-blue-800 mb-6">About Our Company</h3>

            <p className="text-lg mb-5 leading-relaxed">
              CLIM-AGRO LTD is an environmentally conscious agricultural company focused on
              climate-smart farming technologies and sustainable food production.
            </p>

            <p className="text-lg mb-5 leading-relaxed">
              We help communities and agribusinesses improve productivity through modern,
              eco-friendly farming practices and integrated agricultural systems.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-5 rounded-2xl shadow">
                <h4 className="font-bold text-2xl text-green-600">5+</h4>
                <p>Years Experience</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                <h4 className="font-bold text-2xl text-green-600">100+</h4>
                <p>Farmers Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gradient-to-r from-green-100 to-blue-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-blue-800 mb-4">Our Services</h3>
          <p className="text-lg text-gray-700 mb-14">
            Innovative smart agriculture and climate-resilient farming solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🐔</div>
              <h4 className="text-2xl font-bold mb-4 text-green-600">Poultry Farming</h4>
              <p>
                Modern broiler and layer farming systems designed for productivity and
                sustainability.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🐇</div>
              <h4 className="text-2xl font-bold mb-4 text-green-600">Rabbit Farming</h4>
              <p>
                Efficient rabbit production systems for meat, manure, and sustainable income generation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">♻️</div>
              <h4 className="text-2xl font-bold mb-4 text-green-600">BSF Production</h4>
              <p>
                Black Soldier Fly farming for organic waste management and affordable animal feeds.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">💧</div>
              <h4 className="text-2xl font-bold mb-4 text-green-600">Irrigation Systems</h4>
              <p>
                Smart irrigation and water management systems for climate-resilient farming.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🌱</div>
              <h4 className="text-2xl font-bold mb-4 text-green-600">Climate Smart Farming</h4>
              <p>
                Sustainable agricultural practices that improve yields while protecting the environment.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🧑‍🌾</div>
              <h4 className="text-2xl font-bold mb-4 text-green-600">Farmer Training</h4>
              <p>
                Capacity building and practical training for farmers and agricultural entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-blue-800 mb-4">Featured Projects</h3>
          <p className="text-lg text-gray-700 mb-14">
            Practical agricultural solutions making impact in communities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1200&auto=format&fit=crop"
                alt="Poultry"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-green-600 mb-3">Integrated Poultry Unit</h4>
                <p>
                  Sustainable poultry production system with modern feeding and waste management.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
                alt="Irrigation"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-green-600 mb-3">Smart Irrigation</h4>
                <p>
                  Water-efficient irrigation systems designed for climate resilience.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
                alt="Organic farming"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-green-600 mb-3">Organic Waste Recycling</h4>
                <p>
                  BSF-based organic waste recycling and sustainable feed production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
          <p className="text-lg text-green-100 mb-10">
            Contact us for agricultural consultancy, partnerships, and climate-smart farming solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            <div className="bg-green-800/60 p-6 rounded-3xl shadow-lg">
              <h4 className="font-bold text-xl mb-3">📍 Location</h4>
              <p>Kigali, Kicukiro District, Niboye</p>
            </div>

            <div className="bg-green-800/60 p-6 rounded-3xl shadow-lg">
              <h4 className="font-bold text-xl mb-3">📞 Phone</h4>
              <p>+25078838107, +25078381223</p>
            </div>

            <div className="bg-green-800/60 p-6 rounded-3xl shadow-lg">
              <h4 className="font-bold text-xl mb-3">✉️ Email</h4>
              <p>climagroltd@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 text-left max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-blue-800 mb-2">Send Us a Message</h4>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {sent && (
              <div className="bg-green-100 border border-green-300 text-green-800 rounded-2xl px-5 py-4 mb-6">
                ✅ Thanks for reaching out! Your email app should now open with your message ready to send.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.name ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.email ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="block font-semibold mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is your inquiry about?"
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                className={`w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none ${
                  errors.message ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-6 w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-2xl font-bold shadow-lg transition"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        <p>© 2026 CLIM-AGRO LTD. All rights reserved.</p>
      </footer>
    </div>
  );
}
