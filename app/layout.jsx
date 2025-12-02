export const metadata = {
  title: "Asansör Sistemleri",
  description: "Güvenli ve modern asansör çözümleri için kurumsal web sitesi.",
};

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
