import { db } from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    const {title} = await req.json();

    if(!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({data:{
      title,
      userId
    }})

    return NextResponse.json(course);
  } catch (e) {
    console.log("[COURSES]", e);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}


