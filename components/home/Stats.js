"use client";

import { useLang } from "@/context/LangContext";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// مكون فرعي للعداد الذكي
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0</span>;
};

export default function Stats() {
  const { lang } = useLang();

  const stats = [
    {
      id: 1,
      value: 50,
      suffix: "+",
      label: lang === "ar" ? "مشروع ناجح" : "Projects Completed",
    },
    {
      id: 2,
      value: 95,
      suffix: "%",
      label: lang === "ar" ? "رضا العملاء" : "Client Satisfaction",
    },
    {
      id: 3,
      value: 24,
      suffix: "/7",
      label: lang === "ar" ? "دعم فني" : "Expert Support",
    },
    {
      id: 4,
      value: 100,
      suffix: "%",
      label: lang === "ar" ? "أداء فائق" : "Ultra Performance",
    },
  ];

  return (
    <section
      className="relative z-20 -mt-12 mb-28 container mx-auto px-6"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Container الرئيسي بتأثير Glassmorphism معزز */}
      <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
        {/* لمسة جمالية: شعاع ضوء خفي خلف الكروت */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-violet/50 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={stat.id}
              className={`relative flex flex-col items-center justify-center text-center px-4 
                ${index !== stats.length - 1 ? "lg:border-e lg:border-white/10" : ""}`}
            >
              {/* الرقم بستايل الـ Badge اللي طلبته */}
              <div className="mb-4 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-black rounded-2xl p-1 brand-gradient leading-none flex items-center justify-center min-w-[3rem]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>

              {/* النص الوصفي */}
              <span className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold opacity-80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
