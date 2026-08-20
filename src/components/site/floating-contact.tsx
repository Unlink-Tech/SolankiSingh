"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, Phone, X } from "lucide-react";

const PHONE_DISPLAY = "+91 98107 79908";
const PHONE_HREF = "tel:+919810779908";
const EMAIL = "solankisinghco@gmail.com";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="w-72 origin-bottom-right overflow-hidden rounded-2xl border border-border bg-background shadow-2"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="text-sm font-semibold text-text-tertiary">
                Get in touch
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close contact panel"
                className="flex size-7 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-surface-muted hover:text-text-tertiary"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col gap-1 p-2">
              <Link
                href={PHONE_HREF}
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-surface-muted"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-muted text-surface-strong transition-colors duration-150 group-hover:bg-surface-strong group-hover:text-text-inverse">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs text-text-primary">Call us</span>
                  <span className="text-sm font-medium text-text-tertiary">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </Link>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-surface-muted"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-muted text-surface-strong transition-colors duration-150 group-hover:bg-surface-strong group-hover:text-text-inverse">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs text-text-primary">Email us</span>
                  <span className="text-sm font-medium break-all text-text-tertiary">
                    {EMAIL}
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Show contact options"}
        aria-expanded={open}
        className="flex size-13 items-center justify-center rounded-full bg-surface-strong text-text-inverse shadow-2 transition-token transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-strong-hover hover:shadow-xl active:translate-y-0"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            {open ? (
              <X className="size-5.5" aria-hidden="true" />
            ) : (
              <MessageCircle className="size-5.5" aria-hidden="true" />
            )}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
