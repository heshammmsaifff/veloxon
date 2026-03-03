import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LangProvider } from "../context/LangContext";
import Navbar from "@/components/Navbar"; // استيراد الناف بار الجديد
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

export const metadata = {
  title: {
    default: "VELOXON | Digital Solutions",
    template: "%s | VELOXON",
  },
  description:
    "Turn your ideas into reality, taking your business to the next level with high-performance web solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${ibmPlexArabic.variable} font-sans antialiased bg-brand-charcoal text-white`}
      >
        <LangProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
