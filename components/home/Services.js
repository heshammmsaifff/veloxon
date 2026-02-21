"use client";

import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  MousePointerClick,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const { lang } = useLang();

  const solutions = [
    {
      icon: <Zap className="w-10 h-10 text-brand-orange" />,
      title:
        lang === "ar"
          ? "تجربة مستخدم بلا انتظار"
          : "Instant Customer Gratification",
      desc:
        lang === "ar"
          ? "ثانية واحدة قد تكلفك عميلاً. نمنحك سرعة تجعل تصفح موقعك أسرع من تفكير منافسيك."
          : "A single second costs clients. We provide speed that outpaces your competitors' thoughts.",
      gridSpan: "md:col-span-2 lg:col-span-2",
      color: "from-brand-orange/20",
    },
    {
      icon: <MousePointerClick className="w-10 h-10 text-brand-violet" />,
      title:
        lang === "ar" ? "تصميم يحول الزوار لشركاء" : "Conversion-First Design",
      desc:
        lang === "ar"
          ? "لا نصمم مواقع جميلة فقط، بل نصمم رحلة تقنع العميل بالنقر على زر الشراء."
          : "We don't just design pretty sites; we craft journeys that persuade clients to click 'Buy'.",
      gridSpan: "md:col-span-2 lg:col-span-1",
      color: "from-brand-violet/20",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-orange" />,
      title:
        lang === "ar" ? "هيبة رقمية لا تُقهر" : "Unbeatable Digital Authority",
      desc:
        lang === "ar"
          ? "موقعك هو واجهة شركتك. نبني لك حصناً رقمياً يجمع بين الأمان المطلق والفخامة البصرية."
          : "Your site is your storefront. We build a digital fortress blending absolute security with luxury.",
      gridSpan: "md:col-span-2 lg:col-span-1",
      color: "from-brand-orange/10",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-brand-violet" />,
      title: lang === "ar" ? "الظهور في الصدارة" : "Dominating the First Page",
      desc:
        lang === "ar"
          ? "نجهز موقعك ليكون الصديق المفضل لمحركات البحث، لتجدك عملائك قبل أن يبحثوا عن غيرك."
          : "We prep your site to be Google's favorite, ensuring clients find you before they see anyone else.",
      gridSpan: "md:col-span-2 lg:col-span-2",
      color: "from-brand-violet/10",
    },
  ];

  return (
    <section
      className="py-32 bg-brand-charcoal relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Marketing Header */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-brand-orange" />
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">
              {lang === "ar" ? "لماذا فيلوكسون؟" : "Why VELOXON?"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.2] sm:leading-tight tracking-tight"
          >
            {lang === "ar" ? (
              <>
                <span className="block mb-2">لا نبني مواقع فقط..</span>
                <span className="brand-gradient bg-clip-text rounded-2xl md:rounded-3xl p-1 md:p-2 inline-block">
                  نصنع مستقبلك الرقمي
                </span>
              </>
            ) : (
              <>
                <span className="block mb-2">
                  We don't just build websites..
                </span>
                <span className="brand-gradient bg-clip-text rounded-2xl md:rounded-3xl p-1 md:p-2 inline-block">
                  We engineer your growth
                </span>
              </>
            )}
          </motion.h2>
        </div>

        {/* Strategic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${item.gridSpan} group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 hover:border-white/20 transition-all duration-500`}
            >
              {/* Animated Gradient Glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />

              <div className="relative z-10">
                <div className="mb-8 p-3 inline-block bg-white/5 rounded-2xl border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Layers className="w-32 h-32 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-[0.4em]">
            {lang === "ar"
              ? "هل أنت مستعد لتكون الاستثناء؟"
              : "Ready to be the exception?"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-white font-bold group"
          >
            <span className="relative border-b-2 border-brand-orange pb-1 transition-all duration-300">
              {lang === "ar"
                ? "اكتشف كيف يمكننا مساعدتك"
                : "Explore our strategic approach"}

              {/* حركة الخط السفلي عند الـ Hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>

            <span
              className={`bg-brand-orange p-2 rounded-full transition-transform duration-300 
    ${lang === "ar" ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"}`}
            >
              <Zap className="w-4 h-4 fill-white text-white" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
