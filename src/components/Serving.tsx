import Image from "next/image";

const Serving = () => {
  return (
    <section className="relative h-[450px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/building.jpg"
        alt="Serving the community"
        fill
        priority
        className="object-cover"
      />

      {/* ✅ Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ✅ Gradient overlay (premium look) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold  text-center drop-shadow-xl max-w-7xl">
          SERVING THOSE SERVING THE COMMUNITY
        </h1>
      </div>
    </section>
  );
};

export default Serving;
