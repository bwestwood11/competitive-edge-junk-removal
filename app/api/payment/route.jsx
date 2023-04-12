import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

// export async function POST(request) {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//   const { data } = await request.json();

//   console.log("request body = ", request);
//   console.log("request json= ", request.json());

//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price: request.body.priceId,
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: "http://localhost:3000/success",
//     cancel_url: "http://localhost:3000/cancel",
//   });

//   return NextResponse.json(session.url);
// }

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  // const { data } = await req.json();

  let data = await req.json();

  let priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    custom_fields: [
      {
        key: 'Address',
        label: {type: 'custom', custom: 'Address for Dumpster Drop-off?'},
        type: 'text',
      },
      {
        key: 'Phone',
        label: {type: 'custom', custom: 'Best Phone Number?'},
        type: 'numeric',
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success || https://competitiveedgedumpsters.com/success",
    cancel_url: "http://localhost:3000/cancel || https://competitiveedgedumpsters.com/success",
  });

  return NextResponse.json(session.url);
}
