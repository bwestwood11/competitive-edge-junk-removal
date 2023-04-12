import Stripe from "stripe"
import { NextResponse } from "next/server";


export async function GET(request) {
    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)
     const prices = await stripe.prices.list({
        limit: 4,
     });

   return NextResponse.json(prices.data.reverse()) 

}