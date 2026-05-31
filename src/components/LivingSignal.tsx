import { useEffect, useRef, useState } from "react";

export function LivingSignal() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const nextPoint = useRef(point);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (reduceMotion.matches || coarsePointer.matches) return;

    const onMove = (event: PointerEvent) => {
      nextPoint.current = { x: event.clientX, y: event.clientY };
      setActive(true);

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(() => {
          setPoint(nextPoint.current);
          frameRef.current = null;
        });
      }

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setActive(false), 900);
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 md:block"
      style={{
        opacity: active ? 0.72 : 0,
        transform: `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(${active ? 1 : 0.55}) rotate(${active ? 0 : -22}deg)`,
        transition: "opacity 420ms ease, transform 520ms var(--ease-cinematic)",
      }}
    >
      <img
        src="/images/symbol.svg"
        alt=""
        className="h-full w-full animate-signal-breathe object-contain"
        style={{
          filter:
            "drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 22px rgba(255,255,255,0.35))",
        }}
      />
    </div>
  );
}

export function SectionSignalObserver() {
  useEffect(() => {
    const labelSelector =
      "main p[class*='uppercase'][class*='tracking-[0.4em]'], footer p[class*='uppercase'][class*='tracking-[0.4em]']";
    const labels = new Set<HTMLElement>();
    let frameId = 0;

    const scheduleVisibleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        frameId = window.requestAnimationFrame(updateVisibleLabels);
      });
    };

    const collectLabels = () => {
      document.querySelectorAll<HTMLElement>(labelSelector).forEach((label) => {
        if (labels.has(label)) return;
        labels.add(label);
        const text = label.textContent ?? "";
        label.textContent = "";

        const symbol = document.createElement("img");
        symbol.src = "/images/symbol.svg";
        symbol.alt = "";
        symbol.setAttribute("aria-hidden", "true");
        symbol.className = "signal-label-symbol";

        const textSpan = document.createElement("span");
        textSpan.className = "signal-label-text";
        textSpan.textContent = text;

        label.append(symbol, textSpan);
        label.classList.add("signal-label");
        observer.observe(label);
      });
      scheduleVisibleUpdate();
    };

    const updateVisibleLabels = () => {
      labels.forEach((label) => {
        const rect = label.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.86 && rect.bottom > window.innerHeight * 0.08;
        label.classList.toggle("signal-label-active", isVisible);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => entry.target.classList.add("signal-label-active"));
            });
          } else {
            entry.target.classList.remove("signal-label-active");
          }
        });
      },
      { rootMargin: "-10% 0px -18% 0px", threshold: 0.2 },
    );

    const mutationObserver = new MutationObserver(collectLabels);

    collectLabels();
    window.setTimeout(collectLabels, 240);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", updateVisibleLabels, { passive: true });
    window.addEventListener("resize", updateVisibleLabels);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateVisibleLabels);
      window.removeEventListener("resize", updateVisibleLabels);
      labels.forEach((label) => {
        const text = label.querySelector(".signal-label-text")?.textContent ?? label.textContent ?? "";
        label.textContent = text;
        label.classList.remove("signal-label", "signal-label-active");
      });
    };
  }, []);

  return null;
}
