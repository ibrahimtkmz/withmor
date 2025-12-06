import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const PUBLIC_GALLERY_DIR = path.join(
  process.cwd(),
  "public",
  "images",
  "gallery"
);
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_PATH = path.join(DATA_DIR, "gallery.json");

function normalizeItem(item) {
  return {
    type: item?.type === "video" ? "video" : "image",
    caption: item?.caption?.toString() || "İçerik",
    group: item?.group?.toString() || "Genel",
    image: item?.image?.toString() || "",
    embedCode: item?.embedCode?.toString() || "",
  };
}

async function readStoredItems() {
  try {
    const file = await fs.readFile(DATA_PATH, "utf-8");
    const parsed = JSON.parse(file);
    if (Array.isArray(parsed)) {
      return parsed.map(normalizeItem);
    }
    return null;
  } catch (error) {
    return null;
  }
}

async function buildDefaultItems() {
  try {
    const files = await fs.readdir(PUBLIC_GALLERY_DIR);
    const groupByFile = {
      "galeri-1": "Panoramik Asansörler",
      "galeri-2": "Yük Asansörleri",
      "galeri-3": "Yük Asansörleri",
      "galeri-5": "Homelift",
      "galeri-6": "Homelift",
      "galeri-7": "İnsan Asansörleri",
      "galeri-8": "Panoramik Asansörler",
      "galeri-11": "İnsan Asansörleri",
      "galeri-12": "İnsan Asansörleri",
      "galeri-13": "Yatay Yamaç Asansörleri",
      "galeri-14": "Asansör Makineleri",
      "galeri-15": "Asansör Makineleri",
      "galeri-16": "Asansör Makineleri",
      "galeri-17": "Asansör Makineleri",
      "galeri-18": "Asansör Makineleri",
      "galeri-19": "Asansör Makineleri",
      "galeri-21": "Yatay Yamaç Asansörleri",
      "galeri-22": "Yatay Yamaç Asansörleri",
    };

    return files
      .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, "tr"))
      .map((file) => {
        const base = file.replace(/\.[^.]+$/, "");
        const group = groupByFile[base] || "Genel";
        const caption = base
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        return normalizeItem({
          type: "image",
          caption,
          group: group || "Genel",
          image: `/images/gallery/${file}`,
          embedCode: "",
        });
      });
  } catch (error) {
    console.error("Galeri klasörü okunamadı:", error);
    return [];
  }
}

async function writeGallery(items) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2), "utf-8");
}

export async function GET() {
  const stored = await readStoredItems();
  const items = stored ?? (await buildDefaultItems());
  return NextResponse.json({ items });
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!Array.isArray(body?.items)) {
      return NextResponse.json({ error: "Geçersiz veri" }, { status: 400 });
    }

    const normalizedItems = body.items
      .map(normalizeItem)
      .filter((item) => item.type === "image" ? item.image : item.embedCode || item.image);

    await writeGallery(normalizedItems);

    return NextResponse.json({ success: true, persisted: true });
  } catch (error) {
    console.error("Galeri verisi kaydedilemedi:", error);
    return NextResponse.json({ error: "Kaydedilemedi" }, { status: 500 });
  }
}
