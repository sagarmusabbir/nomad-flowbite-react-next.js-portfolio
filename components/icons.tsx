"use client";
import {
  PiMoonBold,
  PiRows,
  PiRowsBold,
  PiRowsLight,
  PiSunBold,
} from "react-icons/pi";

export default function MenuBar() {
  return (
    <PiRows className="w-6 h-6 sm:w-9 sm:h-9 shrink-0 fill-gray-800 dark:fill-slate-200" />
  );
}

export function MoonIcon() {
  return (
    <PiMoonBold className="w-6 h-6 sm:w-9 sm:h-9 shrink-0 fill-gray-800 dark:fill-slate-200" />
  );
}

export function SunIcon() {
  return (
    <PiSunBold className="w-6 h-6 sm:w-9 sm:h-9 shrink-0 fill-gray-800 dark:fill-slate-200" />
  );
}
