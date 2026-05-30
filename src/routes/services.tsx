import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, MonitorPlay, Package, Share2, Sparkles, Type } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Starfield } from "../components/Starfield";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Prismo Lab" },
      { name: "description", content: "Brand identity, art direction, social content, digital experiences, packaging, and visual worlds by Prismo Lab." },
      { property: "og:title", content: "Services - Prismo Lab" },
      { property: "og:description", content: "What Prismo creates." },
    ],
  }),
  component: Services,
});

const services = [
  {
    i: Type,
    t: "Brand Identity",
    d: "Logo design, wordmarks, symbols, color palettes, typography, and full visual systems.",
    tag: "Identity systems",
  },
  {
    i: Compass,
    t: "Art Direction",
    d: "Moodboards, creative concepts, campaign ideas, visual storytelling, and brand atmosphere.",
    tag: "Creative direction",
  },
  {
    i: Share2,
    t: "Social Media Design",
    d: "Instagram posts, stories, Pinterest pins, launch visuals, carousels, and content systems.",
    tag: "Content rhythm",
  },
  {
    i: Sparkles,
    t: "Visual Worlds",
    d: "Characters, textures, scenes, brand universes, and creative concepts with a strong identity.",
    tag: "World building",
  },
  {
    i: MonitorPlay,
    t: "Digital Experience",
    d: "Website direction, landing page copy, visual layout, and online brand presentation.",
    tag: "Online presence",
  },
  {
    i: Package,
    t: "Packaging & Product Concepts",
    d: "Bottle concepts, packaging direction, product visuals, mockups, and commercial presentation.",
    tag: "Product stories",
  },
];

const process = [
  { n: "01", t: "Spark", d: "Define the idea, emotion, audience, and visual direction." },
  { n: "02", t: "Spectrum", d: "Explore references, symbols, color, typography, and mood." },
  { n: "03", t: "Shape", d: "Build the identity pieces, systems, visuals, and applications." },
  { n: "04", t: "World", d: "Prepare the brand to live across platforms, products, and campaigns." },
];

function Services() {
  return (
    <>
      <section className="relative min-h-[86vh] overflow-hidden px-6 pt-40 pb-24">
        <div className="absolute inset-0 bg-aurora opacity-55" />
        <Starfield count={80} />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Services</p>
            <Reveal as="h1" className="mt-6 font-display text-[16vw] leading-[0.84] tracking-tighter md:text-[9rem] lg:text-[10rem]">
              What Prismo<br />
              <span className="inline-block pr-5 italic font-light text-prism">creates.</span>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-4">
            <p>
              Services are not separate boxes. They are layers of one visual world: identity, atmosphere, content, product, and digital presence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] text-background transition hover:shadow-prism"
            >
              Start Your Vision <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {["Brand systems", "Visual campaigns", "Digital presence"].map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-prism opacity-60" />
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">0{index + 1}</p>
                <h2 className="mt-10 font-display text-3xl tracking-tight">{item}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Built to feel consistent, emotional, and ready to move across every surface.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Capabilities</p>
              <h2 className="mt-5 font-display text-4xl leading-[1] tracking-tight md:text-6xl">
                Six ways to shape the light.
              </h2>
            </div>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              Choose one focused service or combine them into a complete identity system.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={(i % 3) * 0.05}>
                <div className="group relative flex min-h-[18rem] flex-col bg-background p-8 transition hover:bg-deep-navy/65">
                  <div
                    className="absolute left-0 right-0 top-0 h-px opacity-0 transition group-hover:opacity-100"
                    style={{ background: "var(--gradient-prism)" }}
                  />
                  <div className="flex items-start justify-between gap-6">
                    <s.i className="text-prism" size={30} />
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-10">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.tag}</p>
                    <h3 className="font-display text-3xl tracking-tight">{s.t}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/5 px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_62%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Collaboration</p>
            <h2 className="mt-5 font-display text-4xl leading-[1] tracking-tight md:text-6xl">
              From spark to system.
            </h2>
          </Reveal>

          <div className="lg:col-span-7">
            {process.map((step, index) => (
              <Reveal key={step.t} delay={index * 0.06}>
                <div className="grid gap-5 border-t border-white/10 py-7 sm:grid-cols-12 sm:items-start">
                  <span className="font-display text-2xl text-foreground/35 sm:col-span-2">{step.n}</span>
                  <h3 className="font-display text-3xl sm:col-span-4">{step.t}</h3>
                  <p className="leading-relaxed text-muted-foreground sm:col-span-6">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Start</p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter md:text-8xl">
              Bring the spark.
              <br />
              <span className="text-prism">Prismo shapes the vision.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 text-sm uppercase tracking-[0.25em] transition hover:bg-white/5 hover:shadow-prism"
            >
              Start a Project <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
