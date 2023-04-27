'use client'

import { useContext } from "react";
import { StripeContext } from "../context/StripeContext";
import Card from "../components/Card";

export default function page() {
  const [prices, setPrices] = useContext(StripeContext);

  return (
    <div className="text-center mt-10 mx-auto">
        <h1 className="text-3xl font-bold">Please Confirm Your Dumpster Selection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1040px] items-center mx-auto">
        {prices && prices.map((price) => (
            <Card price={price} key={price.id} />
        ))}
        </div>
    </div>
  )
}
