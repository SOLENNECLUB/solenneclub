import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-[#f8f5ef]">
      <div className="site-shell grid grid-cols-1 gap-12 px-12 pt-20 pb-20 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="mb-8 font-serif text-[24px] font-light tracking-[0.18em] text-[#1A1918]">
            SOLENNECLUB®
          </h3>

          <p className="max-w-[280px] font-sans text-[13px] font-light leading-7 text-black/60">
            Est. 2025. A registered trademark dedicated to the quiet art of
            walking well. Crafted for comfort, designed for life.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="mb-7 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40">
            Explore
          </h4>

          <ul className="space-y-3 font-serif text-[20px] font-light leading-7 text-black/75">
            <li>
              <Link href="/shop">The Sock</Link>
            </li>
            <li>
              <Link href="/journal">Journal</Link>
            </li>
            <li>
              <Link href="/philosophy">Philosophy</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-7 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40">
            Legal
          </h4>

          <ul className="space-y-3 font-sans text-[13px] font-light leading-6 text-black/60">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li className="pt-3">
              © 2025 SOLENNECLUB®
              <br />
              All rights reserved.
            </li>
            <li className="pt-2 text-[12px] italic">
              SOLENNECLUB® is a registered trademark.
            </li>
          </ul>
        </div>

        {/* Stay in touch */}
        <div>
          <h4 className="mb-7 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40">
            Stay in Touch
          </h4>

          <p className="mb-6 max-w-[260px] font-sans text-[13px] font-light leading-6 text-black/60">
            Thoughtful notes on living well.
            <br />
            No noise. Only meaning.
          </p>

          <div className="flex h-[42px] max-w-[320px] items-center border border-black/15">
            <input
              type="email"
              placeholder="Your email address"
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
              href="https://instagram.com"
              className="flex h-8 w-8 items-center justify-center border border-black/20 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-black/60 transition hover:bg-black hover:text-white"
            >
              IG
            </Link>

            <Link
              href="https://pinterest.com"
              className="flex h-8 w-8 items-center justify-center border border-black/20 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-black/60 transition hover:bg-black hover:text-white"
            >
              PI
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