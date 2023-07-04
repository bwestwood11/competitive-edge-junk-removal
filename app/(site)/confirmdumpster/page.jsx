"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

export default function page() {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const stripeId = searchParams.get("stripeId");
  const email = searchParams.get("email");
  console.log("confirm price", price);
  console.log("confirm stripeId", stripeId);

  const handleSubscription = async () => {
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price,
        stripeId: stripeId,
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.assign(data);
    console.log("data", data);
  };

  useEffect(() => {
    handleSubscription();
  }, []);

  return (
    <div className="flex justify-center align-middle h-screen">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}
