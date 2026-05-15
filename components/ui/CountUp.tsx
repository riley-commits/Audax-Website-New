"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animated number that counts up to the target value when scrolled into view.
 *
 * Sentinel pattern: count=null until in-view, so SSR + pre-hydration render
 * the final `display` string. This keeps SEO + no-JS users seeing real
 * numbers, not placeholder zeros.
 *
 * - prefers-reduced-motion: skip animation, show final display string.
 * - Once-in-view trigger; doesn't re-animate on re-scroll.
 */
export function CountUp({
  value,
  display,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  className,
}: {
  /** Numeric target (e.g. 50, 98) */
  value: number;
  /** SSR/no-JS fallback string with formatting applied (e.g. "50+", "98%") */
  display: string;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || prefersReducedMotion) return;
    setCount(0);
    const steps = 50;
    let step = 0;
    const id = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(eased * value);
      if (step >= steps) {
        setCount(value);
        clearInterval(id);
      }
    }, durationMs / steps);
    return () => clearInterval(id);
  }, [inView, prefersReducedMotion, value, durationMs]);

  let rendered: string;
  if (count === null || prefersReducedMotion) {
    rendered = display;
  } else {
    const formatted =
      value % 1 !== 0
        ? count.toFixed(count >= value ? 1 : 0)
        : Math.round(count).toLocaleString();
    rendered = `${prefix}${formatted}${suffix}`;
  }

  return (
    <span ref={ref} className={className}>
      {rendered}
    </span>
  );
}
