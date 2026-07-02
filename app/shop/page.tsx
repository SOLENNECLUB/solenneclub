"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/language/LanguageProvider";

type Tone = {
  name: string;
  hex: string;
};

type Product = {
  code: string;
  name: string;
  price: string;
  material: string;
  origin: string;
  status: string;
  description: string;
  tones: Tone[];
  sizes: string[];
  defaultTone: string;
  defaultSize: string;
  images?: string[];
};

type BagItem = {
  id: string;
  name: string;
  code: string;
  color: string;
  size: string;
  material: string;
  origin: string;
  price: number;
  quantity: number;
  image?: string;
};

const products: Product[] = [
  {
    code: "SC / OBJ / 001",
    name: "The Sock",
    price: "€88",
    material: "Cotton / Cashmere / Silk",
    origin: "Germany / Italy",
    status: "Limited release",
    description:
      "A quiet everyday object shaped around softness, rhythm, and daily use.",
    tones: [
      { name: "Oat Milk", hex: "#E6E4E0" },
      { name: "Cream", hex: "#F1ECE3" },
      { name: "Black", hex: "#1A1918" },
      { name: "Earth Brown", hex: "#8A7966" },
    ],
    sizes: ["36–40", "41–43", "44–46"],
    defaultTone: "Oat Milk",
    defaultSize: "41–43",
    images: [
      "/the-sock-reference.png",
      "/final-gallery-2.jpg",
      "/final-gallery-3.jpg",
      "/final-product.jpg",
    ],
  },
  {
    code: "SC / OBJ / 002",
    name: "The Sock — Cream",
    price: "€88",
    material: "Cotton / Cashmere / Silk",
    origin: "Germany / Italy",
    status: "Coming soon",
    description: "A softer light tone for quiet dressing and calm daily wear.",
    tones: [
      { name: "Cream", hex: "#F1ECE3" },
      { name: "Oat Milk", hex: "#E6E4E0" },
      { name: "Black", hex: "#1A1918" },
    ],
    sizes: ["36–40", "41–43", "44–46"],
    defaultTone: "Cream",
    defaultSize: "41–43",
  },
  {
    code: "SC / OBJ / 003",
    name: "The Sock — Black",
    price: "€88",
    material: "Cotton / Cashmere / Silk",
    origin: "Germany / Italy",
    status: "Coming soon",
    description:
      "A darker object with a calm presence and a more graphic attitude.",
    tones: [
      { name: "Black", hex: "#1A1918" },
      { name: "Oat Milk", hex: "#E6E4E0" },
      { name: "Stone", hex: "#D4CEC4" },
    ],
    sizes: ["36–40", "41–43", "44–46"],
    defaultTone: "Black",
    defaultSize: "41–43",
  },
  {
    code: "SC / OBJ / 004",
    name: "The Sock — Brown",
    price: "€88",
    material: "Cotton / Cashmere / Silk",
    origin: "Germany / Italy",
    status: "Coming soon",
    description:
      "A warm neutral tone designed for softer combinations and quiet contrast.",
    tones: [
      { name: "Earth Brown", hex: "#8A7966" },
      { name: "Oat Milk", hex: "#E6E4E0" },
      { name: "Black", hex: "#1A1918" },
    ],
    sizes: ["36–40", "41–43", "44–46"],
    defaultTone: "Earth Brown",
    defaultSize: "41–43",
  },
  {
    code: "SC / SET / 001",
    name: "The First Set",
    price: "€240",
    material: "Cotton / Cashmere / Silk",
    origin: "Germany / Italy",
    status: "Limited release",
    description: "A considered first set for the beginning of the collection.",
    tones: [
      { name: "Oat Milk", hex: "#E6E4E0" },
      { name: "Cream", hex: "#F1ECE3" },
      { name: "Black", hex: "#1A1918" },
      { name: "Earth Brown", hex: "#8A7966" },
    ],
    sizes: ["36–40", "41–43", "44–46"],
    defaultTone: "Oat Milk",
    defaultSize: "41–43",
  },
  {
    code: "SC / OBJ / 005",
    name: "The Ribbed Sock",
    price: "€92",
    material: "Natural fibre blend",
    origin: "Germany / Italy",
    status: "In development",
    description:
      "A slightly more structured object with a richer visual texture.",
    tones: [
      { name: "Stone", hex: "#D4CEC4" },
      { name: "Cream", hex: "#F1ECE3" },
      { name: "Black", hex: "#1A1918" },
    ],
    sizes: ["36–40", "41–43", "44–46"],
    defaultTone: "Stone",
    defaultSize: "41–43",
  },
];

