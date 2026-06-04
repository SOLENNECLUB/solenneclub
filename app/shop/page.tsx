"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const productFacts = ["DESIGNED IN GERMANY", "MADE IN ITALY"];

const productImages = {
  hero: "/product-1.jpg",
  firstObject: "/first-object.png",
  releaseObject: "/release-object.png",
  finalProduct: "/final-product.jpg",
  ivory: "/product-2.jpg",
  detail: "/product-3.jpg",
  brown: "/product-4.jpg",
};
const finalGalleryImages = [
  {
    src: "/final-product.jpg",
    label: "01",
  },
  {
    src: "/final-gallery-2.jpg",
    label: "02",
  },
  {
    src: "/final-gallery-3.jpg",
    label: "03",
  },
];
const scrollScenes = [
  {
    type: "logo",
    eyebrow: "",
    title: "SOLENNECLUB",
    italic: "",
    text: "THE SOCK / 001",
    image: null,
    imageSide: "none",
  },
  {
  type: "firstObject",
  eyebrow: "",
  title: "The First",
  italic: "Object.",
  text: "Not made to be noticed. Made to be felt, repeated, and carried through the day.",
  image: productImages.firstObject,
  imageSide: "left",
},
{
  type: "center",
  eyebrow: "The Feel",
  title: "Cotton breathes.",
  italic: "Cashmere warms. Silk softens.",
  text: "A balanced composition made to move with the body, stay gentle against the skin, and elevate the everyday.",
  image: null,
  imageSide: "none",
},
  {
  type: "center",
  eyebrow: "Against the skin",
  title: "The first contact",
  italic: "matters.",
  text: "A sock is the first layer between the body and the day. It should not interrupt. It should begin softly.",
  image: null,
  imageSide: "none",
},
  
  {
  type: "releaseObject",
  eyebrow: "Release",
  title: "Limited",
  italic: "by intention.",
  text: "The first object is not released endlessly. It arrives slowly, carefully, and in limited numbers.",
  image: productImages.releaseObject,
  imageSide: "right",
},
  {
    type: "buy",
    eyebrow: "SOLENNECLUB",
    title: "The Sock",
    italic: "",
    text: "A quiet object, before it becomes yours.",
    image: productImages.finalProduct,
    imageSide: "left",
  },
];

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function mapRange(value: number, inMin: number, inMax: number) {
  return clamp((value - inMin) / (inMax - inMin));
}
function smoothStep(value: number) {
  return value * value * (3 - 2 * value);
}

function sceneOpacity(progress: number, index: number, total: number) {
  const start = index / total;
  const end = (index + 1) / total;
  const fade = 0.18;

  const fadeIn =
    index === 0 ? 1 : smoothStep(mapRange(progress, start, start + fade));

  const fadeOut =
    index === total - 1
      ? 1
      : 1 - smoothStep(mapRange(progress, end - fade, end));

  return Math.min(fadeIn, fadeOut);
}

function sceneProgress(progress: number, index: number, total: number) {
  const start = index / total;
  const end = (index + 1) / total;

  return mapRange(progress, start, end);
}

