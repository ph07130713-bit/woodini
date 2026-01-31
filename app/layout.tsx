import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig, siteUrl } from "../lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "My Drama Lab | 선택형 숏드라마 MVP",
    template: "%s | My Drama Lab",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    languages: {
      "ko-KR": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "My Drama Lab | 선택형 숏드라마 MVP",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "My Drama Lab 선택형 숏드라마 MVP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Drama Lab | 선택형 숏드라마 MVP",
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  verification: {
    google: "fSKSN5okvjyIHd4O1iCS0_eCKJwBRachc5cxq23r-Ck",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
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
