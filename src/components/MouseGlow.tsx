import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const h = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", h);
    return () => window.removeEventListener("pointermove", h);
  }, []);
  return (
    <div
      className="theme-mouse-glow pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(141, 92, 255, 0.12), transparent 50%)`,
      }}
    />
  );
}
