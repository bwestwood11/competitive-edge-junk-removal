'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import aboutImage from '../../../public/aboutImage.jpg';
import Link from 'next/link';



export default function About() {
  
  return (
    <div className="bg-white">
   
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                We’re a passionate local business serving the Tampa Bay & surrounding areas.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  We have been in business since 2018 and have been growing ever since. We are a 
                  family owned and operated business that takes pride in our work and our customers.
                </p>
                <Link href='/contact'>
                <button className='mt-4 w-36 text-white font-medium bg-[#f1592a] px-2 py-3 rounded-lg hover:bg-[#f1592a]/70' >Contact Us</button>
                </Link>
              </div>
              <Image 
              src={aboutImage}
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

       
      </main>
    </div>
  )
}