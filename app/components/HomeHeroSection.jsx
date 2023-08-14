import Image from "next/image";
import Link from "next/link";
import { RiRecycleFill } from "react-icons/ri";
import {GiSmartphone} from 'react-icons/gi'
import { MdOutlineAttachMoney } from "react-icons/md";

const HomeHeroSection = () => {
  return (
    <div className="h-screen bg-gray-50 w-full relative isolate z-5" style={{pointerEvents: 'none'}}>
 <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative -z-10 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffa256] to-[#e08700] opacity-30 sm:left-[calc(90%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
 
      <div className="absolute inset-0" style={{pointerEvents: 'all'}}>
        <div className="max-w-7xl flex-col sm:flex sm:flex-row mx-auto h-2/5 sm:mt-40 mt-12 px-6 sm:px-0">
          {/* left side main text */}
          <div className="basis-1/2 sm:px-8">
            <h1 className="text-6xl font-bold">
              Need a <br />{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-center">
                Dumpster today?
              </span>{" "}
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Servicing the Tampa Bay & surrounding areas. We offer dumpster
              rentals, junk removal services & waste management solutions.
            </p>
            <p className="text-lg mt-3 text-gray-700">
              Make your next project easier!
            </p>
            <Link href="/pricing">
            <button className="mt-6 z-0 mb-2 w-1/2 sm:w-1/3 p-2 rounded-md border border-transparent bg-[#f1592a] hover:bg-[#f1592a]/70 sm:text-xs sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-4 text-sm font-medium text-white shadow-sm">
              Book Today
            </button>
            </Link>
            <div className="flex flex-row w-full items-center"> 
            <RiRecycleFill className="text-green-500" />
              <p className="text-sm font-semibold w-full ml-2">Environment Friendly </p>
             
            </div>
          </div>
          {/* right side main image */}
          <div className="basis-1/2 flex mt-8 sm:mt-0">
            <Image
              src="/dumpsterheroimg.png"
              alt="Dumpster Image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
           <div className="w-full hidden gap-4 sm:flex max-w-5xl mx-auto text-left mt-20">
            <div className="border border-gray-300 shadow-xl basis-1/2 p-5 rounded-xl">
              <div className="flex flex-row items-center gap-3">
                <GiSmartphone size={40} className="text-green-500" />
               <h3 className="text-xl font-bold">EASY BOOKING</h3>
              </div>
              <p className="mt-2">
                Book your dumpster rental online or by phone. We offer same day
                delivery when available.
              </p>
              <Link href="/pricing">
               <button className="mt-4 rounded-md border border-transparent bg-[#f1592a] hover:bg-[#f1592a]/70 sm:text-xs sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-4 text-sm font-medium text-white shadow-sm">Book Now</button>
              </Link>
            </div>
            <div className="border border-gray-300 shadow-xl p-5 basis-1/2 rounded-xl">
              <div className="flex flex-row items-center gap-3">
                  <MdOutlineAttachMoney size={40} className="text-green-500" />
               <h3 className="text-xl font-bold">UPFRONT PRICING </h3> 
              </div>
            
               <p className="mt-2">
                Book your dumpster rental online or by phone. We offer same day
                delivery when available.
              </p>
              <Link href="/pricing">
               <button className="mt-4 rounded-md border border-transparent bg-[#f1592a] hover:bg-[#f1592a]/70 sm:text-xs sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-4 text-sm font-medium text-white shadow-sm">Pricing Page</button>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
