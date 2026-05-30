import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import {
  Type, Sparkles, Compass, Share2, Disc3, Image as ImgIcon,
  Shirt, Package, Film, MonitorPlay, Megaphone, Printer, CreditCard,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prismo Lab" },
      { name: "description", content: "Branding, art direction, motion, packaging and creative campaigns by Prismo Lab." },
      { property: "og:title", content: "Services — Prismo Lab" },
      { property: "og:description", content: "Creative agency-level services for visionary brands." },
    ],
  }),
  component: Services,
});

const services = [
  { i: Type, t: "Logo Design", d: "Marks built to last decades — drawn, not generated." },
  { i: Sparkles, t: "Brand Identity", d: "Full systems: voice, type, palette, motion, application." },
  { i: Compass, t: "Art Direction", d: "Visual leadership across photography, film and design." },
  { i: Share2, t: "Social Media Design", d: "Editorial-grade templates that scale without losing soul." },
  { i: Disc3, t: "Album Covers", d: "Cover art and full music identity packages." },
  { i: ImgIcon, t: "Posters", d: "Print-first compositions for events, films and culture." },
  { i: Shirt, t: "T-shirt Design", d: "Wearable artwork — limited drops to full ranges." },
  { i: Package, t: "Packaging", d: "Structural and surface design for premium products." },
  { i: Film, t: "Motion Graphics", d: "Type in motion, brand stings, looping installations." },
  { i: MonitorPlay, t: "UI Visual Design", d: "Pixel-perfect interface direction for premium products." },
  { i: Megaphone, t: "Creative Campaigns", d: "End-to-end campaign concepts across channels." },
  { i: Printer, t: "Print Design", d: "Books, magazines, lookbooks, editorial systems." },
  { i: CreditCard, t: "Business Cards", d: "Tactile, considered, finished with intent." },
];

function Services() {
  return (
    <>
      <section className="pt-44 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Services</p>
          <Reveal as="h1" className="mt-6 font-display text-[14vw] md:text-[10rem] leading-[0.85] tracking-tighter">
            A studio<br />
            for the <span className="text-prism italic font-light">whole</span><br />
            <span className="font-extralight">spectrum.</span>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg text-foreground/80 leading-relaxed">
              Engagements range from a single mark to a complete identity ecosystem.
              Every project receives the same cinematic care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 0.05}>
              <div className="group relative bg-background p-8 h-full transition hover:bg-deep-navy/60">
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition"
                  style={{ background: "var(--gradient-prism)" }}
                />
                <s.i className="text-prism mb-6" size={28} />
                <h3 className="font-display text-2xl tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <span className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
