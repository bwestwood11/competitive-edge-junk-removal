// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// export async function POST(request) {
//   const endpointSecret = process.env.endpointSecret
//   console.log("endpointSecret", endpointSecret);
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//   let event = request.json();
//   if (endpointSecret) {
//     // Get the signature sent by Stripe
//     const signature = request.headers["stripe-signature"];
//     try {
//       event = stripe.webhooks.constructEvent(
//         request.json(),
//         signature,
//         endpointSecret
//       );
//     } catch (err) {
//       console.log(`⚠️  Webhook signature verification failed.`, err.message);
//       return response.sendStatus(400);
//     }
//   }

//   switch (event.type) {
//     case "payment_intent.succeeded":
//       const paymentIntent = event.data.object;
//       console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
//       // Then define and call a method to handle the successful payment intent.
//       // handlePaymentIntentSucceeded(paymentIntent);
//       break;
//     case "payment_method.attached":
//       const paymentMethod = event.data.object;
//       // Then define and call a method to handle the successful attachment of a PaymentMethod.
//       // handlePaymentMethodAttached(paymentMethod);
//       break;
//     default:
//       // Unexpected event type
//       console.log(`Unhandled event type ${event.type}.`);
//   }

//   // Return a 200 response to acknowledge receipt of the event
//   return NextResponse.send();
// }
