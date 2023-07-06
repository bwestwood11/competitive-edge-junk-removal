import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { NextResponse } from "next/server";
import Stripe from "stripe";






export async function POST(req) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const endpointSecret = 'whsec_nittmhofwFfsBWsDaxoAAzhQF262sl5h'
    console.log(endpointSecret)
    const body = await req.text()

    let event;

    if (endpointSecret) {
        // Get the signature sent by Stripe
        const signature = req.headers['stripe-signature'];
        try {
          event = stripe.webhooks.constructEvent(
            body,
            signature,
            endpointSecret
          );
        } catch (err) {
          console.log(`⚠️  Webhook signature verification failed.`, err.message);
          return new Response(`Webhook Error: ${err.message}, { status: 400 }`);
        }
      }

       // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object;
      console.log(`Checkout for ${checkoutSession} was successful!`);
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;

    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
   

    return NextResponse.json('successful', { status: 200 })
}