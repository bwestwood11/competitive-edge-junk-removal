import Stripe from "stripe"
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request) {
   console.log('request', request)
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
     const prices = await stripe.prices.list({
        limit: 4,
        active: true,
     });
     revalidatePath(prices.data)

   return NextResponse.json(prices.data) 

}