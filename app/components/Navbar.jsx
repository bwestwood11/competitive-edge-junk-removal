"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 45) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-white"
          : "w-full h-20 z-[100]"
      }
    >
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
        <div className="hidden md:flex">
          <ul className="hidden sm:flex md:gap-4 md:text-sm lg:gap-10 xl:text-xl sm:text-xs whitespace-nowrap items-center">
            <Link href="/pricing">
              <li className="font-semibold hover:text-[#f1592a]">
                Prices & Sizes
              </li>
            </Link>
            <Link href="/howitworks">
              <li className="font-semibold hover:text-[#f1592a]">
                How it Works
              </li>
            </Link>
            <Link href="/contact">
              <li className="font-semibold hover:text-[#f1592a]">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <Link href="/pricing">
            <button className="hidden md:flex w-full justify-center rounded-md border border-transparent bg-[#f1592a] hover:bg-[#f1592a]/70 sm:text-xs sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-4 text-sm font-medium text-white shadow-sm">
              Rent a Dumpster
            </button>
          </Link>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 sm:w-[70%] w-[100%] md:hidden h-screen bg-white p-10 ease-in duration-500 z-[1000]"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="text-lg">
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href="/pricing">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Rent a Dumpster
              </li>
            </Link>
            <Link href="/pricing">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Pricing
              </li>
            </Link>
            <Link href="/howitworks">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                How it works
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
          <AiOutlineInstagram size={40} className="cursor-pointer" />
          <AiOutlineFacebook size={40} className="cursor-pointer" />
          <AiOutlineTwitter size={40} className="cursor-pointer" />
        </div>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width="245"
            height="195"
            className="pt-8 mx-auto"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
