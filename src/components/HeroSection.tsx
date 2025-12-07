"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = ["/hero-image-final.png"];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [graphLoaded, setGraphLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 60000);

    // Trigger graph animation after component mounts
    const timer = setTimeout(() => {
      setGraphLoaded(true);
    }, 300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Image First on Mobile */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white/40">
              {slides.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Background blur */}
                  <Image
                    src={src}
                    alt="Background"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover scale-110 blur-xl opacity-20"
                  />

                  {/* Main image */}
                  <Image
                    src={src}
                    alt="Healthcare Revenue Management"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-red-600/10" />

                  {/* American flag corner badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 shadow-lg">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-4 sm:w-8 sm:h-5 bg-gradient-to-r from-red-500 via-white to-blue-600 rounded shadow"></div>
                      <span className="text-xs font-bold text-gray-800">
                        USA
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats overlay on image - Mobile optimized */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-5/6 sm:w-4/5">
              <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white p-3 sm:p-4 rounded-xl shadow-xl">
                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold">
                      99%
                    </div>
                    <div className="text-xs opacity-90">Claim Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold">
                      40%
                    </div>
                    <div className="text-xs opacity-90 whitespace-nowrap">
                      Avg. Revenue Increase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold">
                      100M+
                    </div>
                    <div className="text-xs opacity-90">Recovered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graph After Image on Mobile */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 order-2 lg:order-2">
            {/* Dramatic Before/After Growth Graph - Mobile Optimized */}
            <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Revenue Transformation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Before & After Implementing Keen Claim LLC
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 animate-pulse">
                    ↑ 68.5%
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    Average Revenue Growth
                  </div>
                </div>
              </div>

              {/* Responsive Growth Visualization */}
              <div className="relative h-48 sm:h-56">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-t border-gray-200"></div>
                  ))}
                </div>

                {/* BEFORE Section */}
                <div className="absolute left-0 bottom-0 w-1/2 h-full px-1 sm:px-2">
                  <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                      BEFORE
                    </div>
                  </div>

                  {/* Low bars for "Before" - Animate from bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 flex items-end justify-around px-1 sm:px-4">
                    {[
                      { month: "Jan", value: 45, delay: 0 },
                      { month: "Feb", value: 42, delay: 100 },
                      { month: "Mar", value: 48, delay: 200 },
                      { month: "Apr", value: 44, delay: 300 },
                      { month: "May", value: 47, delay: 400 },
                      { month: "Jun", value: 46, delay: 500 },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">
                          {item.month}
                        </div>
                        <div className="relative w-4 sm:w-6 md:w-8 group">
                          <div
                            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 md:w-6 bg-gradient-to-t from-gray-400 to-gray-600 rounded-t-lg transition-all duration-700 opacity-70 ${
                              graphLoaded ? "translate-y-0" : "translate-y-full"
                            }`}
                            style={{
                              height: `${item.value}%`,
                              transitionDelay: `${item.delay}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AFTER Section */}
                <div className="absolute right-0 bottom-0 w-1/2 h-full px-1 sm:px-2">
                  <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                      AFTER
                    </div>
                  </div>

                  {/* High bars for "After" - Animate from bottom with sequential delays */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 flex items-end justify-around px-1 sm:px-4">
                    {[
                      { month: "Jul", value: 76, delay: 600 },
                      { month: "Aug", value: 82, delay: 700 },
                      { month: "Sep", value: 89, delay: 800 },
                      { month: "Oct", value: 94, delay: 900 },
                      { month: "Nov", value: 100, delay: 1000 },
                      { month: "Dec", value: 112, delay: 1100 },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="text-emerald-700 text-xs sm:text-sm mb-1 sm:mb-2 font-semibold">
                          {item.month}
                        </div>
                        <div className="relative w-4 sm:w-6 md:w-8 group">
                          <div
                            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 md:w-6 rounded-t-lg transition-all duration-700 hover:scale-110 cursor-pointer bg-gradient-to-t from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20 ${
                              graphLoaded ? "translate-y-0" : "translate-y-full"
                            }`}
                            style={{
                              height: `${item.value}%`,
                              transitionDelay: `${item.delay}ms`,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-300 to-emerald-500 rounded-t-lg"></div>
                          </div>
                          <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity border border-emerald-500 whitespace-nowrap">
                            +{item.value}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Growth Arrow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block">
                  <div className="flex flex-col items-center">
                    <div className="text-gray-900 text-sm sm:text-lg font-bold mb-1 sm:mb-2">
                      IMPACT
                    </div>
                    <div className="animate-bounce">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-emerald-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                    <div className="text-emerald-600 text-xs sm:text-sm font-semibold mt-1 sm:mt-2">
                      68.5% Growth
                    </div>
                  </div>
                </div>

                {/* Growth Line - Animate from left to right */}
                <div className="absolute left-1/4 right-1/4 bottom-16 sm:bottom-20 overflow-hidden">
                  <div
                    className={`h-0.5 bg-gradient-to-r from-gray-400 via-emerald-400 to-emerald-500 opacity-50 transition-all duration-1000 ${
                      graphLoaded ? "translate-x-0" : "-translate-x-full"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Key Metrics Comparison */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <div
                  className={`text-center p-3 bg-red-50 rounded-lg transition-all duration-500 ${
                    graphLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "1200ms" }}
                >
                  <div className="text-gray-600 text-xs">Before Average</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    46%
                  </div>
                  <div className="text-gray-500 text-xs">
                    Revenue Collection
                  </div>
                </div>
                <div
                  className={`text-center p-3 bg-emerald-50 rounded-lg transition-all duration-500 ${
                    graphLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "1300ms" }}
                >
                  <div className="text-emerald-700 text-xs">After Average</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-800">
                    78%
                  </div>
                  <div className="text-emerald-600 text-xs">
                    Revenue Collection
                  </div>
                </div>
                <div
                  className={`text-center p-3 bg-red-50 rounded-lg transition-all duration-500 ${
                    graphLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "1400ms" }}
                >
                  <div className="text-gray-600 text-xs">Before Denials</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    22%
                  </div>
                  <div className="text-gray-500 text-xs">
                    Claim Rejection Rate
                  </div>
                </div>
                <div
                  className={`text-center p-3 bg-emerald-50 rounded-lg transition-all duration-500 ${
                    graphLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "1500ms" }}
                >
                  <div className="text-emerald-700 text-xs">After Denials</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-800">
                    3%
                  </div>
                  <div className="text-emerald-600 text-xs">
                    Claim Rejection Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
