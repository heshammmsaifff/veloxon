"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Building2,
  Phone,
  Mail,
  Layers,
  Wallet,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import Link from "next/link";

const PROJECT_TYPES = {
  ar: [
    "موقع شركة",
    "متجر إلكتروني",
    "موقع شخصي / بورتفوليو",
    "نظام ويب",
    "أخرى",
  ],
  en: [
    "Business Website",
    "E-commerce Store",
    "Personal / Portfolio",
    "Web System",
    "Other",
  ],
};

const BUDGETS = {
  ar: [
    "أقل من 500$",
    "500$ - 1000$",
    "1000$ - 3000$",
    "3000$ - 5000$",
    "أكثر من 5000$",
  ],
  en: [
    "Less than $500",
    "$500 - $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "More than $5,000",
  ],
};

export default function ContactPage() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          company: "",
          phone: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // ── Field config
  const fields = [
    {
      name: "name",
      label: isAr ? "الاسم الكامل" : "Full Name",
      type: "text",
      //   placeholder: isAr ? "محمد أحمد" : "John Doe",
      icon: User,
      required: true,
      col: "col-span-1",
    },
    {
      name: "company",
      label: isAr ? "اسم الشركة / النشاط" : "Company / Business Name",
      type: "text",
      //   placeholder: isAr ? "شركة النجاح للتجارة" : "Acme Corp",
      icon: Building2,
      required: true,
      col: "col-span-1",
    },
    {
      name: "phone",
      label: isAr ? "رقم الهاتف" : "Phone Number",
      type: "tel",
      //   placeholder: isAr ? "+20 100 000 0000" : "+1 (555) 000-0000",
      icon: Phone,
      required: true,
      col: "col-span-1",
    },
    {
      name: "email",
      label: isAr ? "البريد الإلكتروني" : "Email Address",
      type: "email",
      //   placeholder: isAr ? "example@email.com" : "you@company.com",
      icon: Mail,
      required: false,
      col: "col-span-1",
    },
  ];

  return (
    <main
      className="min-h-screen bg-brand-charcoal pt-32 pb-24 overflow-x-clip relative"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-brand-violet/10 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-4">
            {isAr ? "تواصل معنا" : "Get In Touch"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight mb-5">
            {isAr ? (
              <>
                لنبدأ{" "}
                <span className="brand-gradient rounded-2xl p-1 bg-clip-text italic">
                  مشروعك
                </span>
              </>
            ) : (
              <>
                Let's build{" "}
                <span className="brand-gradient rounded-2xl p-1 bg-clip-text italic">
                  together
                </span>
              </>
            )}
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
            {isAr
              ? "أخبرنا عن مشروعك وسنتواصل معك في أقرب وقت ممكن."
              : "Tell us about your project and we'll get back to you as soon as possible."}
          </p>
        </motion.div>

        {/* ── Form ── */}
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 px-8 rounded-[2rem] border border-white/10 bg-white/5"
          >
            <CheckCircle2 className="w-16 h-16 text-brand-orange mx-auto mb-6" />
            <h2 className="text-3xl font-black text-white mb-3">
              {isAr ? "تم الإرسال بنجاح!" : "Message Sent!"}
            </h2>
            <p className="text-gray-400 text-lg font-light mb-8">
              {isAr
                ? "شكراً لك، سنراجع طلبك ونتواصل معك قريباً."
                : "Thank you! We'll review your request and reach out soon."}
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-8 py-3 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              {isAr ? "إرسال رسالة أخرى" : "Send Another"}
            </button>
            <br />
            <Link
              href="/"
              className="inline-block px-8 mt-8 py-3 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all text-center"
            >
              {isAr ? "عودة للرئيسية" : "Home Page"}
            </Link>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 md:p-10 space-y-6"
          >
            {/* Text fields grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {fields.map(
                ({ name, label, type, placeholder, icon: Icon, required }) => (
                  <div key={name} className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-300">
                      {label}
                      {required && (
                        <span className="text-brand-orange ms-1">*</span>
                      )}
                    </label>
                    <div className="relative">
                      <Icon className="absolute top-1/2 -translate-y-1/2 start-4 w-4 h-4 text-gray-500 pointer-events-none" />
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder || ""}
                        required={required}
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-xl ps-11 pe-4 py-3 text-sm focus:outline-none focus:border-brand-orange/60 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Project Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-gray-500" />
                {isAr ? "نوع المشروع" : "Project Type"}
                <span className="text-brand-orange">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {(isAr ? PROJECT_TYPES.ar : PROJECT_TYPES.en).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setForm((p) => ({ ...p, projectType: type }))
                    }
                    className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all duration-200
                      ${
                        form.projectType === type
                          ? "bg-brand-orange border-brand-orange text-white"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                <Wallet className="w-4 h-4 text-gray-500" />
                {isAr ? "الميزانية التقريبية" : "Estimated Budget"}
                <span className="text-brand-orange">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {(isAr ? BUDGETS.ar : BUDGETS.en).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, budget: b }))}
                    className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all duration-200
                      ${
                        form.budget === b
                          ? "bg-brand-orange border-brand-orange text-white"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                      }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gray-500" />
                {isAr ? "تفاصيل إضافية" : "Additional Details"}
                <span className="text-gray-600 text-xs font-normal">
                  ({isAr ? "اختياري" : "optional"})
                </span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder={
                  isAr
                    ? "أي تفاصيل إضافية عن مشروعك، مراجع تعجبك، أو متطلبات خاصة..."
                    : "Any extra details about your project, design references, or special requirements..."
                }
                className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-brand-orange/60 focus:bg-white/8 transition-all duration-200"
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                {isAr
                  ? "حدث خطأ أثناء الإرسال، حاول مرة أخرى."
                  : "Something went wrong. Please try again."}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={
                status === "loading" || !form.projectType || !form.budget
              }
              className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-black text-base bg-brand-orange text-white hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {isAr ? "جاري الإرسال..." : "Sending..."}
                </>
              ) : (
                <>
                  {isAr ? "أرسل طلبك الآن" : "Send Your Request"}
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </main>
  );
}
