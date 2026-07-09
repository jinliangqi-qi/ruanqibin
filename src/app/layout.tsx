import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "阮琪斌 - 商业英语专业应届毕业生",
  description: "阮琪斌，商业英语专业应届毕业生，具备优秀的英语沟通能力与商务实践背景，期待在外贸、跨境电商、国际商务领域发展。",
  keywords: "阮琪斌,商业英语,应届生求职,英语专业,外贸,跨境电商,国际商务",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-white text-slate-800">{children}</body>
    </html>
  );
}
