"use client";

import { useLang } from "@/context/LangContext";
import Lottie from "lottie-react";
import techAnimation from "./website-design.json";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const { lang } = useLang();

  // إعدادات الحركة للعناصر النصية
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // تأخير بسيط بين ظهور كل عنصر
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative min-h-[90vh] mb-20 lg:min-h-screen flex items-center overflow-hidden bg-brand-charcoal pt-24 pb-12"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* تأثيرات الإضاءة الخلفية */}
      <div className="absolute top-[-5%] start-[-5%] w-[50%] h-[50%] rounded-full bg-brand-violet/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] end-[-5%] w-[40%] h-[40%] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* المحتوى النصي مع Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-start flex flex-col items-center lg:items-start"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-violet/30 bg-brand-violet/10 text-brand-violet-light text-xs md:text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2 me-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-violet"></span>
              </span>
              {lang === "ar" ? "مستقبل الويب هنا" : "The Future of Web is Here"}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] mb-6 tracking-tight text-white"
            >
              {lang === "ar" ? (
                <>
                  نحول أفكارك إلى <br />
                  <span className="inline-block py-1 rounded-2xl bg-clip-text p-2 brand-gradient">
                    واقع رقمي
                  </span>{" "}
                  مبهر
                </>
              ) : (
                <>
                  Turn your ideas into <br />
                  <span className="inline-block py-1 rounded-2xl bg-clip-text p-2 brand-gradient">
                    Digital Reality
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed font-light"
            >
              {lang === "ar"
                ? "في VELOXON، نصمم ونطور مواقع إلكترونية فائقة السرعة وعالية الأداء لتنقل عملك إلى المستوى التالي."
                : "At VELOXON, we build high-performance, ultra-fast websites designed to scale your business to the next level."}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href={"/contact"}
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-brand-orange/20 active:scale-95"
              >
                {lang === "ar" ? "ابدأ مشروعك الآن" : "Start Your Project"}
              </Link>

              <Link
                href={"/projects"}
                className="w-full sm:w-auto border border-white/10 hover:border-brand-violet/50 text-white px-10 py-4 rounded-xl font-bold transition-all bg-white/5 backdrop-blur-md hover:bg-white/10"
              >
                {lang === "ar" ? "رؤية أعمالنا" : "View Our Work"}
              </Link>
            </motion.div>
          </motion.div>

          {/* الجزء الخاص بالأنيميشن مع Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative order-first lg:order-last"
          >
            <div className="relative group w-full max-w-[300px] sm:max-w-[400px] lg:max-w-full">
              <div className="w-64 h-64 brand-gradient opacity-20 blur-3xl rounded-full absolute inset-0 m-auto pointer-events-none" />
              <Lottie
                animationData={techAnimation}
                loop={true}
                className="relative z-10 w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* الخطوط الجانبية التحريكية */}
      <div className="hidden xl:block absolute end-0 top-1/2 -translate-y-1/2 opacity-20">
        <div className="flex gap-3 px-10">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-64 bg-gradient-to-b from-transparent via-brand-violet to-transparent rounded-full"
          />
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="w-1.5 h-80 bg-gradient-to-b from-transparent via-brand-orange to-transparent mt-12 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
