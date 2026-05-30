import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Globe } from "lucide-react";
import { Starfield } from "./Starfield";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 mt-32">
      <Starfield count={60} />
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--gradient-prism)", opacity: 0.6 }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          / Turning ideas into vision
        </p>

        <h2 className="mt-6 w-full whitespace-nowrap font-display text-[13.8vw] leading-[0.85] tracking-tighter md:text-[14vw]">
          <span className="text-prism animate-shimmer">PRISMO</span>
          <span className="inline-block align-[0.08em] text-[0.74em] font-black text-foreground/45 [-webkit-text-stroke:0.035em_currentColor]">
            &#9651;
          </span>
          <span className="text-foreground/30">LAB</span>
        </h2>

        <div className="mt-16 grid gap-10 text-sm md:grid-cols-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
            <a href="mailto:hello@prismolab.studio" className="block hover:text-prism">hello@prismolab.studio</a>
            <p className="mt-2 text-muted-foreground">Casablanca &#9651; Lisbon &#9651; Anywhere</p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Navigate</p>
            <div className="grid gap-1">
              <Link to="/about" className="hover:text-prism">About</Link>
              <Link to="/projects" className="hover:text-prism">Projects</Link>
              <Link to="/services" className="hover:text-prism">Services</Link>
              <Link to="/contact" className="hover:text-prism">Contact</Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Elsewhere</p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Globe, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:border-white/40 hover:shadow-glow"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Manifesto</p>
            <p className="leading-relaxed text-foreground/80">
              They appear as light. They expand. They become vision.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/5 pt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row">
          <span>&copy; {new Date().getFullYear()} Prismo Lab - Hamza Elmansouri</span>
          <span>Crafted in deep space</span>
        </div>
      </div>
    </footer>
  );
}
