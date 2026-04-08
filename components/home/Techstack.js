"use client";

import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiVercel,
  SiDocker,
  SiFramer,
} from "react-icons/si";
import { Cpu } from "lucide-react";

const finalStack = [
  { name: "Next.js", color: "#ffffff", Icon: SiNextdotjs },
  { name: "React", color: "#61DAFB", Icon: SiReact },
  { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  { name: "Tailwind CSS", color: "#06B6D4", Icon: SiTailwindcss },
  { name: "Node.js", color: "#339933", Icon: SiNodedotjs },
  { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
  { name: "Framer Motion", color: "#BB4DFF", Icon: SiFramer },
  { name: "PostgreSQL", color: "#336791", Icon: SiPostgresql },
  { name: "Git", color: "#F05032", Icon: SiGit },
  { name: "Figma", color: "#F24E1E", Icon: SiFigma },
  { name: "Vercel", color: "#ffffff", Icon: SiVercel },
  { name: "Docker", color: "#2496ED", Icon: SiDocker },
];

// تكرار العناصر لضمان سلاسة الحركة
const row1 = [
  ...finalStack.slice(0, 6),
  ...finalStack.slice(0, 6),
  ...finalStack.slice(0, 6),
];
const row2 = [
  ...finalStack.slice(6),
  ...finalStack.slice(6),
  ...finalStack.slice(6),
];

export default function TechStack() {
  const { lang } = useLang();
  const isRtl = lang === "ar";

  return (
    <section
      className="py-24 bg-[#08080c] overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {isRtl ? (
                <>
                  التقنيات التي{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    نتميز بها
                  </span>
                </>
              ) : (
                <>
                  Tools We{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Master
                  </span>
                </>
              )}
            </h2>
            <p className="text-gray-400 text-lg font-light">
              {isRtl
                ? "نعتمد على أقوى الأدوات البرمجية لبناء تطبيقات سريعة، آمنة، وقابلة للتوسع."
                : "We leverage industry-leading tools to build fast, secure, and scalable applications."}
            </p>
          </div>

          <div className="shrink-0 rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-5 flex items-center gap-4">
            <Cpu className="text-cyan-400 w-8 h-8" />
            <div className={isRtl ? "text-right" : "text-left"}>
              <p className="text-2xl font-black text-white leading-none">
                {finalStack.length}+
              </p>
              <p className="text-gray-500 text-[10px] uppercase tracking-tighter mt-1">
                {isRtl ? "أداة احترافية" : "Expert Tools"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Tracks - Forced LTR to fix motion issues */}
      <div className="relative mb-6 flex flex-col gap-6" dir="ltr">
        <div className="relative">
          <MarqueeTrack items={row1} direction="left" speed={25} />
          <EdgeFade />
        </div>

        <div className="relative">
          <MarqueeTrack items={row2} direction="right" speed={30} />
          <EdgeFade />
        </div>
      </div>

      {/* Trust Badge */}
      <div className="container mx-auto px-6 mt-16">
        <div className="rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className={
              isRtl ? "text-center md:text-right" : "text-center md:text-left"
            }
          >
            <h4 className="text-white font-bold text-xl mb-2">
              {isRtl ? "جودة كود عالمية" : "World-Class Standards"}
            </h4>
            <p className="text-gray-500 text-sm max-w-lg">
              {isRtl
                ? "لا نستخدم إلا التقنيات المدعومة والمستقرة لضمان استمرارية مشروعك لسنوات."
                : "We only use stable, long-term supported technologies to ensure your project's longevity."}
            </p>
          </div>
          {/* Icons container also forced to a specific direction to prevent jank */}
          <div className="flex flex-row-reverse -space-x-3 hover:space-x-1 transition-all duration-500">
            {finalStack.slice(0, 5).map((tech, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-2xl bg-[#12121a] border border-white/10 flex items-center justify-center text-2xl shadow-2xl transition-transform hover:-translate-y-1"
                style={{ color: tech.color }}
              >
                <tech.Icon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeTrack({ items, direction, speed }) {
  const isLeft = direction === "left";

  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex gap-4 shrink-0 px-2"
        animate={{
          x: isLeft ? [0, "-33.33%"] : ["-33.33%", 0],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((tech, i) => (
          <TechCard key={i} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
}

function TechCard({ tech }) {
  return (
    <div className="group/card shrink-0 flex items-center gap-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 hover:bg-white/[0.06] px-6 py-4 transition-all duration-300 backdrop-blur-md cursor-default">
      <div
        className="text-3xl shrink-0 transition-transform duration-300 group-hover/card:scale-110"
        style={{
          color: tech.color,
          filter: `drop-shadow(0 0 8px ${tech.color}33)`,
        }}
      >
        <tech.Icon />
      </div>
      <span className="text-gray-400 font-medium text-sm group-hover/card:text-white transition-colors whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

function EdgeFade() {
  return (
    <>
      {/* ظلال خفيفة جداً (15% من العرض) وشفافة لضمان عدم وجود مساحات سوداء مزعجة */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#08080c] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#08080c] to-transparent z-10" />
    </>
  );
}
