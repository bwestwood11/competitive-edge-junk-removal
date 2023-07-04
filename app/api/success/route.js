import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
    let data = await request.json();
    let priceId = data.priceId
    let email = data.email

    console.log('update the user here email', data);

    const updateUser = await prisma.user.update({
        where: {
          email: email
        },
        data: {
          dumpster: if(priceId == 'price_1MukObIPblDJirEcC4TRFg58') { return '15-yard dumpster' } else if(priceId == 'price_1Mul3uIPblDJirEcXeqkl5lf') { return '20-yard dumpster' } else if(priceId == 'price_1MurH4IPblDJirEcJgf7h4QN') { return '10-yard dumpster' } else if(priceId == 'price_1MurISIPblDJirEcKEMeUoeG') { return '15-yard dumpster 24 hour special' } else { return '15-yard dumpster' 
        } 
        }
      })

      return NextResponse.json({"message": "success"})
}