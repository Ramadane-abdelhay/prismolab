import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects - Prismo Lab" },
      { name: "description", content: "A digital exhibition of selected design work by Prismo Lab." },
      { property: "og:title", content: "Projects - Prismo Lab" },
      { property: "og:description", content: "A digital exhibition of selected design work." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/projects" && pathname !== "/projects/") {
    return <Outlet />;
  }

  return (
    <>
      <section className="pt-44 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Exhibition</p>
          <Reveal as="h1" className="mt-6 font-display text-[14vw] md:text-[10rem] leading-[0.85] tracking-tighter">
            Selected<br />
            <span className="text-prism">works.</span>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block relative overflow-hidden rounded-3xl border border-white/10 bg-background"
              >
                <div
                  className={`w-full transition duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-[16/7]" : "aspect-[5/6]"}`}
                >
                  <img src={p.main} alt={p.title} className="h-full w-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-background/20" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
                  <div className="flex justify-between gap-5 text-xs uppercase tracking-[0.3em] text-foreground/80">
                    <span>{p.n} - {p.year}</span>
                    <span className="text-right">{p.category}</span>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <h2 className="font-display text-3xl md:text-5xl tracking-tight">{p.title}</h2>
                    <span className="h-12 w-12 shrink-0 rounded-full border border-white/30 grid place-items-center group-hover:bg-white group-hover:text-background transition">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
