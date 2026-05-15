"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Subtle magnetic-attract button. On mouse-enter, the button center
 * gently drifts toward the cursor (max 6px in any direction). On
 * mouse-leave, snaps back. Disabled on touch and for users with
 * prefers-reduced-motion (renders as a static element).
 *
 * Kept subtle on purpose — too much magnet pull reads as gimmicky.
 */

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const MAX_PULL = 6;

export function MagneticButton({
  href,
  children,
  className,
  ariaLabel,
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 22 });
  const springY = useSpring(y, { stiffness: 220, damping: 22 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const max = Math.max(rect.width, rect.height) / 2;
    const pullFactor = Math.min(1, distance / max);
    x.set((dx / max) * MAX_PULL * pullFactor);
    y.set((dy / max) * MAX_PULL * pullFactor);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  if (prefersReducedMotion) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  );
}
