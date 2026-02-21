"use client";

import { useLang } from "@/context/LangContext";
import { useEffect, useState } from "react";

export default function LangSwitcher() {
  const { lang, toggleLang } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleLang}
      className="fixed top-1/5 -right-4 z-50 transform -translate-y-1/2 bg-brand-violet hover:bg-brand-violet-light text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 ease-in-out flex items-center gap-2 group border border-white/10"
    >
      <span className="font-bold text-sm tracking-widest pr-2 uppercase">
        {lang === "en" ? "ar" : "en"}
      </span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
        {lang === "en" ? "←" : "→"}
      </span>
    </button>
  );
}
