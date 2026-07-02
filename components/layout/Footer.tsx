"use client";
import Link from "next/link";
import { useLanguage } from "@/components/language/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
  className="mt-20 border-t border-black/10 bg-[#f8f5ef]"
  style={{ paddingTop: "30px" }}
>
      <div className="site-shell grid grid-cols-1 gap-12 px-12 pb-20 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="mb-8 font-serif text-[24px] font-light tracking-[0.18em] text-[#1A1918]">
            SOLENNECLUB®
          </h3>

          <p className="max-w-[280px] font-sans text-[13px] font-light leading-7 text-black/60">
            {t.footer.description}
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-7 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40">
            {t.footer.explore}
          </h4>

          <ul className="space-y-3 font-serif text-[20px] font-light leading-7 text-black/75">
            <li>
              <Link href="/shop">{t.footer.theSock}</Link>
            </li>
            <li>
              <Link href="/journal">
  {t.footer.journal}
</Link>
            </li>
            <li>
              <Link href="/philosophy">
  {t.footer.philosophy}
</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.42em] text-[#1A1918]/38">
  {t.footer.legal}
</p>
          <ul className="space-y-3 font-sans text-[13px] font-light leading-6 text-black/60">
            <li>
              <Link href="/privacy">
  {t.footer.privacy}
</Link>
            </li>
            <li>
              <Link href="/terms">
  {t.footer.terms}
</Link>
            </li>
            <li className="pt-3">
              © 2025 SOLENNECLUB®
              <br />
              {t.footer.rights}
            </li>
            <li className="pt-2 text-[12px] italic">
  {t.footer.trademark}
</li>
          </ul>
        </div>

        {/* Stay in touch */}
        <div>
          <h4 className="mb-7 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40">
            {t.footer.stayInTouch}
          </h4>

          <p className="mb-6 max-w-[260px] font-sans text-[13px] font-light leading-6 text-black/60">
            {t.footer.newsletterText}
            <br />
            {t.footer.newsletterSub}
          </p>

          <div className="flex h-[42px] max-w-[320px] items-center border border-black/15">
            <input
              type="email"
              placeholder={t.footer.emailPlaceholder}
              className="h-full flex-1 bg-transparent px-4 font-sans text-[12px] font-light text-black/70 outline-none placeholder:text-black/35"
            />

            <button
              type="button"
              className="flex h-full w-12 items-center justify-center border-l border-black/10 font-sans text-[18px] text-black/60 transition hover:bg-black hover:text-white"
            >
              →
            </button>
          </div>

          <div className="mt-7 flex items-center gap-5">
            <Link
  href="https://www.instagram.com/solenneclub?igsh=YXgwOG9pb2tkbmtr&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="SOLENNECLUB Instagram"
  className="flex h-8 w-8 items-center justify-center border border-black/20 text-black/60 transition hover:bg-black hover:text-white"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[15px] w-[15px]"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
  </svg>
</Link>

            

            <Link
              href="mailto:hello@solenneclub.com"
              className="flex h-8 w-8 items-center justify-center border border-black/20 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-black/60 transition hover:bg-black hover:text-white"
            >
              ✉
            </Link>
          </div>
        </div>
      </div>

      <div className="h-14 bg-[#f8f5ef]" />
    </footer>
  );
}