"use client";

import { useLang } from "@/context/LangContext";
import { projects } from "@/components/projectsData";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LatestProjects() {
  const { lang } = useLang();

  // جلب آخر 3 مشاريع مضافة
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestThree.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* الكارت بالكامل أصبح رابط الآن */}
              <Link
                href={project.link}
                target="_blank"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10"
              >
                {/* صورة المشروع */}
                <img
                  src={project.images[0]}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-100"
                />

                {/* الـ Overlay الأساسي */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent opacity-80" />

                {/* حاوية النصوص الزجاجية */}
                <div className="absolute bottom-4 left-4 right-4 p-6 bg-white/[0.03] backdrop-blur-md rounded-[2rem] border border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title[lang]}
                  </h3>

                  <p className="text-gray-300 text-xs md:text-sm mb-5 line-clamp-2 font-light leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* استبدلنا الـ Link هنا بـ div عادي واخد نفس الستايل عشان الـ HTML ميعملش Error */}
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white text-brand-charcoal group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
