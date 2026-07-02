"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/LanguageProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
const { language, setLanguage } = useLanguage();
const [bagCount, setBagCount] = useState(0);

useEffect(() => {
  const updateBagCount = () => {
  try {
    const rawBag = window.localStorage.getItem("solenneclub_bag");
    const bagItems = rawBag ? JSON.parse(rawBag) : [];

    const count = Array.isArray(bagItems)
      ? bagItems.reduce(
          (total, item) => total + Number(item.quantity || 0),
          0
        )
      : 0;

    setBagCount(count);
  } catch {
    setBagCount(0);
  }
};

  updateBagCount();

  window.addEventListener("storage", updateBagCount);
  window.addEventListener("solenneclub-bag-updated", updateBagCount);

  return () => {
    window.removeEventListener("storage", updateBagCount);
    window.removeEventListener("solenneclub-bag-updated", updateBagCount);
  };
}, []);

  const navLinks = [
    { name: "SHOP", href: "/shop" },
    { name: "JOURNAL", href: "/journal" },
    { name: "MATERIALS", href: "/materials" },
    { name: "CARE", href: "/care" },
    { name: "PHILOSOPHY", href: "/philosophy" },
  ];

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      
      {/* Announcement Bar */}
      <div className="h-[24px] bg-[#e7ded2] text-center border-b border-black/5">
        <p className="pt-[4px] font-sans text-[11px] font-light tracking-[0.08em] text-black/60">
          Complimentary worldwide shipping on orders over $200.
        </p>
      </div>

      {/* Navbar */}
      <header className="bg-[#f8f5ef]">
        <div
  className="relative flex h-[86px] items-center justify-between border-b border-black/5 px-10"
  style={{
    width: "calc(100vw - 96px)",
    maxWidth: "1420px",
    margin: "0 auto",
  }}
>

          {/* Logo */}
          <Link
  href="/"
  className="ml-8 font-serif text-[24px] font-light tracking-[0.18em] text-[#1b1b1b] leading-none"
>
            SOLENNECLUB
            <span className="align-top text-[10px] ml-[2px]">®</span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-[11px] font-light tracking-[0.28em] transition-all duration-300 ${
                  pathname === link.href
                    ? "text-black"
                    : "text-black/65 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

<Link
  href="/cart"
  className="absolute left-1/2 -translate-x-1/2 font-sans text-[11px] font-light tracking-[0.28em] text-black/65 transition hover:text-black"
>
  BAG ({bagCount})
</Link>

{/* Right Side */}
<div className="flex items-center gap-8">
  <div className="flex items-center gap-2 font-sans text-[11px] font-light uppercase tracking-[0.28em]">
  <button
    type="button"
    onClick={() => setLanguage("de")}
    className={`transition hover:text-black ${
      language === "de" ? "text-black" : "text-black/35"
    }`}
  >
    DE
  </button>

  <span className="text-black/25">/</span>

  <button
    type="button"
    onClick={() => setLanguage("en")}
    className={`transition hover:text-black ${
      language === "en" ? "text-black" : "text-black/35"
    }`}
  >
    EN
  </button>
</div>

  <Link
    href="/account"
    className="font-sans text-[11px] font-light tracking-[0.28em] text-black/65 transition hover:text-black"
  >
    ACCOUNT
  </Link>
</div>

        </div>
      </header>
    </div>
  );
}