export default function ShopPage() {
  const theaterRef = useRef<HTMLElement | null>(null);
const productGalleryRef = useRef<HTMLDivElement | null>(null);

const [progress, setProgress] = useState(0);
const [activeProductImage, setActiveProductImage] = useState(0);

const goToProductImage = (imageIndex: number) => {
  setActiveProductImage(imageIndex);

  productGalleryRef.current?.scrollTo({
    left: productGalleryRef.current.clientWidth * imageIndex,
    behavior: "smooth",
  });
};

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const element = theaterRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const current = -rect.top;
      const nextProgress = scrollable > 0 ? current / scrollable : 0;

      setProgress(clamp(nextProgress));

      const immersiveActive =
        rect.top <= 0 && rect.bottom >= window.innerHeight * 0.45;

      document.body.classList.toggle(
        "solenne-immersive-active",
        immersiveActive
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
      document.body.classList.remove("solenne-immersive-active");
    };
  }, []);

  return (
    <main className="site-shell bg-[#F9F8F6] shadow-2xl">
      {/* 01 — WHITE ENTRY */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-8 pt-[130px] text-center">
        <p className="mb-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-black/35">
          The Collection
        </p>

        <h1 className="mx-auto max-w-[780px] font-serif text-[48px] font-light leading-[1.02] tracking-[-0.05em] text-[#1A1918] md:text-[82px]">
          One object.
          <br />
          <span className="italic">Many moments.</span>
        </h1>

        <div
  className="absolute left-1/2 grid -translate-x-1/2 grid-cols-2 border-y border-black/10 py-4"
  style={{
    bottom: "30vh",
    width: "min(760px, calc(100vw - 56px))",
  }}
>
  {productFacts.map((fact) => (
    <div key={fact} className="text-center">
      <p className="font-sans text-[12px] font-light uppercase tracking-[0.34em] text-black/64">
        {fact}
      </p>
    </div>
  ))}
</div>

        <div className="scrollChevron">
  <span />
  <span />
  <span />
</div>
      </section>

      {/* KLARNA-LIKE PRODUCT EXPERIENCE */}
      <section
        ref={theaterRef}
        className="relative left-1/2 h-[920vh] w-screen -translate-x-1/2 bg-[#343229] text-[#F9F8F6]"
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-[#343229]">
          {/* base atmosphere */}
          <Image
            src={productImages.hero}
            alt="SOLENNECLUB The Sock"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              opacity: 0.12 + progress * 0.1,
              transform: `scale(${1.08 - progress * 0.04})`,
            }}
          />

          <div className="absolute inset-0 bg-[#343229]/68" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#343229]/78 via-[#343229]/26 to-[#343229]/78" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.055),transparent_38%)]" />

          {scrollScenes.map((scene, index) => {
            const opacity = sceneOpacity(progress, index, scrollScenes.length);
            const local = sceneProgress(progress, index, scrollScenes.length);

            if (scene.type === "logo") {
              return (
                <div
                  key={`scene-${index}`}
                  className="absolute inset-0 flex items-center justify-center px-8 text-center"
                  style={{
                    opacity,
                    transform: `scale(${0.92 + local * 0.18})`,
                    pointerEvents: opacity > 0.2 ? "auto" : "none",
                  }}
                >
                  <div>
                    <h2 className="font-serif text-[54px] font-light tracking-[0.08em] text-white/82 md:text-[128px] lg:text-[178px]">
                      SOLENNECLUB
                    </h2>

                    <p className="mt-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-white/42">
                      THE SOCK / 001
                    </p>
                  </div>
                </div>
              );
            }
if (scene.type === "firstObject") {
  const firstTitleOpacity = 1 - mapRange(local, 0.18, 0.32);
const secondTitleOpacity = mapRange(local, 0.38, 0.56);

  return (
    <div
      key={`scene-${index}`}
      className="absolute inset-0 flex items-center justify-center px-8"
      style={{
        opacity,
        transform: `translateY(${20 - local * 40}px)`,
        pointerEvents: opacity > 0.2 ? "auto" : "none",
      }}
    >
      <div className="flex w-full max-w-[1120px] flex-col items-center">
        <div className="grid w-full items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center">
            <div className="relative h-[500px] w-full max-w-[560px] bg-transparent">
              {scene.image && (
                <Image
                  src={scene.image}
                  alt="The Sock"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-contain"
                  style={{
                    transform: "scale(1.06)",
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-[340px] w-full max-w-[680px]">
              <h2
  className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center font-serif text-[72px] font-light leading-[1] tracking-[-0.025em] text-white/95 md:text-[108px] lg:text-[136px]"
  style={{
    opacity: firstTitleOpacity,
  }}
>
  <span className="block whitespace-nowrap">The First</span>
  <span className="block whitespace-nowrap italic">Object.</span>
</h2>

              <h2
  className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center font-serif text-[56px] font-light leading-[1.06] tracking-[-0.018em] text-white/95 md:text-[84px] lg:text-[106px]"
  style={{
    opacity: secondTitleOpacity,
  }}
>
  <span className="block whitespace-nowrap">The quiet art</span>
  <span className="block whitespace-nowrap italic">of walking well.</span>
</h2>
            </div>
          </div>
        </div>

        <p className="mt-12 max-w-[860px] text-center font-sans text-[15px] font-light leading-8 text-white/76 md:text-[16px]">
          Not made to be noticed. Made to be felt, repeated, and carried through
          the day.
        </p>
      </div>
    </div>
  );
}
            if (scene.type === "center") {
  const isFeelScene = scene.eyebrow === "The Feel";

  return (
    <div
      key={`scene-${index}`}
      className="absolute inset-0 flex items-center justify-center px-8 text-center"
      style={{
        opacity,
        pointerEvents: opacity > 0.2 ? "auto" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1040px] flex-col items-center">
        {scene.eyebrow && (
          <p className="mb-10 font-sans text-[10px] font-light uppercase tracking-[0.45em] text-white/42">
            {scene.eyebrow}
          </p>
        )}

        {isFeelScene ? (
          <h2 className="flex flex-col items-center gap-2 font-serif text-[46px] font-light leading-[1.02] tracking-[-0.035em] text-white/92 md:text-[74px] lg:text-[96px]">
            <span className="block whitespace-nowrap">Cotton breathes.</span>
            <span className="block whitespace-nowrap italic">
              Cashmere warms.
            </span>
            <span className="block whitespace-nowrap italic">
              Silk softens.
            </span>
          </h2>
        ) : (
          <h2 className="flex flex-col items-center gap-3 font-serif text-[50px] font-light leading-[1] tracking-[-0.035em] text-white/92 md:text-[82px] lg:text-[108px]">
            <span className="block whitespace-nowrap">{scene.title}</span>
            {scene.italic && (
              <span className="block whitespace-nowrap italic">
                {scene.italic}
              </span>
            )}
          </h2>
        )}

        <p className="mt-10 max-w-[700px] text-center font-sans text-[14px] font-light leading-8 text-white/62 md:text-[15px]">
          {scene.text}
        </p>
      </div>
    </div>
  );
}
if (scene.type === "releaseObject") {
  return (
    <div
      key={`scene-${index}`}
      className="absolute inset-0 flex items-center justify-center px-8"
      style={{
  opacity,
  transform: `translateY(${18 - local * 36}px)`,
  pointerEvents: opacity > 0.2 ? "auto" : "none",
}}
    >
      <div className="grid w-full max-w-[1080px] items-center gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
        <div className="flex justify-center">
          <div className="flex w-full max-w-[520px] flex-col items-center text-center">
            <p className="mb-7 font-sans text-[10px] font-light uppercase tracking-[0.45em] text-white/42">
              {scene.eyebrow}
            </p>

            <h2 className="flex flex-col items-center gap-0 font-serif text-[64px] font-light leading-[0.92] tracking-[-0.024em] text-white/95 md:text-[98px] lg:text-[126px]">
              <span className="block whitespace-nowrap">{scene.title}</span>
              {scene.italic && (
                <span className="block whitespace-nowrap italic">
                  {scene.italic}
                </span>
              )}
            </h2>

            <p className="mt-8 max-w-[470px] text-center font-sans text-[14px] font-light leading-8 text-white/76 md:text-[15px]">
              {scene.text}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative h-[560px] w-full max-w-[500px] bg-transparent">
            {scene.image && (
              <Image
                src={scene.image}
                alt="The Sock"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain"
                style={{
                  transform: "translateY(4px) scale(1.08)",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
            if (scene.type === "buy") {
  return (
    <div
      key={`scene-${index}`}
      className="absolute inset-0 flex items-center justify-center px-8"
      style={{
        opacity,
        transform: `translateY(${18 - local * 36}px)`,
        pointerEvents: opacity > 0.2 ? "auto" : "none",
      }}
    >
      <div
        id="reserve"
        className="grid w-full max-w-[1180px] overflow-hidden border border-white/10 bg-[#1A1918]/72 md:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="relative min-h-[68vh] overflow-hidden bg-black">
  <div
    ref={productGalleryRef}
    className="productGallery absolute inset-0 flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
    onScroll={(event) => {
      const current = event.currentTarget;
      const nextIndex = Math.round(current.scrollLeft / current.clientWidth);

      if (nextIndex !== activeProductImage) {
        setActiveProductImage(nextIndex);
      }
    }}
  >
    {finalGalleryImages.map((image) => (
      <div key={image.label} className="relative h-full min-w-full snap-center">
        <Image
          src={image.src}
          alt={`The Sock ${image.label}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-90"
        />
      </div>
    ))}
  </div>

  <div className="pointer-events-none absolute inset-0 bg-black/10" />

  <p className="absolute bottom-8 left-8 font-sans text-[10px] font-light uppercase tracking-[0.4em] text-white/40">
    SC / THE SOCK / 00{activeProductImage + 1}
  </p>

  <div className="absolute bottom-8 right-8 flex items-center gap-3">
    {finalGalleryImages.map((image, imageIndex) => (
      <button
        key={image.label}
        type="button"
        onClick={() => goToProductImage(imageIndex)}
        className={`h-[6px] w-[34px] transition duration-300 ${
          activeProductImage === imageIndex
            ? "bg-white/70"
            : "bg-white/22 hover:bg-white/42"
        }`}
        aria-label={`Show product image ${image.label}`}
      />
    ))}
  </div>
</div>

        <div className="flex min-h-[68vh] items-center justify-center px-8 py-12 md:px-14 lg:px-16">
          <div className="w-full max-w-[600px]">
            <div className="mb-8 flex flex-col items-center text-center">
  <p className="mb-5 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-white/42">
    SOLENNECLUB
  </p>

  <h2 className="font-serif text-[52px] font-light leading-[0.96] tracking-[-0.04em] text-white md:text-[82px]">
    The Sock
  </h2>

  <h3 className="mt-7 max-w-[540px] font-serif text-[30px] font-light leading-[1.16] tracking-[-0.035em] text-white md:text-[46px]">
    A quiet object,
    <br />
    <span className="italic">before it becomes yours.</span>
  </h3>

  <p className="mt-6 max-w-[520px] font-sans text-[14px] font-light leading-7 text-white/64">
    A daily layer of comfort, designed to be felt before it is seen.
  </p>
</div>

            <div className="mt-7 grid grid-cols-2 gap-x-10 gap-y-5 border-y border-white/10 py-6">
              <div>
                <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.34em] text-white/35">
                  Material
                </p>
                <p className="font-sans text-[13px] font-light leading-6 text-white/64">
                  Cotton / Cashmere / Silk
                </p>
              </div>

              <div>
                <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.34em] text-white/35">
                  Origin
                </p>
                <p className="font-sans text-[13px] font-light leading-6 text-white/64">
                  Designed in Germany
                  <br />
                  Made in Italy
                </p>
              </div>

              <div>
                <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.34em] text-white/35">
                  Availability
                </p>
                <p className="font-sans text-[13px] font-light leading-6 text-white/64">
                  Limited release
                </p>
              </div>

              <div>
                <p className="mb-2 font-sans text-[9px] uppercase tracking-[0.34em] text-white/35">
                  Price
                </p>
                <p className="font-sans text-[13px] font-light leading-6 text-white/64">
                  €88
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.34em] text-white/35">
                Size
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="border border-white/50 px-5 py-3.5 font-sans text-[11px] font-light uppercase tracking-[0.24em] text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  EU 36–40
                </button>

                <button
                  type="button"
                  className="border border-white/18 px-5 py-3.5 font-sans text-[11px] font-light uppercase tracking-[0.24em] text-white/58 transition duration-300 hover:border-white/50 hover:text-white"
                >
                  EU 41–45
                </button>
              </div>
            </div>

            <button className="mt-6 w-full border border-white/70 px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.34em] text-white transition duration-300 hover:bg-white hover:text-black">
              ADD TO BAG →
            </button>

            <p className="mt-4 text-center font-sans text-[11px] font-light text-white/42">
              Launch quantity will be limited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
            const imageLeft = scene.imageSide === "left";

            return (
              <div
                key={`scene-${index}`}
                className="absolute inset-0 flex items-center justify-center px-8"
                style={{
                  opacity,
                  transform: `translateY(${30 - local * 60}px)`,
                  pointerEvents: opacity > 0.2 ? "auto" : "none",
                }}
              >
                <div
                  className={`grid w-full max-w-[1180px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] ${
                    imageLeft ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[62vh] overflow-hidden bg-[#120F0C]">
                    {scene.image && (
                      <Image
                        src={scene.image}
                        alt={scene.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-90"
                        style={{
                          transform: `scale(${1.04 - local * 0.02})`,
                          transition: "transform 120ms linear",
                        }}
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                    <p className="absolute bottom-8 left-8 font-sans text-[10px] font-light uppercase tracking-[0.4em] text-white/40">
                      SC / OBJ / 00{index}
                    </p>
                  </div>

                  <div
                    className={`${
                      imageLeft ? "md:pr-10" : "md:pl-10"
                    } text-left`}
                  >
                    <p className="mb-8 font-sans text-[10px] font-light uppercase tracking-[0.45em] text-white/42">
                      {scene.eyebrow}
                    </p>

                    <h2 className="font-serif text-[48px] font-light leading-[0.98] tracking-[-0.055em] text-white md:text-[82px] lg:text-[112px]">
                      {scene.title}
                      {scene.italic && (
                        <>
                          <br />
                          <span className="italic">{scene.italic}</span>
                        </>
                      )}
                    </h2>

                    <p className="mt-8 max-w-[560px] font-sans text-[14px] font-light leading-8 text-white/60">
                      {scene.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <p className="absolute bottom-8 left-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-white/32">
            THE SOCK / 001
          </p>

          <p className="absolute bottom-8 right-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-white/32">
            SOLENNECLUB
          </p>
        </div>
      </section>

      <style>{`
.scrollChevron {
  position: absolute;
  bottom: 20vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  opacity: 0.72;
  pointer-events: none;
}

.scrollChevron span {
  display: block;
  width: 18px;
  height: 18px;
  margin-top: -7px;
  border-right: 1px solid rgba(0, 0, 0, 0.42);
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  transform: rotate(45deg);
  animation: solenneChevron 1.55s ease-in-out infinite;
}
.productGallery {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.productGallery::-webkit-scrollbar {
  display: none;
}

.scrollChevron span:nth-child(1) {
  animation-delay: 0s;
}

.scrollChevron span:nth-child(2) {
  animation-delay: 0.16s;
}

.scrollChevron span:nth-child(3) {
  animation-delay: 0.32s;
}

@keyframes solenneChevron {
  0% {
    opacity: 0.08;
    transform: translateY(-6px) rotate(45deg);
  }

  35% {
    opacity: 0.78;
  }

  70% {
    opacity: 0.26;
    transform: translateY(8px) rotate(45deg);
  }

  100% {
    opacity: 0.08;
    transform: translateY(13px) rotate(45deg);
  }
}
        body.solenne-immersive-active header,
        body.solenne-immersive-active .site-header,
        body.solenne-immersive-active .announcement-bar {
          opacity: 0;
          transform: translateY(-120%);
          pointer-events: none;
          transition: opacity 0.45s ease, transform 0.45s ease;
        }

        body.solenne-immersive-active {
          background: #343229;
        }
      `}</style>
    </main>
  );
}