"use client";

import React, { useState } from "react";
import { cn } from "@/lib/cn";
import { ChevronDown } from "@/components/icons/ChevronDown";

const COUNTRIES = [
  { value: "eg", flag: "🇪🇬", code: "+20",  label: "Egypt" },
  { value: "sa", flag: "🇸🇦", code: "+966", label: "Saudi Arabia" },
  { value: "ae", flag: "🇦🇪", code: "+971", label: "UAE" },
  { value: "kw", flag: "🇰🇼", code: "+965", label: "Kuwait" },
  { value: "qa", flag: "🇶🇦", code: "+974", label: "Qatar" },
  { value: "bh", flag: "🇧🇭", code: "+973", label: "Bahrain" },
  { value: "om", flag: "🇴🇲", code: "+968", label: "Oman" },
  { value: "jo", flag: "🇯🇴", code: "+962", label: "Jordan" },
  { value: "lb", flag: "🇱🇧", code: "+961", label: "Lebanon" },
  { value: "ma", flag: "🇲🇦", code: "+212", label: "Morocco" },
  { value: "tn", flag: "🇹🇳", code: "+216", label: "Tunisia" },
  { value: "dz", flag: "🇩🇿", code: "+213", label: "Algeria" },
  { value: "ly", flag: "🇱🇾", code: "+218", label: "Libya" },
  { value: "iq", flag: "🇮🇶", code: "+964", label: "Iraq" },
  { value: "gb", flag: "🇬🇧", code: "+44",  label: "United Kingdom" },
  { value: "us", flag: "🇺🇸", code: "+1",   label: "United States" },
  { value: "de", flag: "🇩🇪", code: "+49",  label: "Germany" },
  { value: "fr", flag: "🇫🇷", code: "+33",  label: "France" },
  { value: "ca", flag: "🇨🇦", code: "+1",   label: "Canada" },
  { value: "au", flag: "🇦🇺", code: "+61",  label: "Australia" },
] as const;

type CountryValue = (typeof COUNTRIES)[number]["value"];

function getCountry(v: CountryValue) {
  return COUNTRIES.find((c) => c.value === v)!;
}

type Props = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  invalid?: boolean;
  className?: string;
};

export function TelInput({ id, value, onChange, placeholder, invalid, className }: Props) {
  // Derive selected country + local number from stored value
  // Format stored: "<code> <number>", e.g. "+20 100 000 0000"
  const [selectedCountry, setSelectedCountry] = useState<CountryValue>(() => {
    const match = COUNTRIES.find((c) => value.startsWith(c.code + " ") || value === c.code);
    return match?.value ?? "eg";
  });

  const country = getCountry(selectedCountry);

  const localValue = value.startsWith(country.code)
    ? value.slice(country.code.length).trimStart()
    : value;

  function handleCountryChange(nextCountry: CountryValue) {
    setSelectedCountry(nextCountry);
    const nextCode = getCountry(nextCountry).code;
    onChange(localValue ? `${nextCode} ${localValue}` : nextCode);
  }

  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const number = e.target.value;
    onChange(number ? `${country.code} ${number}` : country.code);
  }

  return (
    <div
      className={cn(
        "flex h-11 w-full items-center rounded border border-grey-200 bg-bg transition-colors",
        "focus-within:border-fg",
        invalid && "border-orderbase-red",
        className,
      )}
    >
      {/* Country selector */}
      <div className="relative flex shrink-0 items-center gap-1.5 px-3">
        <span className="text-xl leading-none" aria-hidden>{country.flag}</span>
        <span className="text-base font-medium text-black">{country.code}</span>
        <ChevronDown size={14} className="text-fg-muted" />
        <select
          aria-label="Country code"
          value={selectedCountry}
          onChange={(e) => handleCountryChange(e.target.value as CountryValue)}
          className="absolute inset-0 h-full w-full opacity-0"
        >
          {COUNTRIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.flag} {c.label} ({c.code})
            </option>
          ))}
        </select>
      </div>

      {/* Divider */}
      <span className="h-5 w-px shrink-0 bg-grey-200" />

      {/* Number input */}
      <input
        id={id}
        type="tel"
        inputMode="tel"
        value={localValue}
        onChange={handleNumberChange}
        placeholder={placeholder ?? "100 000 0000"}
        className="h-full flex-1 bg-transparent px-3 text-base text-black outline-none placeholder:text-fg-muted"
      />
    </div>
  );
}

