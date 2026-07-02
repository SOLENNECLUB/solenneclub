"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type BagItem = {
  id: string;
  name: string;
  code: string;
  color: string;
  size: string;
  material: string;
  price: number;
  quantity: number;
  image?: string;
};

export default function CartPage() {
  const [items, setItems] = useState<BagItem[]>([]);

  useEffect(() => {
    try {
      const rawBag = window.localStorage.getItem("solenneclub_bag");
      const bagItems = rawBag ? JSON.parse(rawBag) : [];

      setItems(Array.isArray(bagItems) ? bagItems : []);
    } catch {
      setItems([]);
    }
  }, []);

  function syncBag(nextItems: BagItem[]) {
    setItems(nextItems);
    window.localStorage.setItem("solenneclub_bag", JSON.stringify(nextItems));
    window.dispatchEvent(new Event("solenneclub-bag-updated"));
  }

  function increaseQuantity(id: string) {
    const nextItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    syncBag(nextItems);
  }

  function decreaseQuantity(id: string) {
    const nextItems = items.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );

    syncBag(nextItems);
  }

  function removeItem(id: string) {
    const nextItems = items.filter((item) => item.id !== id);
    syncBag(nextItems);
  }

  const subtotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const estimatedShipping = subtotal >= 200 || subtotal === 0 ? 0 : 12;
  const total = subtotal + estimatedShipping;

  return (
    <main className="min-h-screen bg-[#F9F8F6] text-[#1A1918]">
      <section className="px-6 pb-24 md:px-10 lg:px-16" style={{ paddingTop: "130px" }}>
        <div className="mx-auto max-w-[1500px]">
          {/* HEADER */}
          <header className="mb-16 border-b border-[#1A1918]/10 pb-12 text-center">
            <p className="mb-6 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-[#1A1918]/38">
              SOLENNECLUB Bag
            </p>

            <h1
  className="mx-auto font-serif text-[52px] font-light tracking-[-0.045em] text-[#1A1918] md:text-[78px] lg:text-[92px]"
  style={{
    lineHeight: "1.22",
    paddingBottom: "20px",
  }}
>
  <span className="inline-block">
    Your bag,{" "}
    <span className="italic text-[#1A1918]/55">quietly held.</span>
  </span>
</h1>
          </header>

          {items.length === 0 ? (
            <section className="relative left-1/2 w-[760px] max-w-[calc(100vw-48px)] -translate-x-1/2 border border-[#1A1918]/10 bg-[#F8F5EF] px-8 py-20 text-center">
              <p className="mb-6 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-[#1A1918]/38">
                Empty bag
              </p>

              <h2 className="font-serif text-[46px] font-light leading-[1.02] tracking-[-0.04em] text-[#1A1918] md:text-[64px]">
                Nothing is held yet.
              </h2>

              <div className="mt-6 flex w-full justify-center">
  <p className="w-[520px] max-w-full text-center font-sans text-[14px] font-light leading-8 text-[#1A1918]/58">
    Begin with one quiet object, shaped around comfort, material, and the
    <br />
    daily ritual of walking well.
  </p>
</div>

              <Link
                href="/shop"
                className="mt-10 inline-flex h-10 items-center justify-center border border-[#1A1918] px-10 font-sans text-[10px] font-light uppercase tracking-[0.34em] text-[#1A1918] transition duration-300 hover:bg-[#1A1918] hover:text-[#F9F8F6]"
              >
                Return to collection →
              </Link>
            </section>
          ) : (
            <section
  className="relative left-1/2 flex -translate-x-1/2 flex-col gap-10 pb-24"
  style={{
    width: "min(1180px, calc(100vw - 96px))",
  }}
>
              {/* ITEMS */}
              <div className="w-full space-y-8">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="grid gap-6 border-b border-[#1A1918]/10 pb-8 md:grid-cols-[180px_1fr]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden border border-[#1A1918]/10 bg-[#E6E4E0]/45">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute left-1/2 top-1/2 h-[52%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-t-full border border-[#1A1918]/12 bg-[#F9F8F6]/30" />
                      )}

                      <div className="absolute inset-0 bg-[#1A1918]/5" />
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-5 flex items-start justify-between gap-6">
                          <div>
                            <p className="mb-3 font-sans text-[10px] font-light uppercase tracking-[0.34em] text-[#1A1918]/38">
                              {item.code}
                            </p>

                            <h2 className="font-serif text-[38px] font-light leading-none tracking-[-0.035em] text-[#1A1918] md:text-[48px]">
                              {item.name}
                            </h2>
                          </div>

                          <p className="font-sans text-[12px] font-light tracking-[0.12em] text-[#1A1918]/62">
                            €{item.price * item.quantity}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[#1A1918]/10 pt-5 font-sans text-[10px] font-light uppercase tracking-[0.26em] md:grid-cols-4">
                          <div>
                            <p className="mb-2 text-[#1A1918]/30">Colour</p>
                            <p className="text-[#1A1918]/62">{item.color}</p>
                          </div>

                          <div>
                            <p className="mb-2 text-[#1A1918]/30">Size</p>
                            <p className="text-[#1A1918]/62">{item.size}</p>
                          </div>

                          <div>
                            <p className="mb-2 text-[#1A1918]/30">Material</p>
                            <p className="text-[#1A1918]/62">{item.material}</p>
                          </div>

                          <div>
                            <p className="mb-2 text-[#1A1918]/30">Origin</p>
                            <p className="text-[#1A1918]/62">Germany / Italy</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                        <div className="flex h-11 items-center border border-[#1A1918]/12">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="h-full w-11 font-sans text-[15px] font-light text-[#1A1918]/58 transition hover:bg-[#1A1918] hover:text-[#F9F8F6]"
                          >
                            -
                          </button>

                          <div className="flex h-full w-14 items-center justify-center border-x border-[#1A1918]/12 font-sans text-[10px] font-light tracking-[0.24em] text-[#1A1918]/62">
                            {item.quantity}
                          </div>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            className="h-full w-11 font-sans text-[15px] font-light text-[#1A1918]/58 transition hover:bg-[#1A1918] hover:text-[#F9F8F6]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="font-sans text-[10px] font-light uppercase tracking-[0.3em] text-[#1A1918]/42 underline underline-offset-4 transition hover:text-[#1A1918]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                ))}

                <Link
                  href="/shop"
                  className="inline-flex font-sans text-[10px] font-light uppercase tracking-[0.34em] text-[#1A1918]/50 transition hover:text-[#1A1918]"
                >
                  ← Continue shopping
                </Link>
              </div>

              {/* SUMMARY */}
              <aside
  className="relative left-1/2 mt-12 w-[760px] max-w-[calc(100vw-96px)] -translate-x-1/2 border border-[#1A1918]/10 bg-[#F8F5EF] p-7 md:p-9"
>
                <p className="mb-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-[#1A1918]/38">
                  Order summary
                </p>

                <div className="space-y-5 border-y border-[#1A1918]/10 py-6 font-sans text-[12px] font-light text-[#1A1918]/62">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>€{subtotal}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Estimated shipping</span>
                    <span>
                      {estimatedShipping === 0
                        ? "Complimentary"
                        : `€${estimatedShipping}`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Estimated tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-[#1A1918]/10 py-6">
                  <p className="font-sans text-[10px] font-light uppercase tracking-[0.34em] text-[#1A1918]/42">
                    Total
                  </p>

                  <p className="font-serif text-[38px] font-light tracking-[-0.035em] text-[#1A1918]">
                    €{total}
                  </p>
                </div>

                <button
                  type="button"
                  className="group mt-8 flex h-16 w-full items-center justify-between border border-[#1A1918] px-6 font-sans text-[11px] font-light uppercase tracking-[0.34em] text-[#1A1918] transition duration-300 hover:bg-[#1A1918] hover:text-[#F9F8F6]"
                >
                  <span>Checkout</span>
                  <span className="text-xl transition duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </button>

                <p className="mt-5 font-sans text-[11px] font-light leading-6 text-[#1A1918]/42">
                  Checkout is prepared visually. Shopify connection can be added
                  later without changing the design language.
                </p>

                <div className="mt-10 border-t border-[#1A1918]/10 pt-6">
                  <p className="mb-4 font-sans text-[10px] font-light uppercase tracking-[0.34em] text-[#1A1918]/38">
                    Quiet note
                  </p>

                  <p className="font-serif text-[28px] font-light leading-[1.1] tracking-[-0.035em] text-[#1A1918]/72">
                    Objects are chosen slowly.
                    <br />
                    <span className="italic">
                      Comfort begins before movement.
                    </span>
                  </p>
                </div>
              </aside>

<div className="h-24 md:h-4" aria-hidden="true" />

</section>
          )}
        </div>
      </section>
    </main>
  );
}