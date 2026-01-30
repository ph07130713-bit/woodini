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
        <Script id="ms-clarity">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "v9hz6ejnid");`}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
