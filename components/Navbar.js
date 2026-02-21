"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Globe, Zap, Plus } from "lucide-react";

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: lang === "ar" ? "الرئيسية" : "Home", href: "/", id: "01" },
    {
      name: lang === "ar" ? "أعمالنا" : "Portfolio",
      href: "/portfolio",
      id: "02",
    },
    { name: lang === "ar" ? "تواصل" : "Contact", href: "/contact", id: "03" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] pointer-events-none flex justify-center"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-[1400px] px-4 py-6 flex justify-center relative">
        <motion.nav
          initial={false}
          animate={{
            width: scrolled ? "max-content" : "100%",
            minWidth: scrolled ? "300px" : "100%",
            maxWidth: scrolled ? "750px" : "1200px",
            backgroundColor: scrolled
              ? "rgba(18, 18, 18, 0.9)"
              : "rgba(18, 18, 18, 0)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          }}
          className="pointer-events-auto flex items-center justify-between gap-4 px-4 py-2 md:px-8 md:py-3 rounded-full border border-white/10 shadow-2xl box-border transition-all duration-500"
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-brand-orange p-1.5 rounded-full group-hover:rotate-[360deg] transition-transform duration-700">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tighter hidden sm:block">
              VELOXON
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-white/[0.03] p-1.5 rounded-full border border-white/5 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-6 py-2 rounded-full text-lg  font-semibold text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-[2px] transition-all duration-300" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            >
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">
                {lang === "en" ? "AR" : "EN"}
              </span>
            </button>

            {/* <Link
              href="/contact"
              className="hidden sm:block px-5 py-2.5 bg-white text-brand-charcoal rounded-full text-xs md:text-sm font-bold hover:bg-brand-orange hover:text-white transition-all whitespace-nowrap"
            >
              {lang === "ar" ? "ابدأ مشروعك" : "Start Project"}
            </Link> */}

            {/* Burger Menu Button - Custom Modern Design */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden group flex flex-col items-end gap-[6px] p-3 rounded-full bg-white hover:bg-brand-orange transition-all duration-300"
            >
              <span className="w-6 h-[2px] bg-brand-charcoal group-hover:bg-white rounded-full transition-all duration-300" />
              <span className="w-4 h-[2px] bg-brand-charcoal group-hover:bg-white rounded-full transition-all duration-300" />
              <span className="w-5 h-[2px] bg-brand-charcoal group-hover:bg-white rounded-full transition-all duration-300" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 bg-brand-charcoal pointer-events-auto z-[110] flex flex-col overflow-hidden"
          >
            <div className="p-8 flex justify-between items-center">
              <span className="text-2xl font-black text-white italic tracking-tighter">
                VELOXON.
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-4 bg-white/5 rounded-full text-white rotate-45"
              >
                <Plus className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col justify-center flex-1 px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-6 py-6 border-b border-white/5"
                  >
                    <span className="text-brand-orange font-mono text-lg">
                      {link.id}
                    </span>
                    <span className="text-5xl font-black text-white group-hover:text-brand-orange transition-all">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
