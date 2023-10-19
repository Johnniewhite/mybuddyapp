import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function DELETE(req: Request) {
  const { id } = await req.json();

  await prisma.journal.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
}