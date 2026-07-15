
"use client";

import HeroServiceRotator from "@/components/HeroServiceRotator";
import { useEffect, useState } from "react";

const CAROUSEL_IMAGES = [
  "/hero/content.webp",
  "/hero/strategy.webp",
  "/hero/socialmedia2.webp",
  "/hero/cowork.webp",
  "/hero/socialmedia.webp",
];

const INTERVAL_MS = 4000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % CAROUSEL_IMAGES.length;
      });
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Carousel background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {CAROUSEL_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden
            loading={i === current ? "eager" : "lazy"}
            decoding="async"
            className={[
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
              i === current ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        ))}
        <div className="absolute inset-0 bg-black/20" aria-hidden />
        <div className="absolute inset-0 bg-[#1A1A1A]/70" aria-hidden />
      </div>

      {/* Content */}
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

          {/* Dot indicators */}
          <div className="mt-8 flex gap-2">
            {CAROUSEL_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => { setPrev(current); setCurrent(i); }}
                className={[
                  "h-1.5 rounded-full transition-all duration-300",
                  i === current
                    ? "w-6 bg-[#FF5733]"
                    : "w-1.5 bg-white/40 hover:bg-white/60",
                ].join(" ")}
              />
            ))}
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