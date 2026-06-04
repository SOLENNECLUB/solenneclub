"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  return (
    <div
  className="overflow-hidden bg-[#f8f5ef] shadow-2xl"
  style={{
    width: "calc(100vw - 96px)",
    maxWidth: "1420px",
    margin: "0 auto",
  }}
>
        {/* HERO */}
        <section className="relative h-[520px] overflow-hidden">
          <Image
  src="/images/hero.jpg"
            alt="Soft textile texture"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <p className="mb-4 font-sans text-[10px] font-light uppercase tracking-[0.35em] text-white/75">
                Established 2024
              </p>

              <h1 className="font-serif text-[52px] font-light leading-[0.88] tracking-[-0.04em] md:text-[74px] lg:text-[92px]">
                The Art of
                <br />
                <span className="italic">Walking Well</span>
              </h1>

              <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-8 text-white/85">
                A quiet luxury brand grounded in comfort,
                ritual, and the beauty of everyday life.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex items-center gap-5 border border-white/60 px-10 py-4 font-sans text-[10px] font-light uppercase tracking-[0.24em] transition hover:bg-white hover:text-black"
              >
                Discover The Ritual <span>→</span>
              </Link>
            </div>
          </div>
</section>

        <div className="h-10 bg-[#f8f5ef]" />

        {/* QUOTE */}
<section
  className="grid grid-cols-1 items-center gap-16 pt-20 pb-10 md:grid-cols-[300px_1fr_230px]"
  style={{
    width: "min(1040px, calc(100% - 300px))",
    margin: "0 auto",
  }}
>
  <div className="relative h-[175px] w-full overflow-hidden">
    <Image
      src="/images/quote.jpg"
      alt="Quiet ritual"
      fill
      className="object-cover"
    />
  </div>

  <div
  className={`flex flex-col items-center text-center transition-all duration-500 ${
    isPhilosophyOpen
      ? "pointer-events-none opacity-0"
      : "opacity-100"
  }`}
>
    <h2 className="mx-auto max-w-[380px] -translate-y-2 font-serif text-[24px] font-light leading-[1.08] tracking-[-0.02em] text-[#1A1918] md:text-[28px]">
      “We believe that luxury
      <br />
      is not about noise,
      <br />
      but about <span className="italic">silence.</span>”
    </h2>

    <div className="mt-5 mb-8 h-px w-12 bg-black/30" />

    <p className="mx-auto max-w-[310px] translate-y-1 font-sans text-[12px] font-medium leading-5 text-black/65">
  In a world that moves too fast,
  <br />
  we create objects that slow you down.
  <br />
  To feel. To breathe. To walk well.
</p>
  </div>

  <div className="flex items-center justify-center md:translate-y-[54px]">
    <button
  type="button"
  onClick={() => setIsPhilosophyOpen((current) => !current)}
  className="border-b border-black/50 pb-1 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-black/65 transition duration-300 hover:border-black hover:text-black"
>
  {isPhilosophyOpen ? "Close Philosophy ↑" : "Read Our Philosophy →"}
</button>
  </div>
</section>

{/* PHILOSOPHY REVEAL */}
<div
  className={`overflow-hidden bg-[#f8f5ef] transition-all duration-700 ease-out ${
    isPhilosophyOpen ? "max-h-[3600px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div
  className="px-8 pb-28 pt-20 text-center"
  style={{
    width: "min(1040px, calc(100% - 300px))",
    margin: "0 auto",
  }}
>
    <p className="mb-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-black/32">
    </p>

    

    <div className="mx-auto mt-10 max-w-[1040px] space-y-6 font-sans text-[15px] font-light leading-8 text-black/62">
      <p>
  SOLENNECLUB exists for those who have learned to notice life beyond instant
  pleasure. For those who understand the value of a breath, a morning, a quiet
  room, and the invisible decisions that shape the way we move through the day.
</p>

<p>
  We believe that walking well is not only about walking. We walk from the
  moment we are born until the final step of our lives. We walk in motion, in
  thought, in dreams, in memory, and perhaps in places we do not yet understand.
  To walk well is to make that distance feel more conscious, more gentle, and
  more worthy of respect.
</p>

<p>
  Our first object begins close to the body. A sock is rarely seen, yet it is
  one of the first things to touch us. It carries the body before the world
  does. It should not interrupt the day. It should begin it softly.
</p>

<p>
  We are not against luxury. We are not against desire. We are against
  unconscious consumption.
</p>

<p>
  Too many objects are bought without knowing what they are made of, where they
  come from, or why they exist. SOLENNECLUB is a quiet resistance to that
  blindness. A return to material, intention, and feeling.
</p>

<p>
  Cotton, cashmere, and silk are not chosen only for comfort. They carry
  patience. They carry effort. They remind us that softness is not weakness, and
  that true refinement often comes from slow, difficult processes.
</p>

<p>
  The feeling we search for is not decoration. It is the feeling of touching
  nature again. The memory of bare feet on the ground. The sense that the body
  is releasing what it no longer needs. Noise, tension, excess. A small return
  to balance.
</p>

<p>
  The first object is limited because beginnings matter. SOLENNECLUB is a
  brand, but it is also a club: a quiet community shaped by shared values. Those
  who carry the first object are not only customers. They become part of the
  first trace of this walk.
</p>

<p>
  Not everything valuable needs to be seen. Sometimes the most meaningful
  gesture is the one no one notices. A private act of care. A soft layer against
  the skin. A reminder that you are allowed to move through life with more
  respect for yourself.
</p>

<p>
  SOLENNECLUB speaks quietly. Not to convince, but to resonate. Not through
  noise, but through signs. From the heart to the mind. From the mind to the
  body. From the body to the next step.
</p>

<p className="pt-6 font-serif text-[30px] font-light leading-[1.15] tracking-[-0.03em] text-[#1A1918] md:whitespace-nowrap md:text-[44px]">
  This is the quiet art <span className="italic">of walking well.</span>
</p>
        </div>
      </div>
    </div>

    {/* CARDS */}
<section className="bg-[#f8f5ef] pt-12 pb-28">
  <div
  className="grid grid-cols-1 gap-6 md:grid-cols-3"
  style={{
    width: "min(1040px, calc(100% - 260px))",
    margin: "48px auto 0 auto",
  }}
>
    {[
      {
        label: "The Collection",
        title: "One object.\nMany moments.",
        cta: "Explore",
        href: "/shop",
        image: "/images/collection.jpg",
      },
      {
        label: "The Journal",
        title: "Thoughts on\nslow living.",
        cta: "Read Essays",
        href: "/journal",
        image: "/images/journal.jpg",
      },
      {
        label: "Materials",
        title: "The beauty of\nnatural fibers.",
        cta: "Learn More",
        href: "/materials",
        image: "/images/materials.jpg",
      },
    ].map((card) => (
      <Link
        key={card.label}
        href={card.href}
        className="group relative h-[165px] w-full overflow-hidden bg-black"
      >
        <Image
          src={card.image}
          alt={card.label}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-start justify-center px-10 py-8 text-white">
          <p className="mb-7 font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-white/70">
            {card.label}
          </p>

          <h3 className="whitespace-pre-line font-serif text-[24px] font-light leading-[1.28] tracking-[-0.02em] text-white">
            {card.title}
          </h3>

          <p className="mt-8 inline-flex self-start items-center border-b border-white/60 pb-[4px] font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-white/70">
  {card.cta}
  <span className="ml-3">→</span>
</p>
        </div>
      </Link>
        ))}
        </div>
</section>

<div className="h-20 bg-[#f8f5ef]" />
  </div>
);
}