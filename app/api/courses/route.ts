import { getAuth } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    const {title} = await req.json();
  } catch (e) {
    console.log("[COURSES", e);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
