import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LOG_DIR = path.join(process.cwd(), "data");
const LOG_PATH = path.join(LOG_DIR, "activity-log.json");

async function readLog() {
  try {
    const file = await fs.readFile(LOG_PATH, "utf-8");
    const parsed = JSON.parse(file);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch (error) {
    return [];
  }
}

async function writeLog(items) {
  await fs.mkdir(LOG_DIR, { recursive: true });
  await fs.writeFile(LOG_PATH, JSON.stringify(items, null, 2), "utf-8");
}

export async function GET() {
  const items = await readLog();
  return NextResponse.json({ items });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const entry = body?.entry;

    if (!entry || typeof entry.action !== "string" || typeof entry.detail !== "string") {
      return NextResponse.json({ error: "Geçersiz kayıt" }, { status: 400 });
    }

    const normalizedEntry = {
      id: entry.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      action: entry.action,
      detail: entry.detail,
      timestamp: entry.timestamp || new Date().toISOString(),
    };

    const items = await readLog();
    const updated = [normalizedEntry, ...items].slice(0, 200);
    await writeLog(updated);

    return NextResponse.json({ success: true, items: updated });
  } catch (error) {
    console.error("Kayıt eklenemedi", error);
    return NextResponse.json({ error: "Kaydedilemedi" }, { status: 500 });
  }
}

