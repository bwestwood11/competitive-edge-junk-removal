"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';


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
    <div className={shadow ? 'fixed bg-[#f1592a] h-4 w-full flex items-center justify-center text-center py-4 px-4 z-[100]': 'bg-[#f1592a] h-4 w-full flex items-center justify-center text-center py-4 px-4'}>
        <h1 className='text-white font-semibold'><span className='underline cursor-pointer'> Click Here</span> for Weekend Special<Link href='/pricing'></Link></h1>
        </div>
  )
}

export default Header