import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KCCKHQW9VE"
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KCCKHQW9VE');`}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
