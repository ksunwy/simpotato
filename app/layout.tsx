import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "SIMPOTATO",
    template: "%s | SIMPOTATO",
  },
  description: "«Чипсы из симпатичной картошки»— это не просто снек, а стиль жизни, где вкус, эстетика и удовольствие сливаются в идеальном хрусте",
  keywords: ["SIMPOTATO", "чипсы", "снеки", "чипсы сыр", "заказать чипсы онлайн"],

  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "SIMPOTATO",
    description: "SIMPOTATO — это бренд картофельных чипсов, который превращает обычный снек в искусство наслаждения вкусом, красотой и моментом.",
    siteName: "SIMPOTATO",
    images: [
      {
        url: `/og-image.jpg`,
        width: 1000,
        height: 600,
        alt: "SIMPOTATO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SIMPOTATO",
    description: "SIMPOTATO — это бренд картофельных чипсов, который превращает обычный снек в искусство наслаждения вкусом, красотой и моментом.",
    images: [`/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  category: "food",

  other: {
    "theme-color": "#560002",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}