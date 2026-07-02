"use client";

import { useEffect, useRef, useState } from "react";

const materialArticles = [
  {
    index: "01",
    material: "SILK",
    title: "The Quiet Intelligence of Touch",
    date: "14 JUNE 2026",
    action: "READ ESSAY",
    available: true,
  },
  {
    index: "02",
    material: "COTTON",
    title: "The Architecture of Everyday Comfort",
    date: "18 JUNE 20x26",
    action: "READ ESSAY",
    available: true,
  },
  {
    index: "03",
    material: "CASHMERE",
    title: "Warmth as a Form of Confidence",
    date: "18 JUNE 2026",
    action: "READ ESSAY",
    available: true,
  },
];

const galleryPlaceholders = [
  { label: "IMAGE 03", title: "SILK FILAMENT MACRO", note: "PORTRAIT 4:5" },
  { label: "IMAGE 04", title: "FOOT IN MOTION", note: "PORTRAIT 4:5" },
  { label: "IMAGE 05", title: "FINISHED TEXTILE / SOCK", note: "PORTRAIT 4:5" },
];

const cottonGalleryPlaceholders = [
  { label: "IMAGE 03", title: "COTTON FIBRE DETAIL", note: "PORTRAIT 4:5" },
  { label: "IMAGE 04", title: "EVERYDAY MOVEMENT", note: "PORTRAIT 4:5" },
  { label: "IMAGE 05", title: "FINISHED TEXTILE / SOCK", note: "PORTRAIT 4:5" },
];

const cashmereGalleryPlaceholders = [
  { label: "IMAGE 03", title: "CASHMERE UNDERCOAT", note: "PORTRAIT 4:5" },
  { label: "IMAGE 04", title: "WARMTH / SKIN CONTACT", note: "PORTRAIT 4:5" },
  { label: "IMAGE 05", title: "CASHMERE BLEND SOCK", note: "PORTRAIT 4:5" },
];

const journalScenes = [
  { type: "logo" },
  {
    type: "imageArticle",
    imageLabel: "IMAGE 01",
    imageTitle: "SILK TEXTURE",
    imageNote: "PORTRAIT 4:5",
    eyebrow: "THE FIRST CONTACT",
    quote:
      "“The first luxury is not what the eye sees. It is what the body no longer has to resist.”",
    quoteCredit: "— SOLENNECLUB",
    paragraphs: [
      "The feet live in a demanding space. For many hours each day, they move inside shoes, where heat, moisture, pressure, and repeated contact meet. This is why the material closest to the skin matters.",
      "Silk is a natural protein fibre known for its fine filaments and smooth touch. Against the foot, this surface can feel gentler than a coarse or rigid textile. Friction and moisture are important factors in the development of discomfort and blisters, although no fibre can prevent these problems by itself. The construction of the sock, its fit, its seams, and the shoe remain equally important.[1]",
    ],
    imageSide: "left",
  },
  {
    type: "statement",
    eyebrow: "AN INTELLIGENT COMPOSITION",
    title: "Silk is therefore most convincing",
    italic: "not as a miracle material.",
    statementTail:
      "But as one precise element within an intelligent composition.",
    paragraphs: [
      "As part of a carefully designed blend, silk can contribute to a comfortable environment around the skin. However, warmth, breathability, and moisture management never depend on fibre content alone. Yarn quality, knitting structure, density, thickness, fit, and the small space between the textile and the skin all influence how a sock feels in real life.[2]",
      "Silk is therefore most convincing not as a miracle material, but as one precise element within an intelligent composition.",
    ],
  },
  {
    type: "statement",
    eyebrow: "SENSITIVE SKIN",
    title: "Silk should not be described",
    italic: "as a medical treatment.",
    statementTail: "",
    paragraphs: [
      "Silk is often associated with sensitive skin because of its softness. Research on specialised therapeutic silk garments has produced mixed results. Some smaller studies reported greater comfort and improved quality of life, while a larger randomised trial found no clear improvement in eczema severity.[3]",
      "Silk should not be described as a medical treatment. Its more honest value is sensory. For some people, a smooth and carefully constructed fabric may reduce the feeling of roughness and make daily wear more comfortable.",
    ],
  },
  {
    type: "imageArticle",
    imageLabel: "IMAGE 02",
    imageTitle: "SKIN / FOOT / TEXTILE CONTACT",
    imageNote: "PORTRAIT 4:5",
    eyebrow: "THE PSYCHOLOGICAL DIMENSION",
    quote: "There is also a psychological dimension.",
    quoteCredit: "",
    paragraphs: [
      "Research on “enclothed cognition” suggests that clothing may influence thoughts, feelings, and behaviour through both its symbolic meaning and the physical experience of wearing it. Later research supports the general principle, while also showing that some early findings should be treated with caution.[4]",
      "Confidence does not always begin in the mirror. Sometimes it begins when nothing scratches, presses, or repeatedly asks for attention. A sock that contains silk cannot create confidence on its own. It can, however, remove a small source of distraction.",
    ],
    imageSide: "right",
  },
  { type: "conclusion" },
];


