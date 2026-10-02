import { NextResponse } from "next/server";
import { getClientLogos } from "@/lib/cms/queries";

export const revalidate = 300;

export async function GET() {
  const logos = await getClientLogos();
  return NextResponse.json(logos);
}
