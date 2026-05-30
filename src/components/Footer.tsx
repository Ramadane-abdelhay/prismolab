import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin } from "lucide-react";
import { Starfield } from "./Starfield";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M19.05 4.91A9.79 9.79 0 0 0 12.08 2C6.63 2 2.2 6.43 2.2 11.88c0 1.74.46 3.44 1.32 4.94L2.12 22l5.29-1.39a9.83 9.83 0 0 0 4.67 1.19h.01c5.45 0 9.88-4.43 9.88-9.88a9.83 9.83 0 0 0-2.92-7.01Zm-6.97 15.22h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.14.82.84-3.06-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.25-8.23 8.25Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.3.37-.45.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function PinterestIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.02 2C6.5 2 3 5.96 3 10.28c0 2.01.76 3.8 2.39 4.47.27.11.51 0 .59-.3.05-.21.18-.72.24-.93.08-.3.05-.4-.17-.65-.47-.56-.77-1.28-.77-2.31 0-2.95 2.21-5.6 5.76-5.6 3.14 0 4.87 1.92 4.87 4.48 0 3.37-1.49 6.22-3.71 6.22-1.22 0-2.14-1.01-1.85-2.25.35-1.48 1.02-3.08 1.02-4.15 0-.96-.51-1.76-1.58-1.76-1.25 0-2.26 1.3-2.26 3.04 0 1.11.38 1.86.38 1.86s-1.29 5.46-1.52 6.42c-.45 1.91-.07 4.25-.03 4.49.02.14.2.17.28.07.12-.15 1.66-2.06 2.18-3.96.15-.54.85-3.31.85-3.31.42.8 1.65 1.5 2.95 1.5 3.88 0 6.51-3.54 6.51-8.28C19.13 5.76 16.09 2 12.02 2Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/prismo.lab/", Icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/212616751971", Icon: WhatsAppIcon },
  { label: "Pinterest", href: "https://www.pinterest.com/Prismolab/", Icon: PinterestIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hamzaelmanssouri", Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 mt-32">
      <Starfield count={60} />
      <div className="absolute inset-0 bg-aurora opacity-10 pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--gradient-prism)", opacity: 0.6 }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          / PRISMO LAB
        </p>

        <div className="relative mt-6 w-full" style={{ aspectRatio: "5000 / 693.09" }}>
          <img
            src="/images/logo.svg"
            alt="PRISMO LAB"
            className="absolute inset-0 h-full w-full object-contain opacity-30"
            style={{ clipPath: "inset(0 40.5% 0 0)" }}
          />
          <img
            src="/images/logo.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-contain opacity-30"
            style={{ clipPath: "inset(0 0 0 69.5%)" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-shimmer-reverse"
            style={{
              background: "var(--gradient-prism)",
              backgroundSize: "200% 100%",
              clipPath: "inset(0 0 0 69.5%)",
              WebkitMask: "url('/images/logo.svg') center / contain no-repeat",
              mask: "url('/images/logo.svg') center / contain no-repeat",
            }}
          />
          <img
            src="/images/symbol.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-[63.9%] top-1/2 h-[32%] w-auto -translate-x-1/2 -translate-y-1/2 brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,1)] drop-shadow-[0_0_24px_rgba(255,255,255,0.85)] drop-shadow-[0_0_44px_rgba(255,255,255,0.45)]"
          />
        </div>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-foreground/75">
          Turning raw ideas into visual worlds.
        </p>

        <div className="mt-16 grid gap-10 text-sm md:grid-cols-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
            <a href="mailto:hello@prismolab.studio" className="block hover:text-prism">hello@prismolab.studio</a>
            <p className="mt-2 text-muted-foreground">Morocco &#9651; Worldwide</p>
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
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-foreground/80 transition hover:border-white/40 hover:text-white hover:shadow-glow"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Manifesto</p>
            <p className="leading-relaxed text-foreground/80">
              Ideas arrive as signals.
              <br />
              We shape them into symbols.
              <br />
              Then we build the world around them.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>&copy; 2026 Prismo Lab. Built for brands with a hidden world.</span>
        </div>
      </div>
    </footer>
  );
}
