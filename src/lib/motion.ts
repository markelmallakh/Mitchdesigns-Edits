import type { Variants, Easing } from "framer-motion";

export const easeOutSoft: Easing = [0.22, 1, 0.36, 1];
export const easeInOutSoft: Easing = [0.65, 0, 0.35, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutSoft },
  },
};

export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});
