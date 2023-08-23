import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { fullName, email, isChecked } = body;
  console.log("body", body);

  const user = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      elecronicSignature: fullName,
      confirmWaiver: isChecked,
    },
  });

  return NextResponse.json(user, {
    status: 200,
  });
}
