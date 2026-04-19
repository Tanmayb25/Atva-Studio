"use client";

import HeroServiceRotator from "@/components/HeroServiceRotator";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-viewport video — fixed so it reads as one continuous layer */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" aria-hidden />
        <div className="absolute inset-0 bg-[#1A1A1A]/70" aria-hidden />
      </div>

      {/* Content: fixed side gutters (no lg/xl ramp), left-hug layout so ultra-wide doesn’t balloon side margins */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-end px-5 pb-28 pt-24 sm:px-8 md:px-10 md:pb-36">
        <div className="w-full max-w-xl">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            We make your Brand
            <span className="mt-2 block text-[#FF5733]">Impossible to Ignore</span>
          </h1>

          <HeroServiceRotator />

          <div className="mt-10">
            <button
              type="button"
              onClick={scrollToContact}
              className="rounded-full bg-[#FF5733] px-10 py-4 text-base font-semibold text-white shadow-xl shadow-black/30 transition-[transform,background-color,box-shadow] duration-200 hover:bg-[#FF5733]/90 hover:shadow-lg hover:shadow-[#FF5733]/20 active:scale-[0.98] sm:px-12 sm:py-5"
            >
              Let&apos;s Grow Your Business
            </button>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"
        aria-hidden
      />
    </section>
  );
}
