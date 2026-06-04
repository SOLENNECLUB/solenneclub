"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
  BAG (0)
</Link>

{/* Right Side */}
          <div className="flex items-center gap-8">
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