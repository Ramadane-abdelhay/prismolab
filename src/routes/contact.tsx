import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { Starfield } from "../components/Starfield";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Prismo Lab" },
      { name: "description", content: "Tell us your vision. Reach out to Prismo Lab to start a project." },
      { property: "og:title", content: "Contact - Prismo Lab" },
      { property: "og:description", content: "Tell us your vision." },
    ],
  }),
  component: Contact,
});

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block group">
      <span className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">{label}</span>
      <input
        {...rest}
        className="w-full bg-transparent border-b border-white/15 py-3 outline-none text-lg focus:border-transparent transition"
        style={{ borderImage: "var(--gradient-prism) 1" }}
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
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Contact</p>
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
              className="glass min-w-0 space-y-8 rounded-3xl p-5 sm:p-8 md:p-10"
            >
              <Field label="Your name" placeholder="Your name" required />
              <Field label="Email" type="email" placeholder="you@studio.com" required />
              <Field label="Project type" placeholder="Brand identity, social identity, campaign..." />
              <label className="block">
                <span className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Vision</span>
                <textarea
                  rows={4}
                  placeholder="Describe the feeling, the world, the light..."
                  className="w-full bg-transparent border-b border-white/15 py-3 outline-none text-lg focus:border-white/60 resize-none"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.25em] hover:shadow-prism transition"
              >
                {sent ? "Transmission received" : "Send transmission"}
                <Send size={14} className="group-hover:translate-x-1 transition" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
