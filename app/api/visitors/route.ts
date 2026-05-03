import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "visitors.json");

function getCount(): number {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify({ count: 1000 }));
    return 1000;
  }
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return data.count ?? 1000;
}

export async function GET() {
  const count = getCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const count = getCount() + 1;
  fs.writeFileSync(filePath, JSON.stringify({ count }));
  return NextResponse.json({ count });
}
