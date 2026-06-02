import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Starfield } from "../components/Starfield";
import { PrismScene } from "../components/PrismScene";
import { Reveal } from "../components/Reveal";
import { featuredProjects } from "../lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prismo Lab | Turn Ideas Into Vision" },
      { name: "description", content: "Creative studio by Hamza Elmanssouri for brand identity, art direction, and digital presence." },
      { property: "og:title", content: "Prismo Lab | Turn Ideas Into Vision" },
      { property: "og:description", content: "Brand identity, art direction, and digital presence by Prismo Lab." },
    ],
  }),
  component: Home,
});

const method = [
  { t: "The Signal", d: "The first feeling behind the idea." },
  { t: "The Meaning", d: "The story, audience, message, and reason people should care." },
  { t: "The Symbol", d: "The logo, mark, typography, colors, and visual language." },
  { t: "The System", d: "The layouts, content rules, social style, and brand consistency." },
  { t: "The World", d: "The full atmosphere across website, social media, packaging, campaigns, and digital presence." },
];

const services = [
  {
    t: "Brand Strategy",
    d: "Positioning, audience, message, personality, and creative angle.",
  },
  {
    t: "Visual Identity",
    d: "Logo, symbol, typography, colors, and visual system.",
  },
  {
    t: "Storytelling",
    d: "Brand story, launch concept, content ideas, and narrative direction.",
  },
  {
    t: "Art Direction",
    d: "Mood, references, composition, texture, and visual atmosphere.",
  },
  {
    t: "Digital Experience",
    d: "Website direction, landing pages, portfolio systems, and digital presence.",
  },
  {
    t: "Social Identity",
    d: "Instagram, Pinterest, carousel systems, launch posts, and content style.",
  },
];

