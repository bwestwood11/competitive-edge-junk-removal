import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request) {
    const { name, selectedDate, value } = await request.json()
    
const user = await prisma.user.create({
    data: {
        name,
        selectedDate,
        value
    }
})
    return NextResponse.json({ user })
 }