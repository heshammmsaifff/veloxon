"use client";

import React from "react";
import { useLang } from "@/context/LangContext";
// استيراد الأيقونات
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  const { lang } = useLang();

  const content = {
    ar: {
      description:
        "نحن نقدم حلولاً تقنية عالية الأداء تعتمد على الابتكار والسرعة.",
      linksTitle: "الروابط",
      supportTitle: "الدعم",
      newsletterTitle: "ابقَ على اطلاع",
      placeholder: "بريدك الإلكتروني",
      button: "إرسال",
      rights: "جميع الحقوق محفوظة",
      links: ["الرئيسية", "خدماتنا", "أعمالنا"],
      support: ["مركز المساعدة", "سياسة الخصوصية", "تواصل معنا"],
    },
    en: {
      description:
        "We provide high-performance tech solutions driven by innovation and speed.",
      linksTitle: "Links",
      supportTitle: "Support",
      newsletterTitle: "Stay Updated",
      placeholder: "Your Email",
      button: "Send",
      rights: "All rights reserved",
      links: ["Home", "Services", "Portfolio"],
      support: ["Help Center", "Privacy Policy", "Contact Us"],
    },
  };

  const t = lang === "ar" ? content.ar : content.en;

  return (
    <footer className="bg-[var(--color-brand-surface)] text-white border-t border-gray-800/50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* البراند */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg brand-gradient shrink-0 shadow-lg shadow-violet-500/20" />
              <span className="text-xl font-bold tracking-tighter uppercase italic">
                VELOXON
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* روابط ديناميكية */}
          <div>
            <h4 className="text-[var(--color-brand-orange)] font-bold mb-5 uppercase tracking-wider text-xs">
              {t.linksTitle}
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {t.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-violet-light)] transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[var(--color-brand-violet-light)]" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* دعم فني */}
          <div>
            <h4 className="text-[var(--color-brand-orange)] font-bold mb-5 uppercase tracking-wider text-sm">
              {t.supportTitle}
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {t.support.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-violet-light)] transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* النشرة الإخبارية */}
          {/* <div>
            <h4 className="text-[var(--color-brand-orange)] font-bold mb-5 uppercase tracking-wider text-sm">
              {t.newsletterTitle}
            </h4>
            <div className="relative group">
              <input
                type="email"
                placeholder={t.placeholder}
                className="bg-[var(--color-brand-charcoal)] border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-violet)] w-full transition-all"
              />
              <button className="absolute inset-y-1 ltr:right-1 rtl:left-1 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] px-4 rounded-lg transition-all flex items-center justify-center">
                <IoSend
                  className={lang === "ar" ? "rotate-180" : ""}
                  size={18}
                />
              </button>
            </div>
          </div> */}
        </div>

        <hr className="my-10 border-gray-800" />

        {/* الحقوق والأيقونات */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-xs tracking-wide order-2 md:order-1">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-medium">VELOXON</span>.{" "}
            {t.rights}.
          </p>

          <div className="flex gap-5 order-1 md:order-2">
            <SocialIcon
              Icon={FaXTwitter}
              href="#"
              hoverColor="hover:text-sky-400"
            />
            <SocialIcon
              Icon={FaLinkedinIn}
              href="#"
              hoverColor="hover:text-blue-500"
            />
            <SocialIcon
              Icon={FaGithub}
              href="#"
              hoverColor="hover:text-white"
            />
            <SocialIcon
              Icon={FaInstagram}
              href="#"
              hoverColor="hover:text-pink-500"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

// مكون فرعي للأيقونات لتجنب التكرار
const SocialIcon = ({ Icon, href, hoverColor }) => (
  <a
    href={href}
    className={`text-gray-500 ${hoverColor} transition-all duration-300 transform hover:scale-110`}
  >
    <Icon size={20} />
  </a>
);

export default Footer;
