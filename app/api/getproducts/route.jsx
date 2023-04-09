import Stripe from "stripe"
import { NextResponse } from "next/server";


export async function GET(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    console.log(stripe)
     const prices = await stripe.prices.list({
        limit: 4,
     });

   return NextResponse.json(prices.data.reverse()) 

}