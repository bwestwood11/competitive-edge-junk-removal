"use client"


import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';



const Header = () => {
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

  return (
    <div className={shadow ? 'fixed top-0 bg-[#f1592a] h-4 w-full flex items-center justify-center text-center py-4 px-4 z-[100]': 'bg-[#f1592a] h-4 w-full flex items-center justify-center text-center py-4 px-4'}>
       <a className='sm:flex flex-row items-center hidden' href='mailto:brian@competitiveedgedumpsters.com'>
        <AiOutlineMail className='text-white hover:text-white/70 text-xl mr-3' /> <p className='text-white hover:text-white/70 hidden sm:flex font-semibold mr-10'>info@competitiveedgedumpsters.com</p>
        </a>
       
        <h1 className='text-white font-semibold sm:flex hidden'><Link href='/pricing'><span className='underline hover:text-white/70 cursor-pointer mr-1.5'> Click Here</span> </Link>{" "} for Weekend Special</h1>
    <a href='tel:+18132008791' className='flex sm:hidden'>
          <p className='text-white mr-3'>Call Today</p><AiFillPhone className='text-white text-xl flex sm:hidden mr-2' /> <p className='text-white'> (813) 200-8791  </p>
          </a>   
            </div>
  )
}

export default Header;