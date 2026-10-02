"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileExt(name: string): string {
  return (name.split(".").pop() ?? "FILE").toUpperCase();
}

const EXT_COLORS: Record<string, string> = {
  PDF: "#fa3747",
  PNG: "#2196f3",
  JPG: "#2196f3",
  JPEG: "#2196f3",
};

// ─── File icon ───────────────────────────────────────────────────────────────

function FileIcon({ ext }: { ext: string }) {
  const color = EXT_COLORS[ext] ?? "#878787";
  return (
    <div className="relative shrink-0" style={{ width: 40, height: 40 }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0.75H20.5146C21.907 0.75 23.242 1.30354 24.2266 2.28809L33.7119 11.7734C34.6965 12.758 35.25 14.093 35.25 15.4854V34C35.25 36.8995 32.8995 39.25 30 39.25H10C7.10051 39.25 4.75 36.8995 4.75 34V6C4.75 3.10051 7.10051 0.75 10 0.75Z" fill="white" stroke="#D1D1D1" strokeWidth="1.5" />
        <path d="M23 1V9C23 11.2091 24.7909 13 27 13H35" stroke="#D1D1D1" strokeWidth="1.5" />
      </svg>
      <span
        className="absolute bottom-0 left-0 flex items-center rounded px-1 py-0.5 text-white"
        style={{ fontSize: 9, fontWeight: 600, background: color, lineHeight: 1 }}
      >
        {ext}
      </span>
    </div>
  );
}

// ─── Upload card ─────────────────────────────────────────────────────────────

type CardProps = {
  file: File;
  onRemove: () => void;
};

function UploadCard({ file, onRemove }: CardProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const DURATION = 1400; // ms

  useEffect(() => {
    setProgress(0);
    setDone(false);
    startRef.current = null;

    function tick(now: number) {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [file]);

  const ext = getFileExt(file.name);
  const sizeLabel = formatBytes(file.size);

  return (
    <div className="rounded-xl border border-border bg-white shadow-sm">
      <div className="flex items-center gap-3 pl-3.5 pr-4 pt-4 pb-4">
        {/* File icon */}
        <FileIcon ext={ext} />

        {/* Text */}
        <div className="min-w-0 flex-1 space-y-1">
          <p className="truncate text-sm font-medium text-black">{file.name}</p>
          <div className="flex items-center gap-1 text-xs text-fg-muted">
            <span>{sizeLabel}</span>
            <span>∙</span>
            {done ? (
              <span className="flex items-center gap-1">
                {/* Green check */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="7" fill="#1fc06b" />
                  <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-black">Completed</span>
              </span>
            ) : (
              <span className="flex items-center gap-1">
                {/* Blue spinning loader */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="animate-spin"
                >
                  <circle cx="7" cy="7" r="5.5" stroke="#d1d1d1" strokeWidth="2" />
                  <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-black">Uploading…</span>
              </span>
            )}
          </div>
        </div>

        {/* Cancel / remove */}
        <button
          type="button"
          aria-label="Remove file"
          onClick={onRemove}
          className="shrink-0 text-fg-muted transition-colors hover:text-black cursor-pointer"
        >
          {done ? (
            /* Trash icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#878787" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="#878787" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9.5 16.5L9.5 10.5" stroke="#878787" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M14.5 16.5L14.5 10.5" stroke="#878787" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

          ) : (
            /* X icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5L5 19M5 5L19 19" stroke="#878787" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          )}
        </button>
      </div>

      {/* Progress bar — hidden when done */}
      {!done && (
        <div className="mx-3.5 mb-4 h-1.5 overflow-hidden rounded-full bg-grey-200">
          <motion.div
            className="h-full rounded-full bg-space-grey"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0 }} // driven by rAF, no extra easing
          />
        </div>
      )}
    </div>
  );
}

// ─── Drop zone ───────────────────────────────────────────────────────────────

type Props = {
  helperText?: string;
  uploadLabel: string;
  currentFile: File | null;
  maxFileSizeMb?: number;
  acceptedFileTypes?: readonly string[];
  error?: string;
  onChange: (file: File | null) => void;
};

export function FileUpload({
  helperText,
  uploadLabel,
  currentFile,
  maxFileSizeMb,
  acceptedFileTypes,
  error,
  onChange,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="space-y-3">
      {currentFile ? (
        <UploadCard file={currentFile} onRemove={() => onChange(null)} />
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "grid min-h-[200px] w-full place-items-center rounded-card-sm border border-dashed border-grey-500 px-6 py-8 text-center transition-colors cursor-pointer",
            "hover:bg-bg-alt",
            error && "border-orderbase-red",
          )}
        >
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <path d="M11.9998 12.5274L15.8185 16.3452L14.545 17.6187L12.8998 15.9735V21H11.0998V15.9717L9.45461 17.6187L8.18111 16.3452L11.9998 12.5274ZM11.9998 3C13.5451 3.00007 15.0365 3.568 16.1904 4.59581C17.3443 5.62361 18.0803 7.03962 18.2584 8.5746C19.3782 8.87998 20.3552 9.56919 21.0184 10.5218C21.6816 11.4744 21.989 12.6297 21.8869 13.786C21.7847 14.9422 21.2794 16.0257 20.4594 16.8472C19.6394 17.6687 18.5567 18.1759 17.4007 18.2802V16.4676C17.8149 16.4085 18.2131 16.2674 18.5721 16.0527C18.9312 15.8379 19.2439 15.5539 19.4919 15.217C19.74 14.8801 19.9184 14.4972 20.0169 14.0906C20.1153 13.6839 20.1318 13.2618 20.0653 12.8488C19.9989 12.4357 19.8508 12.0401 19.6298 11.6849C19.4087 11.3297 19.1191 11.0221 18.7779 10.78C18.4367 10.538 18.0506 10.3663 17.6424 10.2751C17.2341 10.1838 16.8117 10.1748 16.3999 10.2486C16.5409 9.5924 16.5332 8.91297 16.3776 8.2601C16.222 7.60722 15.9223 6.99743 15.5004 6.47538C15.0786 5.95333 14.5454 5.53225 13.9397 5.24298C13.3341 4.9537 12.6714 4.80357 12.0003 4.80357C11.3291 4.80357 10.6664 4.9537 10.0608 5.24298C9.45515 5.53225 8.92189 5.95333 8.50007 6.47538C8.07825 6.99743 7.77854 7.60722 7.62291 8.2601C7.46728 8.91297 7.45966 9.5924 7.60061 10.2486C6.7795 10.0944 5.93076 10.2727 5.24112 10.7443C4.55147 11.2159 4.0774 11.9421 3.92321 12.7632C3.76901 13.5843 3.94731 14.433 4.41889 15.1227C4.89047 15.8123 5.6167 16.2864 6.43781 16.4406L6.59981 16.4676V18.2802C5.44371 18.1761 4.36097 17.669 3.54083 16.8476C2.72068 16.0261 2.2153 14.9426 2.11301 13.7863C2.01073 12.6301 2.31804 11.4747 2.98124 10.522C3.64444 9.56934 4.62134 8.88005 5.74121 8.5746C5.91914 7.03954 6.65507 5.62342 7.80903 4.59558C8.96298 3.56774 10.4545 2.99988 11.9998 3Z" fill="#07020D" />
            </svg>
            <span className="mt-5 block text-base font-medium">
              {helperText}
            </span>
            <span className="mt-2 block text-sm text-fg-muted">
              JPEG, PNG and PDF up to {maxFileSizeMb ?? 50} MB.
            </span>
            <span className="mt-6 inline-flex h-9 items-center rounded-full border border-fg px-5 text-sm">
              {uploadLabel}
            </span>
          </span>
        </button>
      )}

      <input
        ref={fileInputRef}
        type="file"
        className="sr-only"
        accept={acceptedFileTypes?.join(",")}
        onChange={(event) => {
          onChange(event.target.files?.[0] ?? null);
          // reset input so same file can be re-selected
          event.target.value = "";
        }}
      />

      {error ? (
        <p className="text-sm text-orderbase-red">{error}</p>
      ) : null}
    </div>
  );
}
