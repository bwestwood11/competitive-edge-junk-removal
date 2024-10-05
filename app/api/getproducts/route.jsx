import Stripe from "stripe"
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic' 

export async function GET(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
     const prices = await stripe.prices.list({
        limit: 3,
        active: true,
     });
     revalidatePath(prices.data)
    console.log(prices.data)
   return NextResponse.json(prices.data) 

}