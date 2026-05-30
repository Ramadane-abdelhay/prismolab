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

  useEffect(() => { setOpen(false); }, [loc.pathname]);

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
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-7 w-7">
              <polygon
                points="12,3 22,21 2,21"
                fill="none"
                stroke="url(#navp)"
                strokeWidth="1.4"
              />
              <defs>
                <linearGradient id="navp" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="oklch(0.85 0.16 210)" />
                  <stop offset="0.5" stopColor="oklch(0.92 0.18 90)" />
                  <stop offset="1" stopColor="oklch(0.65 0.25 290)" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 rounded-full blur-md bg-prism opacity-0 group-hover:opacity-40 transition" />
          </span>
          <span className="font-display text-sm tracking-cinematic uppercase">
            Prismo<span className="text-prism">·</span>Lab
          </span>
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

      {/* mobile */}
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
