"use client"

import { useContext } from "react";
import { StripeContext } from "../context/StripeContext";
import PricingCard from "./PricingCard";

export default function PricingDisplay() {
    const [prices, setPrices] = useContext(StripeContext);
return (
    <>
       {prices && 
        prices.map((price) => (
          <PricingCard
           price={price}
           key={price.id}
           />
        ))}
        </>
)
 

}