function ProductCard({ product }: { product: Product }) {
  const [selectedTone, setSelectedTone] = useState(product.defaultTone);
  const [selectedSize, setSelectedSize] = useState(product.defaultSize);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
const { t } = useLanguage();

const productCopy = (() => {
  if (product.code === "SC / OBJ / 001") return t.shop.products.sock;
  if (product.code === "SC / OBJ / 002") return t.shop.products.cream;
  if (product.code === "SC / OBJ / 003") return t.shop.products.black;
  if (product.code === "SC / OBJ / 004") return t.shop.products.brown;
  if (product.code === "SC / SET / 001") return t.shop.products.firstSet;
  return t.shop.products.ribbed;
})();

const translatedStatus = (() => {
  const status = product.status.toLowerCase();

  if (status.includes("limited")) return t.shop.limitedRelease;
  if (status.includes("development")) return t.shop.inDevelopment;
  return t.shop.comingSoon;
})();

  const gallery = product.images ?? [];
  const activeImage = gallery[activeImageIndex];

  const activeTone =
    product.tones.find((tone) => tone.name === selectedTone) ||
    product.tones[0];

  const isDark = activeTone.hex.toLowerCase() === "#1a1918";

  const visualBackground = isDark
    ? "radial-gradient(circle at 50% 62%, rgba(210,204,194,0.20) 0%, rgba(120,112,103,0.16) 30%, rgba(26,25,24,0) 58%), linear-gradient(145deg, #171615 0%, #2A2722 58%, #1A1918 100%)"
    : `radial-gradient(circle at 50% 58%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.45) 34%, rgba(255,255,255,0) 62%), linear-gradient(145deg, ${activeTone.hex} 0%, #F9F8F6 100%)`;

  const sockColor = isDark ? "#77716A" : "#F8F6F2";

  const overlayBg = isDark
    ? "rgba(216, 211, 203, 0.55)"
    : "rgba(249, 248, 246, 0.74)";

  const overlayBorder = isDark
    ? "rgba(249, 248, 246, 0.18)"
    : "rgba(26, 25, 24, 0.13)";

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function increaseQuantity() {
    setQuantity((current) => current + 1);
  }

  function showPrevImage() {
    if (!gallery.length) return;

    setActiveImageIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1
    );
  }

  function showNextImage() {
    if (!gallery.length) return;

    setActiveImageIndex((current) =>
      current === gallery.length - 1 ? 0 : current + 1
    );
  }

  function addToBag() {
    const itemId = `${product.code}-${selectedTone}-${selectedSize}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    let currentBag: BagItem[] = [];

    try {
      const rawBag = window.localStorage.getItem("solenneclub_bag");
      const parsedBag = rawBag ? JSON.parse(rawBag) : [];
      currentBag = Array.isArray(parsedBag) ? parsedBag : [];
    } catch {
      currentBag = [];
    }

    const newItem: BagItem = {
      id: itemId,
      name: productCopy.name,
      code: product.code,
      color: selectedTone,
      size: selectedSize,
      material: product.material,
      origin: product.origin,
      price: Number(product.price.replace(/[^\d.]/g, "")),
      quantity,
      image: product.images?.[0],
    };

    const existingItemIndex = currentBag.findIndex(
      (item) => item.id === itemId
    );

    if (existingItemIndex >= 0) {
      currentBag[existingItemIndex].quantity += quantity;
    } else {
      currentBag.push(newItem);
    }

    const nextBagCount = currentBag.reduce(
      (total, item) => total + item.quantity,
      0
    );

    window.localStorage.setItem("solenneclub_bag", JSON.stringify(currentBag));
    window.localStorage.setItem("solenneclub_bag_count", String(nextBagCount));
    window.dispatchEvent(new Event("solenneclub-bag-updated"));

    setQuantity(1);
  }

  return (
    <article className="group">
      <div
        className="relative aspect-[4/5.65] overflow-hidden border border-[#1A1918]/10 transition duration-500 group-hover:shadow-[0_28px_80px_rgba(26,25,24,0.08)]"
        style={{ background: visualBackground }}
      >
        {/* TOP META */}
        <div
          className={`absolute left-5 top-5 z-30 font-sans text-[9px] font-light uppercase tracking-[0.32em] ${
            isDark ? "text-[#F9F8F6]/38" : "text-[#1A1918]/38"
          }`}
        >
          {product.code}
        </div>

        <div
          className={`absolute right-5 top-5 z-30 font-sans text-[9px] font-light uppercase tracking-[0.32em] ${
            isDark ? "text-[#F9F8F6]/38" : "text-[#1A1918]/38"
          }`}
        >
          {translatedStatus}
        </div>

        {/* PRODUCT VISUAL */}
        <div className="absolute inset-0">
          {activeImage ? (
            <div className="absolute inset-x-8 top-14 bottom-[255px] transition duration-700 group-hover:scale-[1.015]">
              <Image
                src={activeImage}
                alt={productCopy.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-contain"
                priority={product.code === "SC / OBJ / 001"}
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center pb-[230px]">
              {isDark && (
                <div className="absolute h-[44%] w-[54%] rounded-full bg-[#F9F8F6]/12 blur-3xl" />
              )}

              <div
                className="relative h-[53%] w-[34%] rounded-t-[999px] border border-[#1A1918]/10 shadow-[0_24px_90px_rgba(26,25,24,0.14)] transition duration-700 group-hover:scale-[1.03]"
                style={{ backgroundColor: sockColor }}
              />
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-[#F9F8F6]/62 via-[#F9F8F6]/18 to-transparent" />
        </div>

        {/* GALLERY CONTROLS */}
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevImage}
              className="absolute left-5 top-[41%] z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#F9F8F6]/45 bg-[#F9F8F6]/20 font-sans text-[17px] font-light text-[#F9F8F6] backdrop-blur-md transition duration-300 hover:bg-[#F9F8F6]/38"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-5 top-[41%] z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#F9F8F6]/45 bg-[#F9F8F6]/20 font-sans text-[17px] font-light text-[#F9F8F6] backdrop-blur-md transition duration-300 hover:bg-[#F9F8F6]/38"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="absolute left-1/2 top-12 z-40 flex -translate-x-1/2 items-center gap-2">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-[2px] transition duration-300 ${
                    activeImageIndex === index
                      ? "w-8 bg-[#F9F8F6]/80"
                      : "w-4 bg-[#F9F8F6]/35"
                  }`}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* GLASS INFO PANEL */}
        <div className="absolute inset-x-5 bottom-5 z-30">
          <div
            className="border px-4 pb-4 pt-4 backdrop-blur-xl"
            style={{
              background: overlayBg,
              borderColor: overlayBorder,
            }}
          >
            {/* TITLE */}
            <div className="flex items-start justify-between gap-5">
              <div>
                <h2 className="font-serif text-[22px] font-light leading-none tracking-[-0.035em] text-[#1A1918]">
                  {productCopy.name}
                </h2>

                <p className="mt-2 max-w-[390px] font-sans text-[11px] font-light leading-5 text-[#1A1918]/58">
                  {productCopy.description}
                </p>
              </div>

              <p className="pt-1 font-sans text-[11px] font-light tracking-[0.12em] text-[#1A1918]/64">
                {product.price}
              </p>
            </div>

            {/* TONE */}
            <div className="mt-4 border-t border-[#1A1918]/10 pt-3">
              <p className="mb-2 font-sans text-[8px] font-light uppercase tracking-[0.28em] text-[#1A1918]/42">
                {t.shop.selectTone}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {product.tones.map((tone) => {
                  const active = selectedTone === tone.name;

                  return (
                    <button
                      key={tone.name}
                      type="button"
                      onClick={() => setSelectedTone(tone.name)}
                      aria-label={tone.name}
                      className={`flex items-center gap-2 border px-2.5 py-1.5 transition duration-300 ${
                        active
                          ? "border-[#1A1918]/60 bg-[#F9F8F6]/55"
                          : "border-[#1A1918]/12 bg-transparent hover:border-[#1A1918]/32"
                      }`}
                    >
                      <span
                        className="block h-3.5 w-3.5 rounded-full border border-[#1A1918]/18"
                        style={{ backgroundColor: tone.hex }}
                      />

                      <span className="font-sans text-[8px] font-light uppercase tracking-[0.2em] text-[#1A1918]/62">
                        {tone.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SIZE */}
            <div className="mt-4">
              <p className="mb-2 font-sans text-[8px] font-light uppercase tracking-[0.28em] text-[#1A1918]/42">
                {t.shop.selectSize}
              </p>

              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size) => {
                  const active = selectedSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`h-10 border font-sans text-[10px] font-light tracking-[0.16em] transition duration-300 ${
                        active
                          ? "border-[#1A1918] bg-[#1A1918] text-[#F9F8F6]"
                          : "border-[#1A1918]/12 bg-[#F9F8F6]/20 text-[#1A1918]/62 hover:border-[#1A1918]/30"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 grid grid-cols-[112px_1fr] gap-2 border-t border-[#1A1918]/10 pt-3">
              <div className="grid grid-cols-3 border border-[#1A1918]/14 bg-[#F9F8F6]/35">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="h-11 font-sans text-[13px] font-light text-[#1A1918]/58 transition duration-300 hover:bg-[#1A1918] hover:text-[#F9F8F6]"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <div className="flex h-11 items-center justify-center border-x border-[#1A1918]/12 font-sans text-[10px] font-light tracking-[0.18em] text-[#1A1918]/62">
                  {quantity}
                </div>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="h-11 font-sans text-[13px] font-light text-[#1A1918]/58 transition duration-300 hover:bg-[#1A1918] hover:text-[#F9F8F6]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={addToBag}
                className="group/cta flex h-11 items-center justify-between border border-[#1A1918]/45 bg-[#F9F8F6]/50 px-4 font-sans text-[9px] font-light uppercase tracking-[0.3em] text-[#1A1918]/78 transition duration-300 hover:bg-[#1A1918] hover:text-[#F9F8F6]"
              >
                <span>{t.shop.addToBag}</span>
                <span className="transition duration-300 group-hover/cta:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* META */}
            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#1A1918]/10 pt-3">
              <div>
                <p className="mb-1 font-sans text-[8px] font-light uppercase tracking-[0.24em] text-[#1A1918]/38">
                  {t.shop.material}
                </p>

                <p className="font-sans text-[9px] font-light uppercase tracking-[0.16em] text-[#1A1918]/58">
                  {product.material}
                </p>
              </div>

              <div>
                <p className="mb-1 font-sans text-[8px] font-light uppercase tracking-[0.24em] text-[#1A1918]/38">
  {t.shop.origin}
</p>

                <p className="font-sans text-[9px] font-light uppercase tracking-[0.16em] text-[#1A1918]/58">
                  {product.origin}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ShopPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F9F8F6] text-[#1A1918]">
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          {/* HEADER */}
          <div
            className="mb-12 border-b border-[#1A1918]/10 pb-10 text-center"
            style={{ paddingTop: "140px" }}
          >
            <p className="mb-5 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-[#1A1918]/38">
              {t.shop.collection}
            </p>

            <h1 className="mx-auto w-full overflow-visible whitespace-nowrap font-serif text-[clamp(36px,5.4vw,78px)] font-light leading-[1.25] tracking-[-0.04em] text-[#1A1918]">
              {t.shop.collectionTitleOne}{" "}
              <span className="italic text-[#1A1918]/55">
                {t.shop.collectionTitleTwo}
              </span>
            </h1>

            <p className="mx-auto mt-5 w-full whitespace-nowrap text-center font-sans text-[14px] font-light leading-8 text-[#1A1918]/58">
              {t.shop.collectionIntro}
            </p>
          </div>

          {/* PRODUCTS */}
          <div
            className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
            style={{ marginTop: "30px" }}
          >
            {products.map((product) => (
              <ProductCard key={product.code} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}