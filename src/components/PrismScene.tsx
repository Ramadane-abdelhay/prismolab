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
        className="absolute top-1/2 left-0 h-[2px] w-1/2 origin-left md:w-[58%]"
        style={{
          background: "linear-gradient(90deg, transparent, white 60%, white)",
          boxShadow: "0 0 22px 3px rgba(255,255,255,0.9), 0 0 44px 5px rgba(180,220,255,0.6)",
        }}
      />

      {/* prism triangle */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        viewBox="0 0 200 200"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[44%] w-[44%] drop-shadow-[0_0_40px_rgba(160,200,255,0.5)] md:left-[58%] md:h-[46%] md:w-[46%] xl:h-[50%] xl:w-[50%]"
      >
        <defs>
          <linearGradient id="prismFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.48)" />
            <stop offset="42%" stopColor="rgba(210,232,255,0.16)" />
            <stop offset="100%" stopColor="rgba(120,140,255,0.20)" />
          </linearGradient>
          <linearGradient id="prismEdge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,1)" />
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

      {/* refracted rainbow light */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.68 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 2.4, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 h-[86px] w-[54%] -translate-y-1/2 origin-left md:left-[58%] md:h-[100px] md:w-[42%] xl:h-[108px]"
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(24px)" }}
          animate={{ opacity: 0.68, filter: "blur(18px)" }}
          transition={{ duration: 2.2, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0px 50%, 100% 5%, 100% 95%, 0px 52%)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(245,250,255,0.82) 11%, oklch(0.86 0.12 210 / 0.54) 24%, oklch(0.86 0.17 160 / 0.52) 38%, oklch(0.90 0.16 96 / 0.50) 52%, oklch(0.80 0.17 54 / 0.52) 66%, oklch(0.72 0.24 346 / 0.54) 81%, oklch(0.66 0.22 292 / 0.45) 94%, transparent 100%)",
            maskImage: "linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)",
            mixBlendMode: "screen",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.52 }}
          transition={{ duration: 1.5, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[-2.5rem] top-1/2 h-24 w-36 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse at left, rgba(255,255,255,0.96), rgba(226,241,255,0.46) 38%, transparent 72%)",
            filter: "blur(14px)",
            mixBlendMode: "screen",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[-1.5rem] top-1/2 h-16 w-16 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.95), rgba(255,255,255,0.32) 38%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      {/* soft bloom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(160,200,255,0.18), transparent 40%)",
        }}
      />
    </div>
  );
}
