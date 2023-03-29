"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import logo from '../../public/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
      };

  return (
    <nav className="top-0 w-full h-24 shadow-xl bg-white">
    <div className="flex justify-around items-center h-full w-full px-4 2xl:px-16">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          width="215"
          height="195"
          className="cursor-pointer"
          priority
        />
      </Link>
      <div className="hidden sm:flex">
        <ul className="hidden sm:flex gap-8">
          <Link href="/pricing">
            <li className="ml-10 uppercase font-semibold hover:text-[#f1592a] text-xl">
              Prices & Sizes 
            </li>
          </Link>
          <Link href="/pricing">
            <li className="ml-10 uppercase font-semibold hover:text-[#f1592a] text-xl">
              How it Works
            </li>
          </Link>
          <Link href="/contact">
            <li className="ml-10 uppercase font-semibold hover:text-[#f1592a] text-xl">
              Contact Us
            </li>
          </Link>
          <Link href="/about">
            <li className="mx-10 uppercase font-semibold hover:text-[#f1592a] text-xl ">
              About Us
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <button className="hidden sm:flex className='mt-8 w-full justify-center rounded-md border border-transparent bg-[#f1592a] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'">Rent a Dumpster</button>
      </div>
      <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
        <AiOutlineMenu size={25} />
      </div>
    </div>
    <div
      className={
        menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-10"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }
    >
      <div className="flex w-full items-center justify-end">
        <div onClick={handleNav} className="cursor-pointer">
          <AiOutlineClose size={25} />
        </div>
      </div>
      <div className="flex-col py-4">
        <ul>
          <Link href="/">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              Home
            </li>
          </Link>
          <Link href="/">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              Rent a Dumpster
            </li>
          </Link>
          <Link href="/about">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              About
            </li>
          </Link>
          <Link href="/contact">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-row justify-around pt-10 items-center">
        <AiOutlineInstagram size={30} className="cursor-pointer" />
        <AiOutlineFacebook size={30} className="cursor-pointer" />
        <AiOutlineTwitter size={30} className="cursor-pointer" />
      </div>
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          width="145"
          height="95"
          className="pt-6 mx-auto"
        />
      </Link>
    </div>
  </nav>
  )
}

export default Navbar