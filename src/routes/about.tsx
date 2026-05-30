import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Starfield } from "../components/Starfield";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Prismo Lab" },
      { name: "description", content: "Who is Prismo? The creative force behind Prismo Lab, turning hidden light into visual worlds." },
      { property: "og:title", content: "About - Prismo Lab" },
      { property: "og:description", content: "The creative force behind Prismo Lab." },
    ],
  }),
  component: About,
});

const principles = [
  {
    n: "01",
    title: "Find the spark",
    body: "Every project begins with the small, quiet part of the idea that already carries emotion.",
  },
  {
    n: "02",
    title: "Build the atmosphere",
    body: "Color, rhythm, image, texture, and type are shaped until the idea starts to feel like a world.",
  },
  {
    n: "03",
    title: "Make it live",
    body: "The identity is prepared to move across social content, campaigns, websites, packaging, and real moments.",
  },
];

const spectrum = ["Identity", "Story", "Emotion", "Atmosphere", "Presence"];

function About() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-6 pt-40 pb-24">
        <div className="absolute inset-0 bg-aurora opacity-55" />
        <Starfield count={90} />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ About</p>
            <Reveal
              as="h1"
              className="mt-6 max-w-5xl font-display text-[18vw] leading-[0.82] tracking-tighter md:text-[9rem] lg:text-[10rem]"
            >
              Who is<br />
              <span className="inline-block pr-5 italic font-light text-prism">Prismo?</span>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
              <img
                src="/images/hamza.jpeg"
                alt="Hamza, the creative eye behind Prismo Lab"
                className="aspect-[4/5] h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm leading-relaxed text-foreground/80">
                Prismo is the creative force behind the studio, seeing hidden light inside an idea and turning it into something visible.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ The vision</p>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              The way<br />
              <span className="text-prism">I see.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="space-y-7 text-lg leading-relaxed text-foreground/80 md:col-span-6 md:col-start-7">
            <p>
              Prismo is the name I gave to the way I see.
            </p>
            <p className="text-muted-foreground">
              I’m Hamza Elmanssouri, the creative mind behind Prismo Lab. For me, Prismo is a philosophy: a way of looking beyond the surface of an idea to find its feeling, its story, and the world it could become.
            </p>
            <p className="font-display text-2xl leading-tight text-foreground md:text-3xl">
              Prismo is the vision.
              <br />
              The Lab is where that vision takes form.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/5 px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_62%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Method</p>
            <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[1] tracking-tight md:text-6xl">
              The work is quiet first, then it expands.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-3">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full bg-background/95 p-8 transition hover:bg-deep-navy/70">
                  <p className="font-display text-5xl text-foreground/20">{item.n}</p>
                  <h3 className="mt-10 font-display text-3xl tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/orea-coastal-parfum/1.jpg" alt="Orea visual detail" className="aspect-[4/5] rounded-3xl object-cover" />
              <img src="/images/Maghrebwaves/1.jpg" alt="Music visual detail" className="mt-12 aspect-[4/5] rounded-3xl object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-6 lg:col-start-7">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Spectrum</p>
            <h2 className="mt-5 font-display text-4xl leading-[1] tracking-tight md:text-6xl">
              One idea, many layers.
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {spectrum.map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-white/10 py-4">
                  <span className="text-lg">{item}</span>
                  <span className="text-prism">△</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Manifesto</p>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter md:text-8xl">
              Some ideas appear as light.
              <br />
              <span className="text-prism">Prismo expands them.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] text-background transition hover:shadow-prism"
            >
              Start Your Vision <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
