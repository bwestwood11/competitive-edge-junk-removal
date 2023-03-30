import Image from "next/image";
import dumpster3 from "../../public/dumpster3.jpg";

export default function Pricing() {
  return (
    <section className="w-full">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-t from-black to-transparent z-10" />
        <Image
          className="absolute inset-0 z-1"
          src={dumpster3}
          alt="/"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="pt-36 sm:pt-0 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-white mb-8 z-[100]">
            PRICING
          </h1>
          <p className="text-center text-2xl md:text-2xl lg:text-4xl text-white font-medium z-[100]">
            Contact Competitive Edge Junk Removal today for your free estimate!
          </p>
        </div>
      </div>
    </section>
  );
}