function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={ref} className="relative min-h-[112svh] overflow-hidden md:min-h-screen">
        <div className="absolute inset-0 bg-aurora opacity-15" />
        <Starfield count={120} />
        <motion.div style={{ y, opacity }} className="absolute inset-0 -translate-y-[8.75rem] md:translate-y-0">
          <PrismScene />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-[5.5rem] sm:pt-[6.5rem] md:pt-48 lg:pt-52 pb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
          >
            Creative Lab
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 md:mt-8 font-semibold leading-[0.85] tracking-tighter text-[15vw] md:text-[9.5rem] lg:text-[10.5rem] xl:text-[11rem] [font-family:Montserrat,sans-serif]"
          >
            PRISMO
            <span className="block text-prism animate-shimmer">LAB</span>
          </motion.h1>

          <div className="mt-[calc(35vh-80px)] grid gap-8 md:mt-10 md:grid-cols-3 md:gap-10 md:items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="md:col-span-2 max-w-xl text-base md:max-w-lg md:text-lg lg:text-xl text-foreground/80 leading-relaxed"
            >
              <span className="uppercase tracking-[0.3em] text-xs text-muted-foreground block mb-3">
                Seen by Prismo. Shaped in the Lab.
              </span>
              Prismo Lab is a creative identity lab guided by a way of seeing. We take raw ideas, hidden feelings, and unfinished visions, then shape them into strategy, stories, and atmosphere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.25em] hover:shadow-prism transition"
              >
                View Worlds <ArrowUpRight size={14} className="group-hover:rotate-45 transition" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-white/5 transition"
              >
                Enter the Lab
              </Link>
            </motion.div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <span>Follow his vision</span>
          <span className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* MOVING TEXT */}
      <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-5">
        <div className="home-marquee flex w-max whitespace-nowrap font-display text-xl uppercase tracking-[0.25em] text-foreground/80 md:text-3xl">
          {Array.from({ length: 2 }).map((_, group) => (
            <div key={group} className="flex items-center gap-6 md:gap-10">
              {["Strategy", "Stories", "Art Direction", "Identity Systems", "Social Presence", "Brand Worlds"].map((item) => (
                <Fragment key={`${group}-${item}`}>
                  <span>{item}</span>
                  <span className="text-prism leading-none">△</span>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative py-32 md:py-48 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">ABOUT</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight pr-3">
              Who is <span className="inline-block pr-3 italic font-light text-prism">Prismo?</span>
            </h2>
            <p className="mt-6 max-w-xl font-display text-2xl leading-tight text-foreground/70 md:text-3xl">
              Prismo is the eye behind the idea.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-5 space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Prismo is a character, a philosophy, and a way of seeing.
              <br /><br />
              He sees what others miss: the hidden feeling, the strange detail, the symbol waiting inside the idea.
            </p>
            <p className="text-muted-foreground">
              Prismo Lab is where that vision becomes real.
            </p>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              {[
                ["Logo", "Signal"],
                ["Product", "World"],
                ["Style", "Meaning"],
              ].map(([from, to], index) => (
                <div key={`${from}-${to}`} className="grid grid-cols-[5.5rem_1fr_1.5rem_1fr_5.5rem] items-center border-t border-white/10 px-5 py-4 first:border-t-0">
                  <span className="font-display text-xl text-foreground">{from}</span>
                  <span className="h-px bg-white/55" />
                  <span className="relative z-10 grid place-items-center text-prism">△</span>
                  <span className="h-px bg-prism" />
                  <span className="text-right font-display text-xl text-muted-foreground">{to}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] border-b border-white/20 pb-1 hover:border-white/60"
            >
              Discover the Lab <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* METHOD */}
      <section className="relative py-32 px-6 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_58%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">The Refraction</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
                How Prismo sees a brand.
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 text-lg leading-relaxed text-foreground/75">
              A brand does not begin with colors or fonts. It begins with a feeling, a tension, a memory, a dream, or a detail that refuses to disappear.
            </p>
          </Reveal>

          <div className="mt-20">
            {method.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="grid gap-6 border-t border-white/10 py-8 md:grid-cols-12 md:items-center">
                  <span className="font-display text-3xl text-foreground/35 md:col-span-2">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-3xl md:col-span-4">{v.t}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground md:col-span-6">
                    {v.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">What the Lab Shapes</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight">
              Prismo turns vision into identity systems.
            </h2>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.t} delay={(i % 3) * 0.06}>
                <div className="h-full bg-background p-8 transition hover:bg-deep-navy/60">
                  <span className="font-display text-3xl text-foreground/30">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-10 font-display text-3xl tracking-tight">{service.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">The Worlds</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight">Selected work from inside the lab.</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                Each project carries its own symbol, atmosphere, story, and visual rhythm.
              </p>
            </div>
            <Link to="/projects" className="text-sm uppercase tracking-[0.25em] border-b border-white/20 pb-1 hover:border-white/60 inline-flex gap-2 items-center">
              View Worlds <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block relative overflow-hidden rounded-3xl border border-white/10"
                >
                  <div className="aspect-[4/5] w-full transition duration-700 group-hover:scale-105">
                    <img src={p.main} alt={p.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-background/20" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    <div className="flex justify-between gap-5 text-[10px] uppercase tracking-[0.25em] text-foreground/80">
                      <span>{p.n}</span>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <h3 className="font-display text-3xl md:text-4xl tracking-tight">{p.title}</h3>
                      <span className="h-11 w-11 shrink-0 rounded-full border border-white/30 grid place-items-center group-hover:bg-white group-hover:text-background transition">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative border-y border-white/5 px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">The Prismo Manifesto</p>
            <h2 className="mt-5 font-display text-4xl leading-[1] tracking-tight md:text-6xl">
              A brand should be seen before it is explained.
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7">
            <p>
              Prismo believes every brand carries a hidden shape.
            </p>
            <p className="text-muted-foreground">
              The work is to make that shape clear: a name, a mark, a rhythm, and a feeling people remember.
              <br /><br />
              A brand becomes powerful when people can recognize its feeling without needing everything explained.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-aurora animate-drift" />
        <Starfield count={50} />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Send the Signal</p>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.95] tracking-tighter">
              Let Prismo see what
              <br />
              <span className="text-prism animate-shimmer">your idea could become.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
              Bring the name, product, or early idea. Prismo Lab will help shape the strategy, identity, story, and visual direction around it.
            </p>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.25em] hover:shadow-prism transition"
            >
              Start a Vision <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
