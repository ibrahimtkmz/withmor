import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "gallery.json");
const PUBLIC_GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");
const GROUP_LABELS = [
  "Yük Asansörleri",
  "Hidrolik Sistemler",
  "Çelik Kontrüksüyonlar",
  "Homelift",
  "Makine Şasesi Mrl Mr",
  "Yük Asansorleri Platformlar",
  "Kabinler",
];

async function readGalleryFile() {
  try {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

async function buildDefaultItems() {
  try {
    const files = await fs.readdir(PUBLIC_GALLERY_DIR);
    const orderedFiles = files
      .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, "tr"));

    return orderedFiles.map((file, index) => {
      const base = file.replace(/\.[^.]+$/, "");
      const group = GROUP_LABELS[index % GROUP_LABELS.length];
      return {
        type: "image",
        caption: `${group} - ${base}`,
        group,
        image: `/images/gallery/${file}`,
        embedCode: "",
      };
    });
  } catch (error) {
    console.error("Galeri klasörü okunamadı:", error);
    return [];
  }
}

async function ensureGalleryData() {
  let items = await readGalleryFile();
  if (items && Array.isArray(items)) return items;

  const defaults = await buildDefaultItems();
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(defaults, null, 2), "utf-8");
  return defaults;
}

export async function GET() {
  const items = await ensureGalleryData();
  return NextResponse.json({ items });
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!Array.isArray(body?.items)) {
      return NextResponse.json({ error: "Geçersiz veri" }, { status: 400 });
    }

    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(body.items, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Galeri verisi kaydedilemedi:", error);
    return NextResponse.json({ error: "Kaydedilemedi" }, { status: 500 });
  }
}
