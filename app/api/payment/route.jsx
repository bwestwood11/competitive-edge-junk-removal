import { NextResponse } from "next/server";
import Stripe from "stripe";




export async function POST(request, price) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: request.body.priceId,
                quantity: 1,
                currency: 'usd'
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: process.env.STRIPE_CANCEL_UR
    })

    return NextResponse.json(session.url)
}