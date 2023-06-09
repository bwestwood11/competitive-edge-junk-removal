import Stripe from "stripe"
import { NextResponse } from "next/server";


export async function GET(request) {
   console.log('request', request)
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
     const prices = await stripe.prices.list({
        limit: 4,
        active: true,
     });

   return NextResponse.json(prices.data.reverse()) 

}