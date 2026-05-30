import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { Starfield } from "../components/Starfield";
import { Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prismo Lab" },
      { name: "description", content: "Tell us your vision. Reach out to Prismo Lab to start a project." },
      { property: "og:title", content: "Contact — Prismo Lab" },
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
  return (
    <section className="relative min-h-screen pt-40 pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <Starfield count={80} />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">/ Contact</p>
        <Reveal as="h1" className="mt-6 font-display text-[14vw] md:text-[10rem] leading-[0.85] tracking-tighter">
          Tell me<br />
          your <span className="text-prism italic font-light">vision.</span>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Email</p>
              <a href="mailto:hello@prismolab.studio" className="text-2xl font-display hover:text-prism">hello@prismolab.studio</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Location</p>
              <p className="text-lg">Casablanca · Lisbon · Anywhere with a horizon</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Elsewhere</p>
              <div className="flex flex-col gap-2 text-lg">
                <a href="#" className="hover:text-prism">Instagram ↗</a>
                <a href="#" className="hover:text-prism">Behance ↗</a>
                <a href="#" className="hover:text-prism">LinkedIn ↗</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass rounded-3xl p-8 md:p-10 space-y-8"
            >
              <Field label="Your name" placeholder="Hamza" required />
              <Field label="Email" type="email" placeholder="you@studio.com" required />
              <Field label="Project type" placeholder="Brand identity, album cover…" />
              <label className="block">
                <span className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Vision</span>
                <textarea
                  rows={4}
                  placeholder="Describe the feeling, the world, the light…"
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
