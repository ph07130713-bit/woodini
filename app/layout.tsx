import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Drama Lab | 선택형 숏드라마 테스트",
  description:
    "7일 안에 선택형 숏드라마를 테스트할 수 있는 MVP 랜딩 및 데모.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