const cottonScenes = [
  { type: "logo" },
  {
    type: "imageArticle",
    imageLabel: "IMAGE 01",
    imageTitle: "COTTON TEXTURE",
    imageNote: "PORTRAIT 4:5",
    eyebrow: "THE ARCHITECTURE OF COMFORT",
    quote:
      "“True comfort does not ask to be noticed. It gives the body one less thing to think about.”",
    quoteCredit: "— SOLENNECLUB",
    paragraphs: [
      "Cotton does not create its value through rarity or display. Its strength comes from familiarity.",
      "It is a natural cellulose fibre that has remained close to the human body for generations. Softness, absorbency, and a recognisable touch have made cotton an essential material for clothing worn directly against the skin.",
      "For the feet, this closeness matters.",
      "Throughout the day, the space inside a shoe is shaped by warmth, pressure, movement, and perspiration. Cotton fibres can absorb moisture into their structure, helping the fabric take in some of the perspiration produced by the skin.[1]",
    ],
    imageSide: "left",
  },
  {
    type: "statement",
    eyebrow: "MOISTURE AND MOVEMENT",
    title: "Absorption and dryness",
    italic: "are not the same.",
    statementTail: "",
    paragraphs: [
      "When cotton becomes heavily saturated, it may retain moisture and dry more slowly than certain performance fibres. In a sock, prolonged dampness can increase friction and discomfort. This is why cotton should not be presented as a complete solution for foot health. The quality of the yarn, the knitting structure, the thickness, the seams, the fit, the shoe, and the activity of the wearer are equally important.[2]",
      "Cotton is often at its best in carefully designed everyday clothing: situations in which softness, stability, and a natural feeling against the skin are more important than extreme athletic performance.",
    ],
  },
  {
    type: "statement",
    eyebrow: "SENSITIVE SKIN",
    title: "“Natural” should therefore not be treated",
    italic: "as a medical promise.",
    statementTail: "",
    paragraphs: [
      "Its relationship with sensitive skin also requires an honest perspective.",
      "Cotton and silk have traditionally been recommended for people with sensitive or eczema-prone skin because they are often experienced as comfortable. Yet no fibre is universally suitable for every person. Research suggests that the texture of the fabric, its construction, chemical finishes, dyes, seams, and washing routine may be as important as the name of the fibre itself.[3]",
      "The value of good cotton is quieter. A smooth fabric may reduce the awareness of roughness. A well-constructed sock may sit more calmly on the foot. A considered material may allow the body to move without constantly negotiating with what it is wearing.",
    ],
  },
  {
    type: "imageArticle",
    imageLabel: "IMAGE 02",
    imageTitle: "SKIN / FOOT / COTTON CONTACT",
    imageNote: "PORTRAIT 4:5",
    eyebrow: "THE PSYCHOLOGICAL DIMENSION",
    quote: "This physical ease can also have a psychological effect.",
    quoteCredit: "",
    paragraphs: [
      "Studies on clothing and cognition suggest that what we wear may influence how we think, feel, and behave through both physical experience and symbolic meaning. The evidence does not show that one material can create confidence. It does suggest that clothing is part of how we experience ourselves.[4]",
      "Cotton represents familiarity, reliability, and continuity. It does not demand attention. It creates a foundation.",
      "Confidence sometimes begins there: not with decoration, but with the quiet certainty that what touches the body has been chosen with care.",
    ],
    imageSide: "right",
  },
  { type: "conclusion" },
];

