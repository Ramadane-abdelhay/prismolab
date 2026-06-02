import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

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
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [themeAnimating, setThemeAnimating] = useState(false);
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

  useEffect(() => {
    const stored = window.localStorage.getItem("prismo-theme");
    const nextTheme = stored === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setThemeAnimating(true);
    setTheme(nextTheme);
    window.localStorage.setItem("prismo-theme", nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.setTimeout(() => setThemeAnimating(false), 980);
  };

  const ThemeSwitch = ({ mobile = false }: { mobile?: boolean }) => (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
      onClick={toggleTheme}
      className={`theme-switch relative grid h-10 w-[4.75rem] grid-cols-2 items-center rounded-full border border-white/15 bg-white/5 p-1 transition hover:bg-white/10 ${
        mobile ? "mx-auto" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className={`theme-switch-thumb absolute top-1 h-8 w-8 rounded-full bg-foreground shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-transform duration-500 ${
          theme === "light" ? "translate-x-9" : "translate-x-0"
        }`}
      />
      <span className={`relative z-10 grid place-items-center transition ${theme === "dark" ? "text-background" : "text-foreground/55"}`}>
        <Moon size={15} />
      </span>
      <span className={`relative z-10 grid place-items-center transition ${theme === "light" ? "text-background" : "text-foreground/55"}`}>
        <Sun size={15} />
      </span>
    </button>
  );

  return (
    <>
      {themeAnimating && (
        <div className="theme-transition fixed inset-0 z-[95] grid place-items-center bg-background/75 backdrop-blur-sm">
          <img src="/images/symbol.svg" alt="" aria-hidden="true" className="theme-transition-symbol h-24 w-24 object-contain" />
        </div>
      )}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "mx-4 rounded-full border border-white/15 bg-background/45 py-3 px-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:mx-auto md:px-6"
              : ""
          }`}
        >
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="Prismo Lab"
              className="theme-brand-logo h-8 w-auto object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.45)] md:h-9"
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

          <div className="hidden md:flex items-center gap-3">
            <ThemeSwitch />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] hover:bg-white/5 transition"
            >
              Start Vision
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-foreground shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition hover:bg-white/10"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden px-4 transition-all duration-500 ${
            open ? "max-h-[38rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 overflow-hidden rounded-[1.75rem] border border-white/15 bg-background/55 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
            <div className="flex items-center justify-center border-b border-white/10 px-5 py-4">
              <ThemeSwitch mobile />
            </div>
            <nav className="flex flex-col p-3">
              {items.map((it, index) => {
                const active = loc.pathname === it.to;
                return (
                  <Link
                    key={it.to}
                    to={it.to}
                    className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition ${
                      active ? "bg-white/10 text-foreground" : "text-foreground/75 hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    <span className="font-display text-2xl tracking-tight">{it.label}</span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      0{index + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>
            <Link
              to="/contact"
              className="mx-3 mb-3 flex items-center justify-between rounded-2xl bg-foreground px-4 py-4 text-background"
            >
              <span className="text-xs uppercase tracking-[0.25em]">Start Vision</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
