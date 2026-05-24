export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white blur-[140px]" />
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        <p className="mb-6 text-xs uppercase tracking-[0.7em] text-neutral-400">
          SOLENNECLUB
        </p>

        <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-[0.04em] text-[#f5f1eb] md:text-7xl">
          Etwas Besonderes entsteht.
        </h1>

        <p className="mt-8 text-sm tracking-[0.35em] text-neutral-500 md:text-base">
          Demnächst online.
        </p>

      </section>
    </main>
  );
}