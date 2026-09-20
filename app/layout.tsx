import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Kepty Global Gateway | 世界へ挑む、すべてのフットボーラーへ",
    template: "%s | Kepty Global Gateway",
  },
  description:
    "本気で海外を目指す選手のための、リアルなリーグ・移籍データベース。Kepty Co., Ltd.",
  openGraph: {
    title: "Kepty Global Gateway",
    description: "世界へ挑む、すべてのフットボーラーへ。",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/assets/hero-pitch.jpg" }],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@400;500;600&family=Noto+Serif+JP:wght@400;500;600&family=Shippori+Mincho:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mincho antialiased">
        <div className="grain" aria-hidden />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
