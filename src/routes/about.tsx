import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { Starfield } from "../components/Starfield";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Prismo Lab" },
      { name: "description", content: "Hamza Elmansouri — graphic designer behind Prismo Lab. Story, philosophy, and creative process." },
      { property: "og:title", content: "About — Prismo Lab" },
      { property: "og:description", content: "Hamza Elmansouri — graphic designer behind Prismo Lab." },
    ],
  }),
  component: About,
});

const timeline = [
  { y: "2017", t: "First commissioned identity for a Moroccan surf school." },
  { y: "2019", t: "Art direction for a Lisbon indie label, three EP covers." },
  { y: "2021", t: "Launched the Nomad Atlas editorial series." },
  { y: "2023", t: "Studio rebrand — Prismo Lab is born." },
  { y: "2026", t: "Currently designing immersive identities worldwide." },
];

const tools = ["Figma", "After Effects", "Cinema 4D", "Blender", "Illustrator", "Photoshop", "InDesign", "Glyphs"];

function About() {
  return (
    <>
      <section className="relative pt-44 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-50" />
        <Starfield count={70} />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ About</p>
          <Reveal as="h1" className="mt-6 font-display text-[14vw] md:text-[10rem] leading-[0.85] tracking-tighter">
            A designer<br />
            <span className="italic font-light text-prism">becoming</span><br />
            <span className="font-extralight">light.</span>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Story</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 space-y-6 text-lg text-foreground/85 leading-relaxed">
            <p>
              I grew up between the Atlantic coast and the desert silence of southern Morocco —
              two horizons that taught me the same lesson: vastness asks for restraint.
            </p>
            <p>
              Prismo Lab is the studio I always wanted to work for. A place where brands are
              treated like films, where typography is choreography, and where every project
              starts with a single white ray of light.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 bg-deep-navy/40">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16">
          {[
            { h: "Philosophy", b: "Less surface, more soul. I strip projects down to a single feeling, then build outward until that feeling becomes a system." },
            { h: "Process", b: "Listen → refract → compose → refine. Every project passes through the same prism but emerges in a different spectrum." },
            { h: "Approach", b: "Editorial calm meets coastal freedom. Swiss grids loosened by salt air and late-night studio sessions." },
            { h: "Inspirations", b: "Tarkovsky, Saul Bass, Massimo Vignelli, James Turrell, DJ Snake's Nomad, surf cinema, and the way light falls at 6:42 AM." },
          ].map((c, i) => (
            <Reveal key={c.h} delay={i * 0.1}>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4">{c.h}</h3>
              <p className="text-foreground/75 leading-relaxed">{c.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">/ Tools</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-12">The instruments.</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {tools.map((t, i) => (
              <Reveal key={t} delay={i * 0.04}>
                <span className="glass rounded-full px-5 py-2 text-sm uppercase tracking-[0.2em]">{t}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">/ Timeline</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-16">A spectrum of years.</h2>
          </Reveal>
          <div className="relative pl-8 border-l border-white/10">
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background: "var(--gradient-prism)", opacity: 0.4 }}
            />
            {timeline.map((e, i) => (
              <Reveal key={e.y} delay={i * 0.08} className="relative pb-14 last:pb-0">
                <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full bg-prism shadow-glow" />
                <p className="font-display text-2xl text-prism">{e.y}</p>
                <p className="mt-2 text-lg text-foreground/85">{e.t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
