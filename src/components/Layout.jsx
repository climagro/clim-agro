import { useState } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { company } from "../data/site.js";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/model", label: "Our Model" },
  { to: "/impact", label: "Climate Impact" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/investors", label: "Investors" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="grid place-items-center w-9 h-9 rounded-full bg-forest text-cream font-display font-bold text-lg group-hover:bg-leaf transition">
        C
      </span>
      <span className="font-display font-bold text-xl text-forest tracking-tight">
        CLIM-AGRO<span className="text-leaf"> LTD</span>
      </span>
    </Link>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close mobile menu on navigation
  const close = () => setOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-forest/10">
        <div className="container-x flex items-center justify-between py-3.5">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-full transition ${
                    isActive
                      ? "text-forest bg-sand"
                      : "text-ink/70 hover:text-forest hover:bg-sand/60"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-forest/20 text-forest"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="lg:hidden border-t border-forest/10 bg-cream">
            <div className="container-x py-3 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `px-3 py-3 text-sm font-medium rounded-lg transition ${
                      isActive ? "text-forest bg-sand" : "text-ink/70"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet key={location.pathname} />
      </main>

      {/* Footer */}
      <footer className="bg-forest text-cream/90 mt-20">
        <div className="container-x py-14 grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-display font-bold text-2xl text-cream">
              CLIM-AGRO LTD
            </span>
            <p className="mt-3 text-sm text-cream/70 max-w-xs leading-relaxed">
              {company.coreMessage}
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-3 text-cream">Explore</h4>
            <ul className="space-y-1.5 text-sm">
              {navItems.slice(1, 6).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-cream/70 hover:text-cream transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-3 text-cream">Get in touch</h4>
            <ul className="space-y-1.5 text-sm text-cream/70">
              <li>📍 {company.location}</li>
              <li>📞 {company.phone}</li>
              <li>✉️ {company.email}</li>
            </ul>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-semibold bg-leaf text-cream px-5 py-2.5 rounded-full hover:brightness-110 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-cream/15">
          <div className="container-x py-5 text-xs text-cream/60 flex flex-col sm:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} CLIM-AGRO LTD. All rights reserved.</span>
            <span>Kigali · Rwanda</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
