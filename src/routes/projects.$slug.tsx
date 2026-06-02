import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects, type Project, type ProjectMedia } from "../lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) return { meta: [{ title: "Project | Prismo Lab" }] };
    return {
      meta: [
        { title: `${project.title} | Prismo Lab` },
        { name: "description", content: project.intro },
        { property: "og:title", content: `${project.title} | Prismo Lab` },
        { property: "og:description", content: project.intro },
      ],
    };
  },
  component: ProjectPage,
});

const galleryText =
  "This is where the project opens up: one frame after another, held in a clean rhythm so the work can speak clearly. The sequence keeps the story simple, visual, and focused on the details inside the images.";

function ProjectPage() {
  const { slug } = Route.useLoaderData() as { slug: string };
  const project = getProject(slug) as Project;
  const idx = projects.findIndex((item) => item.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const heroMedia = getHeroMedia(project);
  const galleryMedia = getGalleryMedia(project, heroMedia);
  const useNaturalMediaSize = ["project-1", "project-2"].includes(project.slug);
  const useInstagramCrop = [
    "alya",
    "flexura-yoga-club",
    "kite-fly-maroc",
    "luxe-verve",
    "surfeye",
    "surfun",
    "yacin-pet",
  ].includes(project.slug);

  return (
    <article className="relative isolate overflow-hidden bg-background">
      <ProjectBackground color={project.dominantColor} />

      <div className="relative z-10 pt-32 px-6 max-w-7xl mx-auto">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} /> All projects
        </Link>
      </div>

      <section className="relative z-10 px-6 py-16 mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Project story {project.n}</p>
          <div className="grid md:grid-cols-12 gap-8 mt-6 items-end">
            <h1 className="md:col-span-7 font-display text-6xl md:text-9xl tracking-tighter leading-[0.85]">
              {project.title}
            </h1>
            <div className="md:col-span-5 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">{project.intro}</p>
              <Meta project={project} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <MediaFrame
            media={heroMedia}
            title={`${project.title} hero`}
            priority
            naturalSize={useNaturalMediaSize}
            cropToFrame={useInstagramCrop}
          />
        </Reveal>
      </section>

      <section
        className="relative z-10 px-6 py-32 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${project.dominantColor}22 0%, ${project.dominantColor}55 16%, ${project.dominantColor}66 52%, ${project.dominantColor}44 86%, transparent 100%)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70 blur-3xl"
          style={{
            background: `radial-gradient(ellipse at 50% 18%, ${project.dominantColor} 0%, ${project.dominantColor}88 42%, transparent 72%)`,
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 md:gap-14">
          <Reveal className="w-full max-w-3xl py-8 text-center">
            <p className="text-lg md:text-2xl leading-relaxed text-foreground/85">{galleryText}</p>
          </Reveal>

          {galleryMedia.map((media, index) => (
            <Reveal key={media.src} delay={(index % 3) * 0.04} className="w-full">
              <MediaFrame
                media={media}
                title={`${project.title} visual ${index + 2}`}
                naturalSize={useNaturalMediaSize}
                cropToFrame={useInstagramCrop}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <NextProject next={next} />
    </article>
  );
}

function ProjectBackground({ color }: { color: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-x-0 top-0 h-[44rem] bg-[linear-gradient(180deg,#020616_0%,#030817_48%,rgba(3,8,23,0.74)_76%,rgba(3,8,23,0)_100%)]" />
      <div className="absolute inset-x-0 top-[36rem] h-[34rem] bg-gradient-to-b from-transparent via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_58%)]" />
    </div>
  );
}

function getHeroMedia(project: Project) {
  return (
    project.media.find((media) => /\/1\.(jpe?g|png|webp)$/i.test(media.src)) ??
    project.media.find((media) => media.src === project.main) ??
    project.media[0]
  );
}

function getGalleryMedia(project: Project, heroMedia: ProjectMedia) {
  const mainMedia = project.media.find((media) => media.src === project.main);
  const rest = project.media.filter((media) => media.src !== heroMedia.src && media.src !== project.main);

  if (!mainMedia || mainMedia.src === heroMedia.src) {
    return rest;
  }

  return [mainMedia, ...rest];
}

function MediaFrame({
  media,
  title,
  priority = false,
  naturalSize = false,
  cropToFrame = false,
}: {
  media: ProjectMedia;
  title: string;
  priority?: boolean;
  naturalSize?: boolean;
  cropToFrame?: boolean;
}) {
  const frameClassName = naturalSize
    ? "mx-auto w-full max-w-[900px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
    : "mx-auto aspect-[4/5] w-full max-w-[900px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_30px_120px_rgba(0,0,0,0.35)]";
  const mediaClassName = naturalSize
    ? "block h-auto w-full object-contain"
    : `h-full w-full ${cropToFrame ? "object-cover" : "object-contain"}`;

  return (
    <div className={frameClassName}>
      {media.type === "video" ? (
        <video src={media.src} className={mediaClassName} autoPlay muted loop playsInline />
      ) : (
        <img src={media.src} alt={title} className={mediaClassName} loading={priority ? "eager" : "lazy"} />
      )}
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-1 gap-5 text-xs uppercase tracking-[0.25em] text-muted-foreground border-y border-white/10 py-5 sm:grid-cols-3">
      <div><dt>Client</dt><dd className="mt-2 text-foreground normal-case tracking-normal">{project.client}</dd></div>
      <div><dt>Category</dt><dd className="mt-2 text-foreground normal-case tracking-normal">{project.category}</dd></div>
      <div><dt>Role</dt><dd className="mt-2 text-foreground normal-case tracking-normal">{project.role}</dd></div>
    </dl>
  );
}

function NextProject({ next }: { next: Project }) {
  return (
    <section className="relative z-10 px-6 py-24 mx-auto max-w-7xl">
      <Link
        to="/projects/$slug"
        params={{ slug: next.slug }}
        className="group block border-t border-white/10 pt-10"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Next project</p>
        <div className="mt-4 flex items-end justify-between gap-6">
          <h3 className="font-display text-5xl md:text-7xl tracking-tighter group-hover:text-prism transition">{next.title}</h3>
          <span className="h-14 w-14 shrink-0 rounded-full border border-white/30 grid place-items-center group-hover:bg-white group-hover:text-background transition">
            <ArrowUpRight />
          </span>
        </div>
      </Link>
    </section>
  );
}
