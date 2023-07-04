import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  // const { data } = await req.json();
  let data = await request.json();
  // let stripeId = data.stripeId;
  console.log("data", data);
  let priceId = data.priceId;
  let stripeId = data.stripeId;
  const email = data.email;
  console.log("Stripe ID", stripeId);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    customer: stripeId,
    success_url: `https://competitiveedgedumpsters.com/success?email=${email}&priceId=${priceId}`,
    cancel_url: "https://competitiveedgedumpsters.com/cancel",
  });

  console.log("checkout session object", session);

  return NextResponse.json(session.url);
}
