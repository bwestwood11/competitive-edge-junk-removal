"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';


const Header = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className={shadow ? 'fixed top-0 bg-[#f1592a] h-4 w-full flex items-center justify-center text-center py-4 px-4 z-[100]': 'bg-[#f1592a] h-4 w-full flex items-center justify-center text-center py-4 px-4'}>
       <AiOutlineMail className='text-white text-xl mr-2 hidden sm:flex' /> <p className='text-white hidden sm:flex font-semibold mr-10'>info@competitiveedgedumpsters.com</p>
        <h1 className='text-white font-semibold'><Link href='/pricing'><span className='underline cursor-pointer'> Click Here</span></Link> for Weekend Special</h1>
        </div>
  )
}

export default Header