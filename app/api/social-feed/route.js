// app/api/social-feed/route.js
import { NextResponse } from "next/server";

/**
 * Instagram hesabından içerik çekmek için:
 * 1. Meta for Developers → Instagram Basic Display uygulaması aç
 * 2. ACCESS_TOKEN oluştur
 * 3. TOKEN'i Render'da veya .env.local içinde:
 *    INSTAGRAM_TOKEN=xxxxx
 * olarak tanımla.
 */

export async function GET() {
  const instagramToken = process.env.INSTAGRAM_TOKEN;

  // Token yoksa geçici örnek veri dönelim
  if (!instagramToken) {
    return NextResponse.json({
      status: "error",
      message:
        "Instagram token bulunamadı. .env içine INSTAGRAM_TOKEN ekleyin.",
      items: [
        {
          id: "sample-1",
          platform: "instagram",
          type: "image",
          caption: "Instagram bağlantısı henüz aktif değil.",
          url: "https://www.instagram.com/withmorlift/",
          mediaUrl: "/images/social/placeholder.jpg",
          createdAt: "2025-12-01T10:00:00Z",
        },
      ],
    });
  }

  try {
    // Instagram API isteği
    const url =
      "https://graph.instagram.com/me/media" +
      "?fields=id,caption,media_url,permalink,media_type,timestamp" +
      `&access_token=${instagramToken}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.data) {
      return NextResponse.json({
        status: "error",
        message: "Instagram API veri döndüremedi.",
        raw: data,
      });
    }

    // Instagram verisini normalize ediyoruz
    const items = data.data.map((post) => ({
      id: post.id,
      platform: "instagram",
      type: post.media_type === "VIDEO" ? "video" : "image",
      caption: post.caption || "",
      url: post.permalink,
      mediaUrl: post.media_url,
      createdAt: post.timestamp,
    }));

    // Yeni → eski sırala
    items.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({ status: "ok", items });
  } catch (err) {
    return NextResponse.json({
      status: "error",
      message: "Instagram çekilirken hata oluştu",
      error: err.toString(),
    });
  }
}
