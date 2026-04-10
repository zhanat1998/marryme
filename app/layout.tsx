import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Merry Me 💍 | Организация предложения руки и сердца • Бишкек",
  description:
    "Merry Me — создаём незабываемый момент предложения руки и сердца в Бишкеке. Декор, музыка, холодные фонтаны — всё под ключ. От 9 900 сом.",
  openGraph: {
    title: "Merry Me 💍 | Предложение руки и сердца",
    description: "Организация предложения руки и сердца в Бишкеке. От 9 900 сом.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={geist.variable} style={{ overflowX: "hidden" }}>
      <body className="antialiased" style={{ overflowX: "hidden", width: "100vw" }}>{children}</body>
    </html>
  );
}
