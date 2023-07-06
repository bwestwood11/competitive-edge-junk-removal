import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { NextResponse } from "next/server";


const endpointSecret = process.env.endpointSecret
export async function POST(request) {
    let event = request.json()
    if (endpointSecret) {
        // Get the signature sent by Stripe
        const signature = request.headers['stripe-signature'];
        try {
          event = stripe.webhooks.constructEvent(
            request.body,
            signature,
            endpointSecret
          );
        } catch (err) {
          console.log(`⚠️  Webhook signature verification failed.`, err.message);
          return response.sendStatus(400);
        }
      }

       // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;

    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
   

    return NextResponse.json('success')
}