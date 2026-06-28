"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";

/** Spotlight cursor — desktop / fine-pointer only. */
export function Cursor() {
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (!isFinePointer) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(
        Boolean(target.closest("a, button, [role='button'], input, textarea")),
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isFinePointer, x, y]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      aria-hidden
      style={{ translateX: springX, translateY: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[70] -ml-4 -mt-4 hidden md:block"
    >
      <motion.div
        animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.25 : 0.5 }}
        transition={{ duration: 0.2 }}
        className="h-8 w-8 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)]"
      />
    </motion.div>
  );
}