const cashmereScenes = [
  { type: "logo" },
  {
    type: "imageArticle",
    imageLabel: "IMAGE 01",
    imageTitle: "CASHMERE TEXTURE",
    imageNote: "PORTRAIT 4:5",
    eyebrow: "WARMTH AS PROTECTION",
    quote:
      "“Warmth is not only a temperature. Sometimes, it is the feeling that the body is being taken seriously.”",
    quoteCredit: "— SOLENNECLUB",
    paragraphs: [
      "Cashmere begins with protection.",
      "It comes from the fine, soft undercoat of the cashmere goat, a natural layer formed to help the animal endure cold conditions. This origin gives cashmere its emotional language: warmth, softness, shelter, and quiet strength.[1]",
      "For the human body, especially the feet, warmth is not a small detail.",
      "Feet often spend the day inside a closed environment, shaped by pressure, movement, temperature, and moisture. When the feet feel cold, damp, or irritated, the whole body can become aware of that discomfort. A good sock does not only cover the foot. It helps create a calmer space around it.",
      "Cashmere can contribute to this feeling through softness and thermal comfort. Its fine fibres are often associated with a gentle touch, while knitted cashmere fabrics can provide warmth depending on their structure, thickness, yarn quality, and knitting technique.[2]",
    ],
    imageSide: "left",
  },
  {
    type: "statement",
    eyebrow: "INTELLIGENT DESIGN",
    title: "Cashmere is not automatically perfect",
    italic: "because it is expensive.",
    statementTail: "",
    paragraphs: [
      "This distinction is important.",
      "A poor construction can still feel uncomfortable. A sock that is too warm for the wrong season can create moisture. A beautiful fibre still needs intelligent design.",
      "For foot health, cashmere should therefore be understood as part of a system. The fibre, the blend, the rib structure, the density, the seams, the shoe, and the activity of the wearer all influence comfort. Studies on socks show that fabric moisture behaviour and perceived comfort can differ significantly depending on material composition and construction.[3]",
    ],
  },
  {
    type: "statement",
    eyebrow: "THE BETTER QUESTION",
    title: "How has the cashmere",
    italic: "been used?",
    statementTail: "",
    paragraphs: [
      "In other words, the question is not simply: “Is it cashmere?”",
      "The better question is: “How has the cashmere been used?”",
      "Against the skin, cashmere may offer a sense of softness that feels less aggressive than rougher materials. For some people, this can reduce the awareness of friction or harsh contact. But no natural fibre is universally suitable for every person. Sensitive skin, allergies, heat, sweating, and personal preference must always be considered.",
      "Cashmere’s deeper value is not medical. It is sensory and psychological.",
    ],
  },
  {
    type: "imageArticle",
    imageLabel: "IMAGE 02",
    imageTitle: "SKIN / FOOT / CASHMERE CONTACT",
    imageNote: "PORTRAIT 4:5",
    eyebrow: "THE PSYCHOLOGICAL DIMENSION",
    quote: "This is where confidence can start.",
    quoteCredit: "",
    paragraphs: [
      "Research on clothing and cognition suggests that what we wear can influence how we feel and behave through both physical experience and symbolic meaning. Cashmere carries a strong symbolic language: care, refinement, protection, and self-respect.[4]",
      "A person wearing cashmere may not become more confident because of the fibre itself. But the body may feel more supported. The mind may feel less distracted. The day may begin with a small private signal: I chose something carefully for myself.",
      "Not loudly. Not visibly. Not for approval.",
      "But from the quiet knowledge that even the most hidden layer has been chosen with intention.",
    ],
    imageSide: "right",
  },
  { type: "conclusion" },
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
  const local = mapRange(progress, start, end);

  const fadeIn =
    index === 0 ? 1 : smoothStep(mapRange(local, 0, 0.16));

  const fadeOut =
    index === total - 1
      ? 1
      : 1 - smoothStep(mapRange(local, 0.84, 1));

  return Math.min(fadeIn, fadeOut);
}

function sceneProgress(progress: number, index: number, total: number) {
  const start = index / total;
  const end = (index + 1) / total;
  return mapRange(progress, start, end);
}

type PlaceholderProps = {
  label: string;
  title: string;
  note: string;
  className?: string;
};

