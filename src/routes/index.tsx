import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Starfield } from "../components/Starfield";
import { PrismScene } from "../components/PrismScene";
import { Reveal } from "../components/Reveal";
import { featuredProjects } from "../lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prismo Lab — Turn Ideas Into Vision" },
      { name: "description", content: "Cinematic creative studio by Hamza Elmansouri. Branding, art direction & immersive design." },
      { property: "og:title", content: "Prismo Lab — Turn Ideas Into Vision" },
      { property: "og:description", content: "Cinematic creative studio. Branding, art direction & immersive design." },
    ],
  }),
  component: Home,
});

const values = [
  { t: "Vision", d: "We translate intuition into images that linger." },
  { t: "Identity", d: "Logos, systems, and the soul behind them." },
  { t: "Emotion", d: "Design that moves before it explains." },
  { t: "Motion", d: "Frames that breathe, type that pulses." },
  { t: "Experience", d: "Interfaces tuned like cinema." },
];

function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={ref} className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-70" />
        <Starfield count={120} />
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <PrismScene />
        </motion.div>

        {/* travelling beam */}
        <div
          className="pointer-events-none absolute left-1/3 top-0 h-full w-px animate-beam"
          style={{ background: "var(--gradient-beam)" }}
        />
        <div
          className="pointer-events-none absolute right-1/4 top-0 h-full w-px animate-beam"
          style={{ background: "var(--gradient-beam)", animationDelay: "2s" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-44 md:pt-56 pb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
          >
            / Creative Studio — Est. since light
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 font-display font-medium leading-[0.85] tracking-tighter text-[18vw] md:text-[12rem]"
          >
            PRISMO
            <span className="block text-prism animate-shimmer">LAB</span>
          </motion.h1>

          <div className="mt-10 grid md:grid-cols-3 gap-10 items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="md:col-span-2 max-w-xl text-lg md:text-xl text-foreground/80 leading-relaxed"
            >
              <span className="uppercase tracking-[0.3em] text-xs text-muted-foreground block mb-3">
                Turn Ideas Into Vision
              </span>
              Creative direction, branding, visuals and digital experiences refracted through
              light. We design like cinema — slow, immersive, and unforgettable.
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
                View Projects <ArrowUpRight size={14} className="group-hover:rotate-45 transition" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-white/5 transition"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <span>Scroll into light</span>
          <span className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* MOVING TEXT */}
      <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-5">
        <div className="home-marquee flex w-max whitespace-nowrap font-display text-2xl md:text-4xl uppercase tracking-[0.25em] text-foreground/80">
          {Array.from({ length: 2 }).map((_, group) => (
            <div key={group} className="flex items-center">
              {["Branding", "Art Direction", "Visual Systems", "Motion", "Packaging", "Digital Experience"].map((item) => (
                <span key={`${group}-${item}`} className="mx-6 md:mx-10">
                  {item} <span className="text-prism">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative py-32 md:py-48 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">/ About</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              I'm <span className="italic font-light text-prism">Hamza</span>
              <br />
              Elmansouri.
              <br />
              <span className="font-extralight text-foreground/70">A graphic designer</span>
              <br />
              <span className="font-extralight">obsessed with light.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-5 space-y-6 text-foreground/80 leading-relaxed">
            <p>
              I build brands the way directors build films — every frame, every transition,
              every silence designed. My work lives between the editorial calm of Swiss design
              and the immersive energy of coastal, nomadic life.
            </p>
            <p className="text-muted-foreground">
              Eight years across identity systems, album covers, motion, and digital art
              direction for studios, musicians, and ocean-minded brands.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] border-b border-white/20 pb-1 hover:border-white/60"
            >
              More about me <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-32 px-6 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_58%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">/ The Spectrum</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
                Every project moves<br />through a quiet sequence.
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 text-lg leading-relaxed text-foreground/75">
              It starts as a feeling, becomes a system, then finds its final shape through images,
              motion, texture, and the small decisions that make a brand feel alive.
            </p>
          </Reveal>

          <div className="mt-20">
            {values.map((v, i) => (
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

      {/* FEATURED */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">/ Selected work</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight">Featured projects.</h2>
            </div>
            <Link to="/projects" className="text-sm uppercase tracking-[0.25em] border-b border-white/20 pb-1 hover:border-white/60 inline-flex gap-2 items-center">
              View all <ArrowRight size={14} />
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
                      <span className="text-right">{p.category}</span>
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

      {/* CTA */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-aurora animate-drift" />
        <Starfield count={50} />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">/ Let's collaborate</p>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.95] tracking-tighter">
              Let's build something
              <br />
              <span className="text-prism animate-shimmer">unforgettable.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.25em] hover:shadow-prism transition"
            >
              Start Your Vision <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
