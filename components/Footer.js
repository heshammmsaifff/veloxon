"use client";

import React from "react";
import { useLang } from "@/context/LangContext";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";

const PHONE = "+201500866654";
const WHATSAPP_LINK = `https://wa.me/${PHONE.replace("+", "")}`;
const PHONE_LINK = `tel:${PHONE}`;
const FORMATTED_PHONE = "+20 150 086 6654";

const Footer = () => {
  const { lang } = useLang();

  const content = {
    ar: {
      tagline: "نبني المستقبل الرقمي.",
      description:
        "حلول تقنية عالية الأداء مدفوعة بالابتكار والسرعة. نحوّل أفكارك إلى تجارب رقمية استثنائية.",
      nav: {
        company: "الشركة",
        companyLinks: [
          { label: "الرئيسية", href: "#" },
          { label: "خدماتنا", href: "#" },
          { label: "أعمالنا", href: "#" },
          { label: "من نحن", href: "#" },
        ],
        support: "الدعم",
        supportLinks: [
          { label: "مركز المساعدة", href: "#" },
          { label: "سياسة الخصوصية", href: "#" },
          { label: "الشروط والأحكام", href: "#" },
        ],
      },
      contact: {
        title: "تواصل معنا",
        phone: "اتصل بنا",
        whatsapp: "واتساب",
        email: "البريد الإلكتروني",
        emailVal: "hello@veloxon.dev",
        location: "القاهرة، مصر",
      },
      rights: "جميع الحقوق محفوظة",
      // madeWith: "صُنع بـ",
    },
    en: {
      tagline: "We build the digital future.",
      description:
        "High-performance tech solutions driven by innovation and speed. We transform your ideas into exceptional digital experiences.",
      nav: {
        company: "Company",
        companyLinks: [
          { label: "Home", href: "#" },
          { label: "Services", href: "#" },
          { label: "Portfolio", href: "#" },
          { label: "About", href: "#" },
        ],
        support: "Support",
        supportLinks: [
          { label: "Help Center", href: "#" },
          { label: "Privacy Policy", href: "#" },
          { label: "Terms & Conditions", href: "#" },
        ],
      },
      contact: {
        title: "Get In Touch",
        phone: "Call Us",
        whatsapp: "WhatsApp",
        email: "Email Us",
        emailVal: "hello@veloxon.dev",
        location: "Cairo, Egypt",
      },
      rights: "All rights reserved",
      // madeWith: "Made with",
    },
  };

  const t = lang === "ar" ? content.ar : content.en;
  const isRtl = lang === "ar";

  return (
    <footer
      dir={isRtl ? "rtl" : "ltr"}
      className="relative bg-[var(--color-brand-surface)] text-white overflow-hidden font-sans"
    >
      {/* ── Ambient Glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #7c3aed 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Top Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          {/* Brand Column */}
          <div className="md:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              {/* <div
                className="w-9 h-9 rounded-xl shrink-0 shadow-lg shadow-violet-500/30"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #f97316)",
                }}
              /> */}
              <span className="text-2xl font-black tracking-tighter uppercase italic select-none">
                VELOXON
              </span>
            </div>

            {/* Tagline */}
            <p className="text-[var(--color-brand-orange)] font-semibold text-sm mb-3 tracking-wide">
              {t.tagline}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              {t.description}
            </p>

            {/* Social Row */}
            <div className="flex items-center gap-3">
              {/* <SocialIcon
                Icon={FaXTwitter}
                href="#"
                label="X / Twitter"
                cls="hover:bg-sky-500/20   hover:text-sky-400   hover:border-sky-500/40"
              /> */}
              {/* <SocialIcon
                Icon={FaLinkedinIn}
                href="#"
                label="LinkedIn"
                cls="hover:bg-blue-500/20  hover:text-blue-400  hover:border-blue-500/40"
              /> */}
              <SocialIcon
                Icon={FaGithub}
                href="#"
                label="GitHub"
                cls="hover:bg-white/10     hover:text-white     hover:border-white/30"
              />
              <SocialIcon
                Icon={FaInstagram}
                href="#"
                label="Instagram"
                cls="hover:bg-pink-500/20  hover:text-pink-400  hover:border-pink-500/40"
              />
            </div>
          </div>

          {/* Nav Columns */}
          <div className="md:col-span-2 md:col-start-6">
            <FooterNavGroup title={t.nav.company} links={t.nav.companyLinks} />
          </div>

          <div className="md:col-span-2">
            <FooterNavGroup title={t.nav.support} links={t.nav.supportLinks} />
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-[var(--color-brand-orange)] font-bold mb-6 uppercase tracking-widest text-xs">
              {t.contact.title}
            </h4>

            <div className="space-y-4">
              {/* Phone */}
              <ContactItem
                href={PHONE_LINK}
                Icon={FiPhone}
                label={t.contact.phone}
                value={FORMATTED_PHONE}
                accent="violet"
              />

              {/* WhatsApp — highlighted */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-4 py-3 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <FaWhatsapp size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] text-emerald-400/70 uppercase tracking-widest font-medium mb-0.5">
                    {t.contact.whatsapp}
                  </p>
                  <p className="text-emerald-300 font-semibold text-sm tracking-wide">
                    {FORMATTED_PHONE}
                  </p>
                </div>
                <HiArrowUpRight
                  size={14}
                  className="ms-auto text-emerald-500/50 group-hover:text-emerald-400 transition-colors"
                />
              </a>

              {/* Email */}
              <ContactItem
                href={`mailto:${t.contact.emailVal}`}
                Icon={FiMail}
                label={t.contact.email}
                value={t.contact.emailVal}
                accent="orange"
              />

              {/* Location */}
              <div className="flex items-center gap-3 px-1 pt-1">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-500">
                  <FiMapPin size={15} />
                </span>
                <span className="text-gray-500 text-sm">
                  {t.contact.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700/60 to-transparent mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-gray-400 font-semibold">VELOXON</span> —{" "}
              {t.rights}.
            </p>
            <p className="flex items-center gap-1.5">
              <span className="text-gray-400">VELOXON Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ── Sub-components ── */

const SocialIcon = ({ Icon, href, label, cls }) => (
  <a
    href={href}
    aria-label={label}
    className={`w-9 h-9 rounded-xl border border-gray-700/60 bg-gray-800/40 flex items-center justify-center text-gray-500 transition-all duration-300 ${cls}`}
  >
    <Icon size={16} />
  </a>
);

const FooterNavGroup = ({ title, links }) => (
  <div>
    <h4 className="text-[var(--color-brand-orange)] font-bold mb-5 uppercase tracking-widest text-xs">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={link.href}
            className="group text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="w-0 h-px bg-[var(--color-brand-violet-light)] transition-all duration-300 group-hover:w-3" />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ href, Icon, label, value, accent }) => {
  const colors = {
    violet: {
      bg: "bg-violet-500/10 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-500/40",
      icon: "bg-violet-500/20 text-violet-400",
      lbl: "text-violet-400/70",
      val: "text-gray-200",
    },
    orange: {
      bg: "bg-orange-500/10 border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40",
      icon: "bg-orange-500/20 text-orange-400",
      lbl: "text-orange-400/70",
      val: "text-gray-200",
    },
  };
  const c = colors[accent] ?? colors.violet;

  return (
    <a
      href={href}
      className={`group flex items-center gap-3 border rounded-xl px-4 py-3 transition-all duration-300 ${c.bg}`}
    >
      <span
        className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${c.icon}`}
      >
        <Icon size={16} />
      </span>
      <div className="min-w-0">
        <p
          className={`text-[10px] uppercase tracking-widest font-medium mb-0.5 ${c.lbl}`}
        >
          {label}
        </p>
        <p className={`font-semibold text-sm tracking-wide truncate ${c.val}`}>
          {value}
        </p>
      </div>
    </a>
  );
};

export default Footer;
