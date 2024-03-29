import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";
// import { headers } from 'next/headers'


const prisma = new PrismaClient();


export async function POST(req) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const endpointSecret = process.env.ENDPOINT_SECRET
    console.log("secret key", endpointSecret)
    const body = await req.text()
    console.log("body data", body)
    let event;

    if (endpointSecret) {
        // Get the signature sent by Stripe
        const signature = req.headers.get('stripe-signature');
        // const signature = headers().get('Stripe-Signature');
        console.log("signature", signature)
        try {
          event = stripe.webhooks.constructEvent(
            body,
            signature,
            endpointSecret
          );
        } catch (err) {
          console.log(`⚠️  Webhook signature verification failed.`, err.message);
          return new Response(`Webhook Error: ${err.message}`, { status: 400 });
        }
      }

       // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object;
      console.log("checkoutsession =>", checkoutSession);

          //  Find customer in database with Stripe ID and update their payment status
      const user = await prisma.user.update({
        where: {
          stripeId: checkoutSession.customer,
        },
        data: {
          amount_Paid: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol', minimumFractionDigits: 2}).format(checkoutSession.amount_total / 100),
          payment_Status: checkoutSession.payment_status,

        }
      });
      console.log("user updated", user)
      break;

    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
   

    return NextResponse.json('successful requests to webhook', { status: 200 })
}