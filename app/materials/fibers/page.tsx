"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const fibers = [
  {
    id: "cotton",
    number: "01",
    archiveCode: "SC / MAT / 001",
    name: "Cotton",
    image: "/materials/cotton-02.jpg",
    title: "Breathable softness for everyday comfort.",
    shortText:
      "Cotton is a natural fiber chosen for softness, breathability, and ease against the skin.",
    longText:
      "It belongs to everyday life because it feels honest, familiar, and light. In the SOLENNECLUB world, cotton is not treated as something ordinary, but as a quiet foundation: a material that allows movement, comfort, and a soft rhythm throughout the day.",
    feel: "Soft / Dry / Natural",
    weight: "Light",
    bestFor: "Daily wear",
    touch: "Clean comfort",
    tone: "#f8f5ef",
 },
  {
    id: "cashmere",
    number: "02",
    archiveCode: "SC / MAT / 002",
    name: "Cashmere",
    image: "/materials/cashmere-01.jpg",
    title: "Warmth without weight.",
    shortText:
      "Cashmere brings gentle warmth, refined softness, and a calm sense of luxury.",
    longText:
      "Its value is not only in how it looks, but in how it feels. Cashmere creates a quiet atmosphere around the body: warm, light, intimate, and deeply soft. It is a material for moments when comfort becomes emotional.",
    feel: "Warm / Soft / Refined",
    weight: "Medium-light",
    bestFor: "Calm warmth",
    touch: "Quiet luxury",
    tone: "#eee8dd",
  },
  {
    id: "silk",
    number: "03",
    archiveCode: "SC / MAT / 003",
    name: "Silk",
    image: "/materials/silk-01.jpg",
    title: "A light touch with quiet shine.",
    shortText:
      "Silk is known for its smooth surface, natural movement, and subtle glow.",
    longText:
      "It moves with the body rather than against it. Silk reflects light softly and brings an elegant, almost silent feeling to the skin. In material language, silk represents fluidity, delicacy, and the beauty of touch.",
    feel: "Smooth / Fluid / Luminous",
    weight: "Light",
    bestFor: "Soft movement",
    touch: "Delicate glow",
    tone: "#f3f0e9",
  },
];

export default function FibersPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="site-shell bg-[#f8f5ef] shadow-2xl">
      {/* INTRO */}
      <section
        className="flex flex-col items-center px-12 text-center"
        style={{
          paddingTop: "145px",
          paddingBottom: "72px",
        }}
      >
        <p className="mb-7 text-center font-sans text-[10px] font-light uppercase tracking-[0.35em] text-black/40">
          Material Library
        </p>

        <h1 className="mx-auto max-w-[720px] text-center font-serif text-[36px] font-light leading-[1.03] tracking-[-0.04em] text-[#1A1918] md:text-[56px]">
          Cotton, Cashmere
          <br />
          <span className="italic">& Silk.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-[520px] font-sans text-[13px] font-light leading-7 text-black/45">
          A tactile archive of softness, warmth, movement, and quiet comfort.
        </p>
      </section>

      {/* MATERIAL LIST */}
      <section className="px-12 pb-20">
        <div className="border-t border-black/10">
          {fibers.map((fiber, index) => {
            const isOpen = openId === fiber.id;
            const imageRight = index === 1;

            return (
              <article
                key={fiber.id}
                className="grid border-b border-black/10 md:grid-cols-2"
              >
                {/* IMAGE */}
                <div
                  className={`group relative h-[430px] overflow-hidden bg-black ${
                    imageRight ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={fiber.image}
                    alt={fiber.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-85 transition duration-[1200ms] ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-black/25" />

                  <div className="absolute left-10 top-10">
                    <p className="font-sans text-[10px] font-light uppercase tracking-[0.35em] text-white/65">
                      {fiber.number}
                    </p>
                  </div>

                  <div className="absolute bottom-10 left-10 opacity-70 transition duration-500 group-hover:opacity-100">
                    <p className="font-sans text-[10px] font-light uppercase tracking-[0.35em] text-white/70">
                      {fiber.archiveCode}
                    </p>
                  </div>
                </div>

                {/* TEXT */}
<div
  className={`flex items-center justify-center px-10 py-16 md:px-16 ${
    imageRight ? "md:order-1" : "md:order-2"
  }`}
  style={{ backgroundColor: fiber.tone }}
>
  <div className="mx-auto w-full max-w-[620px]">
                    <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5">
                      <p className="font-sans text-[10px] font-light uppercase tracking-[0.35em] text-black/45">
                        {fiber.name}
                      </p>

                      <p className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-black/35">
                        {fiber.archiveCode}
                      </p>
                    </div>

                    <h2 className="font-serif text-[36px] font-light leading-[1.08] tracking-[-0.03em] text-[#1A1918] md:text-[50px]">
                      {fiber.title}
                    </h2>

                    <p className="mt-8 font-sans text-[14px] font-light leading-7 text-black/60">
                      {fiber.shortText}
                    </p>

                    {/* MATERIAL SPECS */}
                    <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-y border-black/10 py-7">
                      <div>
                        <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.32em] text-black/30">
                          Feel
                        </p>
                        <p className="font-sans text-[13px] font-light text-black/60">
                          {fiber.feel}
                        </p>
                      </div>

                      <div>
                        <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.32em] text-black/30">
                          Weight
                        </p>
                        <p className="font-sans text-[13px] font-light text-black/60">
                          {fiber.weight}
                        </p>
                      </div>

                      <div>
                        <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.32em] text-black/30">
                          Best For
                        </p>
                        <p className="font-sans text-[13px] font-light text-black/60">
                          {fiber.bestFor}
                        </p>
                      </div>

                      <div>
                        <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.32em] text-black/30">
                          Touch
                        </p>
                        <p className="font-sans text-[13px] font-light text-black/60">
                          {fiber.touch}
                        </p>
                      </div>
                    </div>

                    {isOpen && (
                      <p className="mt-7 font-sans text-[14px] font-light leading-7 text-black/60">
                        {fiber.longText}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : fiber.id)}
                      className="mt-8 border-b border-black/50 pb-[4px] font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-black/70"
                    >
                      {isOpen ? "Close The Note" : "Study The Material"}{" "}
                      <span className="ml-3">→</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* MANIFESTO */}
<section
  className="col-span-full w-full px-12 pb-28 text-center"
  style={{
    gridColumn: "1 / -1",
  }}
>
  <div className="mx-auto flex w-full max-w-none flex-col items-center justify-center border-y border-black/10 py-24 text-center">
    <p className="mb-8 w-full text-center font-sans text-[10px] font-light uppercase tracking-[0.35em] text-black/45">
      Tactile Philosophy
    </p>

    <h2 className="mx-auto max-w-[880px] text-center font-serif text-[34px] font-light leading-[1.15] tracking-[-0.03em] text-[#1A1918] md:text-[52px]">
      Before form, there is feeling.
      <br />
      <span className="italic">Before beauty, there is touch.</span>
    </h2>
  </div>
</section>
      {/* BACK */}
      <section className="px-12 pb-32 text-center">
        <Link
          href="/materials"
          className="inline-flex items-center border-b border-black/50 pb-[4px] font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-black/70"
        >
          Back to Materials <span className="ml-3">→</span>
        </Link>
      </section>
    </div>
  );
}