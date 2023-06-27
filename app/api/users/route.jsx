import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const prisma = new PrismaClient()

export async function POST(request) {
    const { selectedDate, value, firstName, lastName, email, phone } = await request.json()

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const customer = await stripe.customers.create({
        email: email
    })

    console.log('customer', customer)

const user = await prisma.user.create({
    data: {
        selectedDate,
        value,
        firstName,
        lastName, 
        email,
        phone,
        stripeId: customer.id
    }
})

    return NextResponse.json({ user })
 }