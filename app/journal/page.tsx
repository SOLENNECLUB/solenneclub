"use client";

import { useState } from "react";
function smoothScrollToId(id: string, duration = 760, offset = 120) {
  const element = document.getElementById(id);
  if (!element) return;

  const start = window.scrollY;
  const target = element.getBoundingClientRect().top + window.scrollY - offset;
  const distance = target - start;
  const startTime = performance.now();

  const easeOutCubic = (value: number) => {
    return 1 - Math.pow(1 - value, 3);
  };

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, start + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}

const essays = [
  {
    number: "01",
    title: "The Pace of Ordinary Things",
    category: "Slow Living",
    description:
      "A reflection on quieter routines, familiar textures, and the objects that move with us through the day.",
    content: [
      "There is a quiet rhythm inside ordinary things. The first cup in the morning, the fabric that touches the skin, the familiar path from one room to another.",
      "Slow living is not about doing less for the sake of less. It is about noticing what stays close, what repeats, and what gently shapes the way we move through the day.",
      "Some objects do not ask for attention. They become part of the background of life. And sometimes, those are the objects that matter most.",
    ],
  },
  {
    number: "02",
    title: "Before It Is Seen",
    category: "Material",
    description:
      "On the intimacy of touch, the first layer of comfort, and why softness can be a quiet form of design.",
    content: [
      "Before an object is seen, it is felt. Against the skin, material becomes more than a surface. It becomes temperature, softness, weight, and memory.",
      "Natural fibers carry a different kind of presence. Cotton breathes, cashmere warms, silk softens. Together, they create a quiet language of comfort.",
      "Design does not always need to announce itself. Sometimes it begins with the smallest contact between the body and the day.",
    ],
  },
  {
    number: "03",
    title: "Objects With Patience",
    category: "Philosophy",
    description:
      "A note on limited releases, careful production, and the value of making fewer things with greater intention.",
    content: [
      "Patience is a form of design. It appears in the decision to make fewer things, to choose better materials, and to let an object arrive only when it is ready.",
      "A limited release is not only about quantity. It is about attention. It asks the maker to slow down and the wearer to value what is made with care.",
      "In a world of constant arrival, an object with patience feels different. It does not rush to be owned. It waits to become part of a life.",
    ],
  },
];

export default function JournalPage() {
  const [openEssay, setOpenEssay] = useState<string | null>(null);

  return (
    <main className="site-shell min-h-screen bg-[#F9F8F6] text-[#1A1918] shadow-2xl">
      {/* HERO */}
<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 py-24">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,25,24,0.045),transparent_44%)]" />

  <div className="relative mx-auto grid w-full max-w-[1040px] items-center gap-14 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
    <div className="justify-self-center md:-translate-x-5 lg:-translate-x-8">
      <h1 className="font-serif text-[56px] font-light leading-[0.96] tracking-[-0.052em] text-[#1A1918] md:text-[90px] lg:text-[108px]">
        The
        <br />
        <span className="italic">Journal</span>
      </h1>
    </div>

    <div className="max-w-[520px] justify-self-center md:translate-x-4 lg:translate-x-6">
      <h2 className="font-serif text-[42px] font-light leading-[1.02] tracking-[-0.045em] text-[#1A1918] md:text-[68px]">
        Thoughts on
        <br />
        <span className="italic">slow living.</span>
      </h2>

      <p className="mt-7 max-w-[500px] font-sans text-[15px] font-light leading-8 text-black/58">
        Essays on rhythm, material, comfort, and the quiet decisions that shape
        everyday life.
      </p>

      <button
  type="button"
  onClick={() => smoothScrollToId("essays", 760, 120)}
  className="group mt-9 inline-flex flex-col items-start bg-transparent p-0 font-sans text-[11px] font-light uppercase tracking-[0.34em] text-black/72 transition duration-300 hover:text-black"
>
  <span className="inline-flex items-center gap-5">
    Read The Journal
    <span>→</span>
  </span>

  <span className="mt-3 h-px w-full bg-black/28 transition-all duration-500 group-hover:w-[132%] group-hover:bg-black/70" />
</button>
    </div>
  </div>

  <div className="absolute bottom-20 left-8 right-8 hidden h-px bg-black/8 md:block" />

  <p className="absolute bottom-8 left-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-black/28">
    SOLENNECLUB / JOURNAL / 001
  </p>

  <p className="absolute bottom-8 right-8 hidden font-sans text-[10px] font-light uppercase tracking-[0.42em] text-black/28 md:block">
    NOTES ON MATERIAL, RHYTHM AND DAILY LIFE
  </p>
</section>
      {/* ESSAYS */}
<section
  id="essays"
  className="scroll-mt-[120px] border-t border-black/10 px-8 pt-24 pb-16 md:pt-28 md:pb-20"
>
  <div
    className="grid w-full"
    style={{
      gridTemplateColumns: "minmax(40px, 1fr) minmax(0, 1040px) minmax(40px, 1fr)",
    }}
  >
    <div className="col-start-2">
      <div
  className="mb-14 flex flex-col items-center text-center"
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
  }}
