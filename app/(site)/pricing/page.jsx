import Image from "next/image";
import axios from "axios";
import pricingImage from '/public/pricingImage.jpg';
import PricingDisplay from "@/app/components/PricingDisplay";

export const metadata = {
  title: "Pricing for Dumpster Rentals in Tampa, FL",
  description: "Dumpster rental pricing for Tampa, FL. We offer 10, 15, and 20 yard dumpsters for rent.",
  alternates: {
    canonical: "https://www.competitiveedgedumpsters.com/pricing",
  },
};

export default async function Pricing() {
  return (
    <section className="w-full bg-gray-50 pb-20">
      <div className="w-screen h-[65vh] relative">
        <div className="absolute top-0 left-0 w-full h-[65vh] bg-gradient-to-t from-black to-transparent z-10" />
        <Image
          className="absolute inset-0 z-1"
          src={pricingImage}
          alt="/"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="pt-36 sm:pt-0 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 z-[10]">
            PRICING
          </h1>
          <p className="text-center text-2xl md:text-4xl lg:text-4xl text-white font-medium z-[10]">
            ORDER ONLINE BELOW 
          </p>
        </div>
      </div>

              {/* Pricing Section Card */}
      <div className="mx-auto max-w-4xl text-center mt-10 items-center">
          <h2 className="text-3xl font-semibold leading-7 text-[#f1592a]">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right dumpster for&nbsp;you
          </p> 
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          Check out all the information to make the correct decision or give us a call!
        </p>
        </div>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1040px] items-center mx-auto">
        <PricingDisplay />
      </div>
      <div className="w-full mt-20 bg-gray-50 grid gap-8 grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto">
      <div className="border-2 flex sm:w-full w-3/4 mx-auto border-gray-500 rounded-lg shadow-xl">
          <Image
          src={'/10yardwithtext.jpg'}
          alt="Dumpster Image"
          width={1000}
          height={1000}
          />
      </div>
      <div className="border-2 flex sm:w-full w-3/4 mx-auto border-gray-500 rounded-lg shadow-xl">
          <Image
          src={'/15yardwithtext.jpg'}
          alt="Dumpster Image"
          width={1000}
          height={1000}
          />
      </div>
    </div>
    <div className="w-full bg-gray-50 mt-8 grid gap-8 grid-cols-1 max-w-6xl mx-auto">
       <div className="border-2 flex sm:w-1/2 w-3/4 mx-auto border-gray-500 rounded-lg shadow-xl">
          <Image
          src={'/20yardwithtext.jpg'}
          alt="Dumpster Image"
          width={600}
          height={600}
          />
      </div>
    </div>
   
    </section>
  );
}
