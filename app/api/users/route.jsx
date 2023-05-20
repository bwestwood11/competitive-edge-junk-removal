import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request) {
    const { selectedDate, value, firstName, lastName, email, phone } = await request.json()
   
    
const user = await prisma.user.create({
    data: {
        selectedDate,
        value,
        firstName,
        lastName, 
        email,
        phone
    }
})
    return NextResponse.json({ user })
 }