>
  <p className="mb-6 font-sans text-[10px] font-light uppercase tracking-[0.46em] text-black/35">
    Essays
  </p>

  <h2 className="mx-auto w-full max-w-[1080px] text-center font-serif text-[38px] font-light leading-[1.05] tracking-[-0.04em] text-[#1A1918] md:whitespace-nowrap md:text-[58px] lg:text-[64px]">
  Notes for a <span className="italic">slower wardrobe.</span>
</h2>
</div>
      <div className="mx-auto w-full max-w-[980px] border-t border-black/10">
        {essays.map((essay) => {
  const isOpen = openEssay === essay.number;

  return (
    <article
      key={essay.number}
      className="group border-b border-black/10 transition duration-500 hover:bg-black/[0.025]"
    >
      <button
        type="button"
        onClick={() => setOpenEssay(isOpen ? null : essay.number)}
        className="grid w-full gap-8 py-11 text-left transition duration-500 md:grid-cols-[72px_150px_minmax(0,1fr)_92px] md:items-center md:py-12"
      >
        <p className="font-sans text-[10px] font-light uppercase tracking-[0.34em] text-black/32">
          {essay.number}
        </p>

        <p className="font-sans text-[10px] font-light uppercase tracking-[0.34em] text-black/38">
          {essay.category}
        </p>

        <div>
          <h3 className="font-serif text-[34px] font-light leading-[1.05] tracking-[-0.035em] text-[#1A1918] transition duration-500 group-hover:translate-x-1 md:text-[50px]">
            {essay.title}
          </h3>

          <p className="mt-5 max-w-[660px] font-sans text-[14px] font-light leading-8 text-black/56">
            {essay.description}
          </p>
        </div>

        <span className="w-fit border-b border-transparent pb-2 font-sans text-[11px] font-light uppercase tracking-[0.32em] text-black/42 transition duration-500 group-hover:border-black/38 group-hover:text-black md:justify-self-end">
          {isOpen ? "Close ↑" : "Read →"}
        </span>
      </button>

      <div
  className={`overflow-hidden transition-all duration-700 ease-out ${
    isOpen ? "max-h-[860px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="flex w-full justify-center">
    <div className="w-full max-w-[720px] px-4 pb-24 pt-10 text-center md:pb-28 md:pt-12">
      <div className="mx-auto mb-9 h-px w-[96px] bg-black/10" />

      <p className="mb-9 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-black/30">
        Open Note / {essay.number}
      </p>

      <div className="space-y-8">
        {essay.content.map((paragraph) => (
          <p
            key={paragraph}
            className="font-sans text-[16px] font-light leading-9 text-black/62"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mx-auto mt-12 h-px w-[120px] bg-black/8" />
    </div>
  </div>
</div>
    </article>
  );
})}
      </div>
    </div>
  </div>
</section>

{/* CLOSING NOTE */}
<section className="flex min-h-[44vh] items-center justify-center px-8 py-20 md:py-24">
  <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center border-t border-black/10 pt-16 text-center md:pt-20">
    <p className="mb-7 font-sans text-[10px] font-light uppercase tracking-[0.46em] text-black/30">
      Archive
    </p>

    <h2 className="mx-auto w-full max-w-[860px] text-center font-serif text-[42px] font-light leading-[1.08] tracking-[-0.04em] text-[#1A1918] md:text-[68px]">
      Written slowly,
      <br />
      <span className="italic">for objects made with intention.</span>
    </h2>
  </div>
</section>
</main>
  );
}