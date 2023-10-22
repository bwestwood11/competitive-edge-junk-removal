"use client";

import React, { useState } from "react";
import { BsHouse } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { TbHandFinger } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { LiaCouchSolid } from "react-icons/lia";
import { FaBed } from "react-icons/fa";
import { FaHotTub } from "react-icons/fa";
import { PiWarehouse } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";

const programs = [
  {
    name: "Furniture Removal",
    icon: LiaCouchSolid,
    price: "$125",
    description:
      "Our furniture removal service includes the responsible and efficient removal of unwanted furniture from individuals' homes, freeing up valuable space and minimizing clutter.",
  },
  {
    name: "Mattress Removal",
    icon: FaBed,
    price: "$99",
    description:
      "Our mattress removal service involves the responsible and eco-friendly disposal of unwanted mattresses, allowing individuals to free up space and minimize clutter in their homes or businesses.",
  },
  {
    name: "House Clean outs",
    icon: BsHouse,
    price: "$399",
    description: "Our team will handle the entire clean-out process, from sorting and packing to transportation and disposal, so you can sit back and relax. We understand that house clean-outs can be overwhelming, which is why we provide a stress-free solution for our clients."
  },
  {
    name: "Hot Tub Removal",
    icon: FaHotTub,
    price: "$299",
    description: "A team of experts who have the tools and experience necessary to safely and efficiently remove your unwanted hot tub, regardless of its size or location."
  },
  {
    name: "Shed Demolition & Removal",
    icon: PiWarehouse,
    price: "$499",
    description: "Have an old shed that is just taking up too much space. We will be able to demo the shed, take the debris/junk and give you the space back that you deserve."
  },
  {
    name: "Single Item Pickup",
    icon: AiOutlineCheck,
    price: "$85",
    description: "Sometimes all you need is a single item picked up. We can do that for you. We will come to your location and pick up the item and dispose of it properly."
  },
];

const JunkRemovalServices = () => {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  const handleProgramClick = (program) => {
    console.log(program.name);
    setSelectedProgram(program);
  };

  const programContent = selectedProgram
    ? programs.find((program) => program.name === selectedProgram.name)
    : null;

  const formattedProgramName = programContent
    ? programContent.name.toLowerCase().replace(/ /g, "-")
    : "";

  const imageName = `${formattedProgramName}.png`;

  return (
    <div className="w-full bg-white h-full flex pt-32 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex max-w-md mb-4 mx-auto text-center justify-center gap-3 items-center">
          <p className=" font-bold uppercase text-[#f1592a]">
            Our Core Services
          </p>
          <div className="border-b lg:h-1/4 h-full border-2 border-[#f1592a] w-1/6" />
        </div>
        <h2 className="font-extrabold text-center text-4xl">
          Junk Removal Services
        </h2>
        <p className="text-center leading-8 text-gray-600 mt-5 max-w-lg mx-auto">
          Listed below are the junk removal services that we offer. This includes us doing all the work for you. We will come to your location, load up the junk, hail it away and properly dispose of it, You do not have to lift a finger.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-6xl mx-auto mt-8">
          {programs.map((program, index) => (
            <div
              key={program.name}
              className={`flex flex-col cursor-pointer items-center justify-center bg-gray-100 lg:p-4 xl:p-5 p-3 rounded-lg ${
                selectedProgram === program
                  ? "bg-gradient-to-br from-[#f1592a] via-[#ff933a] to-[#e7b586] text-white"
                  : ""
              }`}
              onClick={() => handleProgramClick(program)}
            >
              <program.icon
                className={`h-12 w-12 text-black ${
                  selectedProgram === program ? "text-white" : "text-black"
                }`}
              />
              <p
                className={`text-center mt-3 font-bold ${
                  selectedProgram === program ? "text-white" : "text-black"
                }`}
              >
                {program.name}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white shadow-xl max-w-6xl gap-5 mx-auto flex flex-col sm:flex-row mt-6 p-4 sm:p-6">
          <div className="basis-1/2 w-full">
            {programContent && (
              <Image
                src={`/${imageName}`}
                alt={programContent.name}
                width={800}
                height={800}
                priority
                className="rounded-lg"
              />
            )}
          </div>
          <div className="basis-1/2">
            {programContent && (
              <h2 className="font-extrabold text-xl">{programContent.name}</h2>
            )}
            {programContent && (
              <p className="text-gray-600 mt-3 leading-6 font-semibold">starting at {" "}{programContent.price}</p>
            )}
            {programContent && (
              <p className="text-gray-600 mt-3 leading-6">
                {programContent.description}
              </p>
            )}
            <Link href="/contact">
              <div className="flex gap-2 items-center mt-8 text-green-500 font-bold">
                <span>
                  <BiRightArrowAlt size="25" />
                </span>
                Learn More
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JunkRemovalServices;
