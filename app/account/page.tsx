export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1A1918]">
      <section className="flex min-h-screen items-center justify-center px-8 pb-20 pt-[170px]">
        <div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center">
          <p className="mb-9 font-sans text-[10px] font-light uppercase tracking-[0.46em] text-black/35">
            SOLENNECLUB Account
          </p>

          <h1 className="font-serif text-[50px] font-light leading-[1.02] tracking-[-0.045em] text-[#1A1918] md:text-[78px]">
            Your account,
            <br />
            <span className="italic">quietly connected.</span>
          </h1>

          <p className="mt-9 max-w-[500px] font-sans text-[14px] font-light leading-8 text-black/58">
            Sign in to view your orders, manage your details, and continue your
            walk with SOLENNECLUB.
          </p>

          <div className="mt-14 w-full max-w-[460px]">
            <label className="mb-4 block text-center font-sans text-[10px] font-light uppercase tracking-[0.36em] text-black/36">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="h-14 w-full border border-black/18 bg-transparent px-5 text-center font-sans text-[13px] font-light tracking-[0.08em] text-[#1A1918] outline-none transition duration-300 placeholder:text-black/28 focus:border-black/45"
            />

            <a
  href="https://account.solenneclub.com"
  className="mt-4 flex h-14 w-full items-center justify-center border border-black/35 bg-transparent font-sans text-[11px] font-light uppercase tracking-[0.3em] text-black/72 transition duration-300 hover:border-black hover:bg-[#1A1918] hover:text-white"
>
  Continue with email →
</a>

            <p className="mx-auto mt-6 max-w-[380px] font-sans text-[11px] font-light leading-6 text-black/42">
              A verification code will be sent to your email. No password
              required.
            </p>
          </div>

          <div className="mt-10 h-px w-full max-w-[460px] bg-black/10" />

          <p className="mt-7 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-black/28">
            Orders / Details / Quiet Access
          </p>
        </div>
      </section>
    </main>
  );
}