import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

const prisma = new PrismaClient();

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let priceId = data.priceId
    let email = data.email

    const session = await stripe.checkout.sessions.retrieve(
        
    );

    // console.log('update the user here email', data);
    // const payments = await stripe.paymentIntents.list({
    //     customer: data.stripeId,
    // });
    // console.log("payment intent info =>", payments.data.amount_received)

    // const updateUser = await prisma.user.update({
    //     where: {
    //       email: email
    //     },
    //     data: {
    //       dumpster: payments.data
    //     }
    //   })

      return NextResponse.json({"message": "success"})
}