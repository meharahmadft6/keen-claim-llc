"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = ["/hero-image-final.png"];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative 
        w-full 
        overflow-hidden
        aspect-[16/9]          /* ✅ Mobile: height depends on image */
        sm:aspect-auto
        sm:h-[90vh]            /* ✅ Desktop hero height */
        min-h-[320px]
      "
    >
      {slides.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* ✅ Background blur ONLY for larger screens */}
          <Image
            src={src}
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="
              hidden sm:block
              object-cover 
              scale-110 
              blur-xl 
              opacity-60
            "
          />

          {/* ✅ Main image */}
          <Image
            src={src}
            alt="Healthcare Revenue Management"
            fill
            sizes="100vw"
            className="object-contain"
          />

          {/* ✅ Overlay */}
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      {/* ✅ Desktop-only bottom fade */}
      <div className="hidden sm:block absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
  