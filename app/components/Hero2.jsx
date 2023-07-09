"use client";

import Image from "next/image";
import React, { useState } from "react";
import heroImage from "../../public/heroImage.jpg";
import { useRouter } from "next/navigation";

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
    <div className="relative bg-cover bg-center w-screen h-[60vh] flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-t from-black to-transparent z-10" />
      <Image
        className="absolute inset-0 z-1"
        src={heroImage}
        alt="/"
        layout="fill"
        objectFit="cover"
        objectPosition="0px -80px"
        priority
      />
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-30 flex justify-center items-center">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-40">
            <h2 className="text-2xl font-bold mb-4">
              Start Your Dumpster Rental Today!
            </h2>
            <p className="mb-4">
              Check out all of our pricing options and schedule your dumpster
              rental today!
            </p>
            <button
              className="bg-[#f1592a] hover:bg-[#f1592a]/70 text-white font-bold py-2 px-4 rounded"
              onClick={PricingPage}
            >
              Pricing Page
            </button>
          </div>
        </div>
      )}

      {/* Box */}
      <div className="absolute sm:right-40 bottom-5 sm:bottom-10 z-10">
        <div className="bg-white stroke-black stroke-2 p-4 rounded-lg shadow-lg max-w-[280px] max-h-[260px] sm:max-w-[400px] xl:max-w-[600px]">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Rent A Dumpster Today</h1>
          <p className="text-gray-700 mb-4">
            Rent a roll-off dumpster for your home, business, or project. Click
            the button below to get started today!
          </p>
          <button
            className="bg-[#f1592a] hover:bg-[#f1592a]/70 text-white font-bold py-2 px-4 rounded"
            onClick={toggleModal}
          >
            Rent Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
