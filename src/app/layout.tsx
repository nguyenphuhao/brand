import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Playnika — Brand Guidelines",
  description: "Nhịp kết nối mọi cuộc chơi. Brand identity cho Playnika — nền tảng AI kết nối cộng đồng thể thao.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={font.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
