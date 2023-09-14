"use client";

import Image from "next/image";
import React, { useState } from "react";
import heroImage from "../../public/heroImage.jpg";
import { useRouter } from "next/navigation";
import heroimg from "../../public/howitworks.png";
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import Link from "next/link";

const Hero2 = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const PricingPage = () => {
    router.push("/pricing");
  };

  return (
    <div className="h-screen bg-gray-50">
    <div className="relative bg-cover bg-center w-screen h-[70vh] flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-black to-transparent z-10" />
      <Image
        className="absolute inset-0 z-1"
        src={heroimg}
        alt="/"
        layout="fill"
        objectFit="cover"
        objectPosition="sm:0px -80px"
        priority
      />
       <div className="pt-2 sm:pt-0 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 z-[10]">
            HOW IT WORKS
          </h1>
          <p className="text-center text-2xl md:text-4xl lg:text-4xl text-white font-medium z-[10]">
            Order Your Dumpster with Confidence 
          </p>
        </div>
    </div>
    <div className="w-full gap-4 z-10 grid grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto text-left mt-10 sm:mt-[50px]">
            <div className="border hidden sm:block border-gray-300 shadow-xl basis-1/2 p-5 rounded-xl">
              <div className="flex flex-row items-center gap-3">
                <GiSmartphone size={40} className="text-green-500" />
               <h3 className="text-xl font-bold">CALL NOW</h3>
              </div>
              <p className="mt-2">
                We are available to answer your calls Monday - Saturday 8am - 5pm.
              </p>
              <a href="tel:+18132008791">
               <button className="mt-4 rounded-md border border-transparent bg-[#f1592a] hover:bg-[#f1592a]/70 sm:text-xs sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-4 text-sm font-medium text-white shadow-sm">Call Us Here</button>
              </a>
            </div>
            <div className="border border-gray-300 shadow-xl basis-1/2 p-5 rounded-xl">
              <div className="flex flex-row items-center gap-3">
                <BsCalendarCheck size={35} className="text-green-500" />
               <h3 className="text-xl font-bold">BOOK ONLINE</h3>
              </div>
              <p className="mt-2">
                Learn how to book online with confidence by reading below!
              </p>
              <Link href="/pricing">
               <button className="mt-4 rounded-md border border-transparent bg-[#f1592a] hover:bg-[#f1592a]/70 sm:text-xs p-2 sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-4 text-sm font-medium text-white shadow-sm">Book Now</button>
              </Link>
            </div>
            <div className="border hidden sm:block border-gray-300 shadow-xl p-5 basis-1/2 rounded-xl">
              <div className="flex flex-row items-center gap-3">
                  <AiOutlineMail size={40} className="text-green-500" />
               <h3 className="text-xl font-bold">EMAIL </h3> 
              </div>
            
               <p className="mt-2">
                Book your dumpster rental online or by phone. We offer same day
                delivery when available.
              </p>
              <a href="mailto:brianwestwood13@gmail.com">
               <button className="mt-4 rounded-md border border-transparent bg-[#f1592a] hover:bg-[#f1592a]/70 sm:text-xs sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-4 text-sm font-medium text-white shadow-sm">Email Us</button>
              </a>
            </div>
          </div>
    </div>
  );
};

export default Hero2;
