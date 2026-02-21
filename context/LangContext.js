"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");

    if (savedLang) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      const initialLang = browserLang === "ar" ? "ar" : "en";

      setLang(initialLang);
      localStorage.setItem("appLang", initialLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("appLang", newLang);
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
