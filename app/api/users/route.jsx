import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { selectedDate, time, firstName, address, lastName, email, phone, notes } =
    await request.json();


  const customer = await stripe.customers.create({
    email: email,
  });

  console.log("customer", customer);

  const user = await prisma.user.create({
    data: {
      selectedDate,
      time,
      firstName,
      lastName,
      email,
      address,
      phone,
      notes,
      stripeId: customer.id,
    },
  });

  return NextResponse.json(user, {
    status: 200,
  }); } catch (error) {
    console.log("error", error);
  }

}
