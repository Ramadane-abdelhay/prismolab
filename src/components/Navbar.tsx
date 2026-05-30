import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass rounded-full mx-4 md:mx-auto py-3 px-6" : ""
        }`}
      >
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Prismo Lab"
            className="h-10 w-auto object-contain md:h-11"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => {
            const active = loc.pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                className="relative px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {it.label}
                {active && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-px w-6 bg-prism shadow-glow" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] hover:bg-white/5 transition"
        >
          Start Vision
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass mx-4 mt-3 rounded-2xl p-6 flex flex-col gap-4">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="text-2xl font-display tracking-tight hover:text-prism"
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
