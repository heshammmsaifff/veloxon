"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { projects } from "@/components/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

export default function LatestProjects() {
  const { lang } = useLang();
  // حالة لتخزين المشروع المختار لفتحه في المودال
  const [selectedProject, setSelectedProject] = useState(null);

  // جلب آخر 4 مشاريع
  const latestThree = projects.slice(-4).reverse();

  return (
    <section
      className="py-24 bg-brand-charcoal"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        {/* Header القسم */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {lang === "ar" ? (
                <>
                  أحدث{" "}
                  <span className="brand-gradient bg-clip-text rounded-2xl p-1">
                    أعمالنا
                  </span>
                </>
              ) : (
                <>
                  Our Latest{" "}
                  <span className="brand-gradient bg-clip-text rounded-2xl p-1">
                    Projects
                  </span>
                </>
              )}
            </h2>
            <p className="text-gray-400 text-lg font-light">
              {lang === "ar"
                ? "حلول رقمية مبتكرة صممت خصيصاً لتلبية احتياجات عملائنا وتحقيق أهدافهم."
                : "Innovative digital solutions tailored to meet our clients' needs and achieve their goals."}
            </p>
          </div>

          <Link
            href="/portfolio"
            className="text-brand-orange font-bold flex items-center gap-2 group border-b border-transparent hover:border-brand-orange transition-all pb-1"
          >
            {lang === "ar" ? "عرض كافة المشاريع" : "View All Projects"}
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestThree.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)} // عند الضغط يفتح المودال
              className="group relative cursor-pointer"
            >
              <div className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10">
                <img
                  src={project.images[0]}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-6 bg-white/[0.03] backdrop-blur-md rounded-[2rem] border border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {project.title[lang]}
                  </h3>
                  {/* <p className="text-gray-300 text-xs line-clamp-2 font-light">
                    {project.description[lang]}
                  </p> */}
                  <div className="mt-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white text-brand-charcoal group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- المودال (Modal) باستخدام Framer Motion --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* الخلفية المعتمة */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* حاوية المودال */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-brand-charcoal border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* زر الإغلاق */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-white/10 hover:bg-brand-orange text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* الجزء الخاص بالصور (يسار) */}
              <div className="w-full md:w-3/5 h-[300px] md:h-auto overflow-y-auto p-4 space-y-4 bg-black/20 custom-scrollbar">
                {selectedProject.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedProject.title[lang]} - ${idx}`}
                    className="w-full rounded-2xl object-cover border border-white/5 shadow-lg"
                  />
                ))}
              </div>

              {/* الجزء الخاص بالوصف (يمين) */}
              <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-2 block">
                    {lang === "ar" ? "تفاصيل المشروع" : "Project Details"}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    {selectedProject.title[lang]}
                  </h3>
                </div>

                {/* وصف إضافي للمودال */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                  {/* إذا كان عندك حقل longDescription استخدمه، وإلا استخدم الوصف العادي */}
                  {selectedProject.longDescription
                    ? selectedProject.longDescription[lang]
                    : selectedProject.description[lang]}
                </p>

                <div className="space-y-4">
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-charcoal rounded-2xl font-bold hover:bg-brand-orange hover:text-white transition-all w-full justify-center shadow-xl"
                  >
                    {lang === "ar" ? "معاينة الموقع المباشر" : "Live Preview"}
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
