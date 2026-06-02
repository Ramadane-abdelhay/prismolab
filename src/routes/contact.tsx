import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { Starfield } from "../components/Starfield";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Send, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Prismo Lab" },
      { name: "description", content: "Contact Prismo Lab to start a brand identity, art direction, or digital project." },
      { property: "og:title", content: "Contact | Prismo Lab" },
      { property: "og:description", content: "Start a project with Prismo Lab." },
    ],
  }),
  component: Contact,
});

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block group">
      <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition group-focus-within:text-foreground">{label}</span>
      <input
        {...rest}
        className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-base outline-none transition placeholder:text-muted-foreground/55 focus:border-white/35 focus:bg-white/[0.04] focus:shadow-glow sm:text-lg"
      />
    </label>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const contactLinks = [
    {
      label: "Email",
      value: "hello@prismolab.studio",
      href: "mailto:hello@prismolab.studio",
      Icon: Mail,
    },
    {
      label: "WhatsApp",
      value: "+212 616-751971",
      href: "https://wa.me/212616751971",
      Icon: MessageCircle,
    },
  ];
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/prismo.lab/" },
    { label: "Pinterest", href: "https://www.pinterest.com/Prismolab/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hamzaelmanssouri" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-32 pt-36 sm:px-6 md:pt-40">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <Starfield count={80} />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Contact</p>
        <Reveal as="h1" className="mt-6 font-display text-[14vw] md:text-[10rem] leading-[0.85] tracking-tighter">
          Tell me<br />
          your <span className="text-prism italic font-light">vision.</span>
        </Reveal>

        <div className="mt-14 grid min-w-0 gap-10 md:mt-20 md:grid-cols-12 md:gap-12">
          <Reveal className="min-w-0 space-y-6 md:col-span-5">
            <div className="grid gap-4">
              {contactLinks.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex min-w-0 items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/30 hover:bg-white/[0.06] hover:shadow-glow sm:gap-5 sm:p-5"
                >
                  <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-foreground sm:h-11 sm:w-11">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
                      <span className="mt-1 block break-words font-display text-base leading-tight sm:text-xl">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition group-hover:rotate-45 group-hover:text-white" />
                </a>
              ))}
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <MapPin size={15} />
                Location
              </p>
              <p className="font-display text-lg sm:text-xl">Morocco &#9651; Worldwide</p>
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Elsewhere</p>
              <div className="grid gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-white/10 pb-3 text-lg transition last:border-b-0 last:pb-0 hover:text-prism"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} className="transition group-hover:rotate-45" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="min-w-0 md:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass relative min-w-0 overflow-hidden rounded-[2rem] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:p-8 md:p-10"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-prism opacity-80" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-prism opacity-10 blur-3xl" />
              <div className="relative mb-8 flex items-start justify-between gap-5 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Project signal</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/70">
                    Share the essentials. I will read the idea, then shape the next step around it.
                  </p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-foreground shadow-glow">
                  <Sparkles size={18} />
                </span>
              </div>

              <div className="relative grid gap-5 sm:grid-cols-2">
                <Field label="Your name" placeholder="Hamza" required />
                <Field label="Email" type="email" placeholder="you@studio.com" required />
              </div>
              <div className="relative mt-5">
                <Field label="Project type" placeholder="Brand, social, campaign..." />
              </div>
              <label className="relative mt-5 block group">
                <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition group-focus-within:text-foreground">Vision</span>
                <textarea
                  rows={5}
                  placeholder="Tell me what you are building, what it should feel like, and where it needs to live."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-base leading-relaxed outline-none transition placeholder:text-muted-foreground/55 focus:border-white/35 focus:bg-white/[0.04] focus:shadow-glow sm:text-lg"
                />
              </label>
              <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                  {sent ? "Message received. The signal is in the Lab." : "No long brief needed. A clear first note is enough."}
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] text-background transition hover:shadow-prism"
                >
                  {sent ? "Received" : "Send message"}
                  <Send size={14} className="transition group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
