"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { easeOutSoft } from "@/lib/motion";

type Item = { id: string; title: string; content: React.ReactNode };

type AccordionProps = {
  items: Item[];
  defaultOpenId?: string;
  className?: string;
};

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <ul className={cn("divide-y divide-border", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <li key={item.id} className="py-2">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`acc-${item.id}`}
              className="flex w-full items-center justify-between gap-6 py-5 text-left text-xl font-medium text-fg"
            >
              <span>{item.title}</span>
              <span
                aria-hidden
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-transform",
                  isOpen && "rotate-45",
                )}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M7 1v12M1 7h12" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`acc-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: easeOutSoft }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-12 text-base text-fg-muted">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
