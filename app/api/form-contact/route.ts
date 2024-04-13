import { ContactFormInput } from "@/lib/types";
import { Validator } from "@/lib/validationBackend";
import { zodContactFormInput } from "@/lib/zodTypes";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const request = (await req.json()) as ContactFormInput;

  const validatedData = Validator.validateContactMessage(
    zodContactFormInput,
    request,
  );

  try {
    const data = await prisma.contactForm.create({
      data: {
        name: validatedData.name,
        message: validatedData.message,
        email: validatedData.email,
      },
    });

    return NextResponse.json({
      data: data,
    });
  } catch (error) {
    console.error("ERROR FROM /api/contact-form", error);
  }
}
