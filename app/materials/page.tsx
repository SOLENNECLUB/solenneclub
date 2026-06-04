import Image from "next/image";
import Link from "next/link";

const materialCards = [
  {
    number: "01",
    label: "Cotton",
    title: "Breathable.\nSoft by nature.",
    description:
      "A natural fiber chosen for everyday comfort, softness, and quiet breathability.",
    image: "/images/quote.jpg",
    href: "/materials/cotton",
    cta: "Read More",
  },
  {
    number: "02",
    label: "Cashmere",
    title: "Warmth without\nweight.",
    description:
      "A refined fiber known for its gentle warmth, softness, and quiet luxury.",
    image: "/images/collection.jpg",
    href: "/materials/cashmere",
    cta: "Read More",
  },
  {
    number: "03",
    label: "Silk",
    title: "Light touch.\nQuiet shine.",
    description:
      "A delicate fiber shaped by smoothness, movement, and a subtle natural glow.",
    image: "/images/materials.jpg",
    href: "/materials/silk",
    cta: "Read More",
  },
];

export default function MaterialsPage() {
  return (
    <div className="site-shell bg-[#f8f5ef] shadow-2xl">
      {/* HERO */}
      <section
        className="flex flex-col items-center px-12 text-center"
        style={{
          paddingTop: "120px",
          paddingBottom: "64px",
        }}
      >
        <p className="mb-6 font-sans text-[10px] font-light uppercase tracking-[0.35em] text-black/40">
          Materials
        </p>

        <h1 className="mx-auto max-w-[980px] font-serif text-[46px] font-light leading-[1] tracking-[-0.04em] text-[#1A1918] md:text-[76px]">
          The beauty of
          <br />
          <span className="italic">natural fibers.</span>
        </h1>
      </section>

      {/* MAIN IMAGE */}
      <section className="px-12">
        <div className="relative h-[520px] overflow-hidden bg-black">
          <Image
            src="/images/materials.jpg"
            alt="Natural fibers and soft interior shadows"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1420px"
            className="object-cover opacity-85"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <p className="mb-8 font-sans text-[10px] font-light uppercase tracking-[0.35em] text-white/70">
                Chosen for quiet comfort
              </p>

              <h2 className="font-serif text-[42px] font-light leading-[1.05] tracking-[-0.03em] md:text-[66px]">
                Texture,
                <br />
                warmth, breath.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        className="bg-[#f8f5ef]"
        style={{
          padding: "80px 48px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            borderTop: "1px solid rgba(0,0,0,0.10)",
            borderBottom: "1px solid rgba(0,0,0,0.10)",
            paddingTop: "72px",
            paddingBottom: "72px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="mb-8 font-sans text-[10px] font-light uppercase tracking-[0.35em] text-black/35">
            Material Philosophy
          </p>

          <h2 className="w-full font-serif text-[36px] font-light leading-[1.12] tracking-[-0.03em] text-[#1A1918] md:text-[48px]">
            <span className="block md:whitespace-nowrap">
              We choose materials not only for how they look,
            </span>
            <span className="block italic">
              but for how they make the day feel.
            </span>
          </h2>

          <p className="mt-8 font-sans text-[14px] font-light leading-7 text-black/55">
            Softness can be functional. Texture can be emotional.
          </p>
        </div>
      </section>

      

      {/* PRODUCT CONNECTION */}
      <section className="px-12 pb-32">
        <Link
          href="/materials/fibers"
          className="group grid grid-cols-1 overflow-hidden bg-black md:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative h-[360px] overflow-hidden md:h-[460px]">
            <Image
              src="/images/collection.jpg"
              alt="SOLENNECLUB collection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-85 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          <div className="flex items-center justify-center bg-[#e9e3d8] px-10 py-20 text-center md:px-20">
            <div className="max-w-[520px]">
              <p className="mb-8 font-sans text-[10px] font-light uppercase tracking-[0.35em] text-black/40">
                From material to object
              </p>

              <h2 className="font-serif text-[38px] font-light leading-[1.08] tracking-[-0.03em] text-[#1A1918] md:text-[54px]">
                Discover how texture becomes
                <span className="italic"> a daily ritual.</span>
              </h2>

              <p className="mt-10 inline-flex items-center border-b border-black/50 pb-[4px] font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-black/70">
                Explore Materials <span className="ml-3">→</span>
              </p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}