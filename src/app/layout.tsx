import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "阮琪斌 · 商业英语应届生求职作品集",
  description: "阮琪斌，商业英语专业应届毕业生，CET-6 550+，具备英语沟通与翻译能力。正在寻找外贸 / 跨境电商方向的工作机会。",
  keywords: "阮琪斌,商业英语,应届生,CET-6,外贸,跨境电商,求职",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
