"use client";

/**
 * Lightweight aurora gradient mesh — pure CSS animated blobs over a grid.
 * Cheap to render, respects reduced motion, no WebGL needed for the canvas.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora blobs */}
      <div className="absolute -left-[10%] top-[-10%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,var(--accent),transparent_60%)] opacity-30 blur-3xl [animation:var(--animate-aurora)]" />
      <div className="absolute right-[-5%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,var(--accent-2),transparent_60%)] opacity-25 blur-3xl [animation:var(--animate-aurora)] [animation-delay:-6s]" />
      <div className="absolute bottom-[-15%] left-[25%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,var(--accent-3),transparent_60%)] opacity-20 blur-3xl [animation:var(--animate-aurora)] [animation-delay:-12s]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
