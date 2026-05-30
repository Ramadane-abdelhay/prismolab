import { motion } from "framer-motion";

/** Signature prism animation: white beam hits a triangular prism and explodes into rainbow light. */
export function PrismScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* incoming white beam */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="absolute top-1/2 left-0 h-px w-1/2 origin-left"
        style={{
          background: "linear-gradient(90deg, transparent, white 60%, white)",
          boxShadow: "0 0 20px 2px rgba(255,255,255,0.9), 0 0 40px 4px rgba(180,220,255,0.6)",
        }}
      />

      {/* prism triangle */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        viewBox="0 0 200 200"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] drop-shadow-[0_0_40px_rgba(160,200,255,0.5)]"
      >
        <defs>
          <linearGradient id="prismFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="50%" stopColor="rgba(180,220,255,0.10)" />
            <stop offset="100%" stopColor="rgba(120,140,255,0.20)" />
          </linearGradient>
          <linearGradient id="prismEdge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="100%" stopColor="rgba(140,180,255,0.4)" />
          </linearGradient>
        </defs>
        <polygon
          points="100,20 180,170 20,170"
          fill="url(#prismFace)"
          stroke="url(#prismEdge)"
          strokeWidth="1.2"
        />
      </motion.svg>

      {/* refracted rainbow rays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.6 }}
        className="absolute top-1/2 left-1/2 h-[125px] w-1/2 -translate-y-1/2 origin-left"
      >
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.85 }}
          transition={{ duration: 2, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 origin-left"
          style={{
            clipPath: "polygon(0 49.4%, 100% 0%, 100% 100%, 0 50.6%)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, oklch(0.85 0.16 210 / 0.8) 18%, oklch(0.88 0.22 140 / 0.72) 36%, oklch(0.92 0.18 90 / 0.7) 52%, oklch(0.82 0.18 65 / 0.68) 64%, oklch(0.70 0.28 340 / 0.7) 80%, oklch(0.65 0.25 290 / 0.62) 100%)",
            filter: "blur(6px) drop-shadow(0 0 28px rgba(150,210,255,0.55))",
          }}
        />
        {[
          { c: "oklch(0.85 0.16 210)", r: -14 },
          { c: "oklch(0.88 0.22 140)", r: -8 },
          { c: "oklch(0.92 0.18 90)", r: -2 },
          { c: "oklch(0.82 0.18 65)", r: 4 },
          { c: "oklch(0.70 0.28 340)", r: 10 },
          { c: "oklch(0.65 0.25 290)", r: 16 },
        ].map((b, i) => (
          <motion.span
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, delay: 1.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-1/2 block h-[2px] origin-left"
            style={{
              width: "100%",
              transform: `rotate(${b.r}deg)`,
              background: `linear-gradient(90deg, ${b.c}, transparent)`,
              filter: `drop-shadow(0 0 12px ${b.c})`,
            }}
          />
        ))}
      </motion.div>

      {/* soft bloom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(160,200,255,0.18), transparent 60%)",
        }}
      />
    </div>
  );
}