function ImagePlaceholder({
  label,
  title,
  note,
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden border border-[#C54A3A] bg-[#C54A3A]/8 ${className}`}
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-[38deg] bg-[#C54A3A]/28" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 -rotate-[38deg] bg-[#C54A3A]/28" />
      </div>

      <div className="relative z-10 px-6 text-center">
        <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.42em] text-[#D76150]">
          {label}
        </p>
        <p className="mt-4 font-serif text-[28px] font-light leading-[1.05] tracking-[-0.02em] text-[#F1B1A8] md:text-[34px]">
          {title}
        </p>
        <p className="mt-5 font-sans text-[9px] font-light uppercase tracking-[0.34em] text-[#D76150]/80">
          {note}
        </p>
      </div>
    </div>
  );
}

export default function JournalPage() {
  const theaterRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState<"silk" | "cotton" | "cashmere">("silk");

  const activeScenes =
    selectedMaterial === "cotton"
      ? cottonScenes
      : selectedMaterial === "cashmere"
        ? cashmereScenes
        : journalScenes;

  const activeGalleryPlaceholders =
    selectedMaterial === "cotton"
      ? cottonGalleryPlaceholders
      : selectedMaterial === "cashmere"
        ? cashmereGalleryPlaceholders
        : galleryPlaceholders;

  const activeMaterial =
    selectedMaterial === "cotton"
      ? "COTTON"
      : selectedMaterial === "cashmere"
        ? "CASHMERE"
        : "SILK";

  const activeNumber =
    selectedMaterial === "cotton"
      ? "002"
      : selectedMaterial === "cashmere"
        ? "003"
        : "001";

  const startReading = () => {
    theaterRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToGalleryImage = (imageIndex: number) => {
    setActiveGalleryImage(imageIndex);

    galleryRef.current?.scrollTo({
      left: galleryRef.current.clientWidth * imageIndex,
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
      <section className="relative flex min-h-screen flex-col justify-center bg-[#F9F8F6] px-8 pb-24 pt-[150px] text-[#1A1918] md:px-14">
        <div
          className="w-full"
          style={{
            width: "min(1180px, 100%)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="mb-14 border-b border-black/12 pb-12 text-center">
            <p className="mb-6 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-black/42">
              SOLENNECLUB JOURNAL
            </p>

            <h1 className="mx-auto whitespace-nowrap font-serif text-[42px] font-light leading-none tracking-[-0.05em] text-[#1A1918] sm:text-[56px] md:text-[78px] lg:text-[92px]">
              Material <span className="italic">Culture.</span>
            </h1>

            <p
              className="mx-auto mt-6 whitespace-nowrap font-serif text-[16px] font-light leading-[1.2] tracking-[-0.02em] text-black/62 sm:text-[20px] md:text-[27px] lg:text-[32px]"
              style={{ marginBottom: "28px" }}
            >
              Essays on the intelligence, feeling, and daily presence of natural fibres.
            </p>
          </div>

          <div className="border-b border-black/12">
            {materialArticles.map((article) => {
              const rowContent = (
                <>
                  <span className="font-sans text-[10px] font-light tracking-[0.3em] text-black/38">
                    {article.index}
                  </span>

                  <div>
                    <h2 className="font-serif text-[42px] font-light leading-none tracking-[-0.035em] md:text-[62px]">
                      {article.material}
                    </h2>

                    <p className="mt-3 font-serif text-[19px] font-light italic tracking-[-0.015em] text-black/54 md:text-[23px]">
                      {article.title}
                    </p>
                  </div>

                  <p className="font-sans text-[10px] font-light uppercase tracking-[0.3em] text-black/48 md:text-right">
                    {article.date}
                  </p>

                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-black/52 md:text-right">
                    {article.action}
                    {article.available ? " →" : ""}
                  </span>
                </>
              );

              if (article.available) {
                return (
                  <button
                    key={article.material}
                    type="button"
                    onClick={() => {
                      setActiveGalleryImage(0);
                      galleryRef.current?.scrollTo({ left: 0 });

                      setSelectedMaterial(
                        article.material === "COTTON"
                          ? "cotton"
                          : article.material === "CASHMERE"
                            ? "cashmere"
                            : "silk"
                      );

                      requestAnimationFrame(() => startReading());
                    }}
                    className="group grid w-full grid-cols-[42px_1fr] gap-x-5 gap-y-5 border-t border-black/12 py-8 text-left transition duration-300 hover:bg-black/[0.035] md:grid-cols-[50px_1fr_180px_150px] md:items-center md:px-5"
                  >
                    {rowContent}
                  </button>
                );
              }

              return (
                <div
                  key={article.material}
                  aria-disabled="true"
                  className="grid w-full grid-cols-[42px_1fr] gap-x-5 gap-y-5 border-t border-black/12 py-8 text-left opacity-48 md:grid-cols-[50px_1fr_180px_150px] md:items-center md:px-5"
                >
                  {rowContent}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section
        id="silk-essay"
        ref={theaterRef}
        className="relative left-1/2 h-[920vh] w-screen -translate-x-1/2 bg-[#D4CEC4] text-[#1A1918]"
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-[#D4CEC4]">
          <div className="absolute inset-0 bg-[#D4CEC4]" />
          <div className="absolute inset-x-0 top-0 h-px bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" />

          {activeScenes.map((scene, index) => {
            const opacity = sceneOpacity(
              progress,
              index,
              activeScenes.length
            );
            const local = sceneProgress(progress, index, activeScenes.length);

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
                    <h2 className="font-serif text-[68px] font-light tracking-[0.08em] text-[#1A1918] md:text-[132px] lg:text-[184px]">
                      {activeMaterial}
                    </h2>
                    <p className="mt-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-black/48">
                      MATERIAL CULTURE / {activeNumber}
                    </p>
                  </div>
                </div>
              );
            }

            if (scene.type === "imageArticle") {
              const imageOnLeft = scene.imageSide === "left";

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
                    className={`grid w-full max-w-[1180px] items-center gap-10 md:grid-cols-[0.92fr_1.08fr] md:gap-14 ${
                      imageOnLeft ? "" : "md:[&>div:first-child]:order-2"
                    }`}
                  >
                    <div className="flex justify-center">
                      <div className="h-[560px] w-full max-w-[470px]">
                        <ImagePlaceholder
                          label={scene.imageLabel ?? ""}
                          title={scene.imageTitle ?? ""}
                          note={scene.imageNote ?? ""}
                        />
                      </div>
                    </div>

                    <div
                      className={`${
                        imageOnLeft ? "md:pl-6" : "md:pr-6"
                      } text-left`}
                    >
                      <p className="mb-7 font-sans text-[10px] font-light uppercase tracking-[0.45em] text-black/48">
                        {scene.eyebrow}
                      </p>

                      <blockquote className="max-w-[650px] font-serif text-[34px] font-light leading-[1.18] tracking-[-0.03em] text-[#1A1918] md:text-[48px]">
                        {scene.quote}
                      </blockquote>

                      {scene.quoteCredit && (
                        <p className="mt-5 font-sans text-[9px] font-light uppercase tracking-[0.35em] text-black/46">
                          {scene.quoteCredit}
                        </p>
                      )}

                      <div className="mt-8 max-w-[680px] space-y-5 font-sans text-[14px] font-light leading-7 text-[#1A1918]/90 md:text-[15px]">
                        {scene.paragraphs?.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (scene.type === "statement") {
              return (
                <div
                  key={`scene-${index}`}
                  className="absolute inset-0 flex items-center justify-center px-8 text-center"
                  style={{
                    opacity,
                    pointerEvents: opacity > 0.2 ? "auto" : "none",
                  }}
                >
                  <div className="mx-auto flex max-w-[1080px] flex-col items-center">
                    <p className="mb-10 font-sans text-[10px] font-light uppercase tracking-[0.45em] text-black/48">
                      {scene.eyebrow}
                    </p>

                    <h2 className="flex flex-col items-center gap-3 font-serif text-[48px] font-light leading-[1.02] tracking-[-0.035em] text-[#1A1918] md:text-[78px] lg:text-[98px]">
                      <span className="block">{scene.title}</span>
                      <span className="block italic">{scene.italic}</span>
                    </h2>

                    {scene.statementTail && (
                      <p className="mt-7 max-w-[720px] font-serif text-[25px] font-light leading-[1.25] tracking-[-0.02em] text-[#1A1918]/84 md:text-[32px]">
                        {scene.statementTail}
                      </p>
                    )}

                    <div className="mt-10 max-w-[760px] space-y-5 font-sans text-[14px] font-light leading-8 text-[#1A1918]/90 md:text-[15px]">
                      {scene.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (scene.type === "conclusion") {
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
                  <div className="grid w-full max-w-[1180px] overflow-hidden border border-black/12 bg-[#D4CEC4] md:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative min-h-[68vh] overflow-hidden border-b border-black/12 bg-[#D4CEC4] md:border-b-0 md:border-r">
                      <div
                        ref={galleryRef}
                        className="journalGallery absolute inset-0 flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
                        onScroll={(event) => {
                          const current = event.currentTarget;
                          const nextIndex = Math.round(
                            current.scrollLeft / current.clientWidth
                          );

                          if (nextIndex !== activeGalleryImage) {
                            setActiveGalleryImage(nextIndex);
                          }
                        }}
                      >
                        {activeGalleryPlaceholders.map((image) => (
                          <div
                            key={image.label}
                            className="h-full min-w-full snap-center p-8"
                          >
                            <ImagePlaceholder
                              label={image.label}
                              title={image.title}
                              note={image.note}
                            />
                          </div>
                        ))}
                      </div>

                      <p className="absolute bottom-8 left-8 font-sans text-[10px] font-light uppercase tracking-[0.4em] text-black/46">
                        {activeMaterial} / 00{activeGalleryImage + 3}
                      </p>

                      <div className="absolute bottom-8 right-8 flex items-center gap-3">
                        {activeGalleryPlaceholders.map((image, imageIndex) => (
                          <button
                            key={image.label}
                            type="button"
                            onClick={() => goToGalleryImage(imageIndex)}
                            className={`h-[6px] w-[34px] transition duration-300 ${
                              activeGalleryImage === imageIndex
                                ? "bg-black/65"
                                : "bg-black/18 hover:bg-black/38"
                            }`}
                            aria-label={`Show ${image.label}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex min-h-[68vh] items-center justify-center px-8 py-12 md:px-14 lg:px-16">
                      <div className="w-full max-w-[600px] text-center">
                        <p className="mb-7 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-black/48">
                          MATERIAL CULTURE · {activeMaterial}
                        </p>

                        <h2 className="font-serif text-[44px] font-light leading-[1.05] tracking-[-0.04em] text-[#1A1918] md:text-[68px]">
                          {selectedMaterial === "cotton" ? (
                            <>
                              Cotton is not about escaping the everyday.
                              <br />
                              <span className="italic">
                                It is about making the everyday worthy of attention.
                              </span>
                            </>
                          ) : selectedMaterial === "cashmere" ? (
                            <>
                              Cashmere is not only luxury.
                              <br />
                              <span className="italic">
                                It is warmth translated into presence.
                              </span>
                            </>
                          ) : (
                            <>
                              This is the quiet value of silk:
                              <br />
                              <span className="italic">
                                quality felt before it is displayed.
                              </span>
                            </>
                          )}
                        </h2>

                        <p className="mx-auto mt-8 max-w-[520px] font-sans text-[15px] font-light leading-8 text-[#1A1918]/90">
                          {selectedMaterial === "cotton"
                            ? "Confidence sometimes begins there: not with decoration, but with the quiet certainty that what touches the body has been chosen with care."
                            : selectedMaterial === "cashmere"
                              ? "At its best, it is warmth translated into discipline, softness translated into strength, and comfort translated into presence."
                              : "When the material respects the body, attention is free to return to movement, presence, and the day ahead."}
                        </p>

                        <div className="mx-auto mt-10 h-px w-14 bg-black/20" />

                        <p className="mt-8 font-sans text-[9px] font-light uppercase tracking-[0.38em] text-black/42">
                          SOLENNECLUB JOURNAL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}

          <p className="absolute bottom-8 left-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-[#1A1918]/32">
            MATERIAL CULTURE / {activeMaterial}
          </p>

          <p className="absolute bottom-8 right-8 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-[#1A1918]/32">
            SOLENNECLUB JOURNAL
          </p>
        </div>
      </section>

      <style>{`
        .scrollChevron {
          position: absolute;
          bottom: 18vh;
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

        .journalGallery {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .journalGallery::-webkit-scrollbar {
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
          background: #D4CEC4;
        }
      `}</style>
    </main>
  );
}
