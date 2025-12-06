import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const PUBLIC_GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");

async function buildDefaultItems() {
  try {
    const files = await fs.readdir(PUBLIC_GALLERY_DIR);
    return files
      .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, "tr"))
      .map((file) => {
        const base = file.replace(/\.[^.]+$/, "");
        const group = (base.split(/[-_]/)[0] || base).trim();
        const caption = base
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        return {
          type: "image",
          caption,
          group: group || "Genel",
          image: `/images/gallery/${file}`,
          embedCode: "",
        };
      });
  } catch (error) {
    console.error("Galeri klasörü okunamadı:", error);
    return [];
  }
}

export async function GET() {
  const items = await buildDefaultItems();
  return NextResponse.json({ items });
}

export async function POST(request) {
  // Yönetici panelinden yapılan düzenlemelerin otomatik olarak kalıcılaşması istenmediği
  // için POST isteği artık veriyi diske yazmaz. İstek başarıyla döner ancak içerik
  // yalnızca oturum süresince tutulur.
  try {
    const body = await request.json();
    if (!Array.isArray(body?.items)) {
      return NextResponse.json({ error: "Geçersiz veri" }, { status: 400 });
    }

    return NextResponse.json({ success: true, persisted: false });
  } catch (error) {
    console.error("Galeri verisi kaydedilemedi:", error);
    return NextResponse.json({ error: "Kaydedilemedi" }, { status: 500 });
  }
}
