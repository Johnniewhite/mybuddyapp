import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function POST(req: Request) {
    const { title, body } = await req.json();

    await prisma.journal.create({
        data: {title, body},
    });

    return NextResponse.json({message: "Created Entry"}, {status: 200})
}