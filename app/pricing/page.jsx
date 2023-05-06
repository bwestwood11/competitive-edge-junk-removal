'use client'

import Image from "next/image";
import dumpster3 from "../../public/dumpster3.jpg";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import PricingCard from "../components/PricingCard";
import { StripeContext } from "../context/StripeContext";
import pricingImage from '../../public/pricingImage.jpg';

export default function Pricing() {
 const [prices, setPrices] = useContext(StripeContext)

  // const [prices, setPrices] = useState([])

  //  useEffect(() => {
  //      fetchPrices()
  //  }, [])

  //  const fetchPrices = async () => {
  //   const {data} = await axios.get('/api/getproducts')
  //   console.log(data)
  //   setPrices(data)
  //  }


  return (
    <section className="w-full">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-t from-black to-transparent z-10" />
        <Image
          className="absolute inset-0 z-1"
          src={pricingImage}
          alt="/"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="pt-36 sm:pt-0 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-white mb-8 z-[100]">
            PRICING
          </h1>
          <p className="text-center text-2xl md:text-4xl lg:text-4xl text-white font-medium z-[100]">
            ORDER ONLINE BELOW 
          </p>
        </div>
      </div>

              {/* Pricing Section Card */}
      <div className="mx-auto max-w-4xl text-center mt-10 items-center">
          <h2 className="text-3xl font-semibold leading-7 text-[#f1592a]">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right dumpster for&nbsp;you
          </p> 
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          Check out all the information to make the correct decision or give us a call!
        </p>
        </div>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1040px] items-center mx-auto">
        {prices && 
        prices.map((price) => (
          <PricingCard
           price={price}
           key={price.id}
           />
        ))}
      </div>
    </section>
  );
}
