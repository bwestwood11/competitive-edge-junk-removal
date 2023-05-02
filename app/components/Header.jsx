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
    <div className={shadow ? 'fixed bg-[#f1592a] h-10 w-full flex items-center justify-center text-center py-6 px-6 z-[100]': 'bg-[#f1592a] h-10 w-full flex items-center justify-center text-center py-6 px-6'}>
        <h1 className='text-white font-semibold'><Link href='/pricing'><span className='underline cursor-pointer'>Weekend Deal</span></Link> Friday - Monday $289 10-yd dumpster - 2,000 lbs included</h1>
        </div>
  )
}

export default Header