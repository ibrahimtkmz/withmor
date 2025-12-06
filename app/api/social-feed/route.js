// app/api/social-feed/route.js
import { NextResponse } from "next/server";

/**
 * Burada şimdilik ÖRNEK veri dönüyoruz.
 * Sonrasında Instagram / TikTok / Facebook API'lerinden çektiğin veriyi
 * bu formatta "items" içine koyabilirsin.
 *
 * Her item:
 * - id: benzersiz id
 * - platform: "instagram" | "tiktok" | "facebook"
 * - type: "image" | "video"
 * - caption: açıklama
 * - url: postun orijinal linki
 * - mediaUrl: resim ya da video kaynağı (mp4, jpg vs.)
 * - createdAt: tarih (sıralama için)
 */
export async function GET() {
  const items = [
    {
      id: "ig-1",
      platform: "instagram",
      type: "image",
      caption: "Depo içi yük asansörü montajından bir kare.",
      url: "https://www.instagram.com/hesabiniz/...",
      mediaUrl: "/images/social/ig-sample-1.jpg",
      createdAt: "2025-12-01T10:00:00Z",
    },
    {
      id: "tt-1",
      platform: "tiktok",
      type: "video",
      caption: "Yük asansörü test aşaması 🎥",
      url: "https://www.tiktok.com/@hesabiniz/video/...",
      mediaUrl: "/videos/tiktok-ornek-1.mp4",
      createdAt: "2025-12-02T08:30:00Z",
    },
    {
      id: "fb-1",
      platform: "facebook",
      type: "image",
      caption: "Projeden bir detay.",
      url: "https://www.facebook.com/hesabiniz/posts/...",
      mediaUrl: "/images/social/fb-sample-1.jpg",
      createdAt: "2025-11-28T14:15:00Z",
    },
    {
      id: "ig-2",
      platform: "instagram",
      type: "video",
      caption: "Hidrolik platform çalışırken kısa video.",
      url: "https://www.instagram.com/p/...",
      mediaUrl: "/videos/instagram-ornek-1.mp4",
      createdAt: "2025-12-03T09:45:00Z",
    },
  ];

  // Tarihe göre yeni → eski sırala
  items.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json({ items });
}
