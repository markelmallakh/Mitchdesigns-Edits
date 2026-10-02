import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN_UPLOAD;

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    // Pipe the raw multipart body directly — avoids re-serialisation mangling the boundary
    const body = await request.arrayBuffer();

    const res = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "POST",
      headers: {
        "Content-Type": contentType,
        ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
      },
      body,
    });

    const text = await res.text();

    if (!res.ok) {
      console.error(`Strapi upload error ${res.status}:`, text);
      return NextResponse.json({ error: text }, { status: res.status });
    }

    const data = JSON.parse(text);
    return NextResponse.json({ id: data[0]?.id }, { status: 200 });
  } catch (err) {
    console.error("Upload proxy error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
