import { LanguageProvider } from "@/components/language/LanguageProvider";
import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";

import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SOLENNECLUB | The Art of Walking Well",
  description:
    "A quiet luxury textile brand grounded in comfort, ritual, and silence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="de"
  className={`${cormorant.variable} ${mulish.variable}`}
>
      <body className="bg-[#f8f5ef] text-[#1A1918] antialiased">
  <LanguageProvider>
    <Navbar />
    {children}
    <Footer />
  </LanguageProvider>
</body>
    </html>
  );
}