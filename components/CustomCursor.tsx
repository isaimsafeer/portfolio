"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [role='button'], input, textarea"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [visible]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-violet-500/60 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: hovering ? 1.6 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 160, damping: 16, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-violet-500 pointer-events-none z-[9999]"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
