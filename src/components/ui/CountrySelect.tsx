"use client";

import { cn } from "@/lib/cn";
import { ChevronDown } from "@/components/icons/ChevronDown";

const COUNTRY_FLAGS: Record<string, string> = {
  "egypt":         "🇪🇬",
  "saudi-arabia":  "🇸🇦",
  "uae":           "🇦🇪",
  "kuwait":        "🇰🇼",
  "qatar":         "🇶🇦",
  "bahrain":       "🇧🇭",
  "oman":          "🇴🇲",
  "jordan":        "🇯🇴",
  "lebanon":       "🇱🇧",
  "morocco":       "🇲🇦",
  "tunisia":       "🇹🇳",
  "algeria":       "🇩🇿",
  "libya":         "🇱🇾",
  "iraq":          "🇮🇶",
  "uk":            "🇬🇧",
  "us":            "🇺🇸",
  "germany":       "🇩🇪",
  "france":        "🇫🇷",
  "canada":        "🇨🇦",
  "australia":     "🇦🇺",
  "other":         "🌍",
};

type Option = { label: string; value: string };

type Props = {
  id?: string;
  value: string;
  options: readonly Option[];
  onChange: (value: string) => void;
  invalid?: boolean;
  className?: string;
};

export function CountrySelect({ id, value, options, onChange, invalid, className }: Props) {
  const selected = options.find((o) => o.value === value) ?? options[0];
  const flag = COUNTRY_FLAGS[selected?.value] ?? "🌍";

  return (
    <div className={cn("relative", className)}>
      {/* Visual layer */}
      <div
        className={cn(
          "pointer-events-none flex h-11 w-full items-center gap-2 rounded border border-grey-200 bg-bg px-3",
          invalid && "border-orderbase-red",
        )}
      >
        <span className="text-xl leading-none" aria-hidden>{flag}</span>
        <span className="flex-1 text-base text-black">{selected?.label}</span>
        <ChevronDown size={16} className="text-fg-muted" />
      </div>

      {/* Native select overlaid for interaction */}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 h-full w-full opacity-0"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
