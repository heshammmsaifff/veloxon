"use client";

import { useLang } from "@/context/LangContext";
import { projects } from "@/components/projectsData";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function PortfolioPage() {
  const { lang } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    // التعديل: overflow-x-clip هو البديل الأحدث والأفضل لـ overflow-x-hidden لمنع الـ scroll تماماً
    <main
      className="min-h-screen bg-brand-charcoal pt-32 pb-20 overflow-x-clip relative"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Background Glows - تم تصغيرها لضمان عدم تداخلها مع حدود الشاشة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl h-96 bg-brand-violet/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 box-border">
        {/* Header الصفحة */}
        <header className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4 text-brand-orange"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-xs md:text-sm">
              {lang === "ar" ? "معرض الأعمال" : "Our Showcase"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.15] md:leading-[1.1] tracking-tighter"
          >
            {lang === "ar" ? (
              <>
                <span className="block mb-2 md:mb-0">
                  نصيغ المستقبل، <br /> و نصنع
                </span>
                <span className="brand-gradient bg-clip-text rounded-2xl p-2 italic inline-block pb-2">
                  نجاحاتكم الرقمية
                </span>
              </>
            ) : (
              <>
                <span className="block mb-2 md:mb-0">
                  Crafting the future of
                </span>
                <span className="brand-gradient bg-clip-text rounded-2xl p-2 italic inline-block pb-2">
                  Digital Experiences
                </span>
              </>
            )}
          </motion.h1>
        </header>

        {/* شبكة المشاريع */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                href={project.link}
                target="_blank"
                className="group relative block h-[350px] md:h-auto md:aspect-[16/10] overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 box-border"
              >
                <img
                  src={project.images[0]}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent opacity-90" />

                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-5 md:p-8 bg-white/[0.03] backdrop-blur-xl rounded-[1.5rem] border border-white/10 transition-all duration-500">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight">
                      {project.title[lang]}
                    </h3>
                    <div className="bg-white text-brand-charcoal p-2 rounded-xl group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs md:text-base font-light line-clamp-2 md:line-clamp-none">
                    {project.description[lang]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
