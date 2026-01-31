import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { landingHighlights } from "../lib/data/seed";
import { siteConfig, toAbsoluteUrl } from "../lib/seo";

export const metadata: Metadata = {
  title: "선택형 숏드라마 MVP · GEO 최적화",
  description:
    "생성형 AI 검색에 최적화된 선택형 숏드라마 MVP. 질문형 콘텐츠, 사용자 맥락 설명, 구조화, 최신성 업데이트까지 반영했습니다.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "선택형 숏드라마 MVP · GEO 최적화",
    description:
      "생성형 AI 검색에 최적화된 선택형 숏드라마 MVP. 질문형 콘텐츠, 사용자 맥락 설명, 구조화, 최신성 업데이트까지 반영했습니다.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "선택형 숏드라마 MVP · GEO 최적화",
    description:
      "생성형 AI 검색에 최적화된 선택형 숏드라마 MVP. 질문형 콘텐츠, 사용자 맥락 설명, 구조화, 최신성 업데이트까지 반영했습니다.",
  },
};

export default function LandingPage() {
  const faqItems = [
    {
      question: "이 사이트는 무엇을 체험할 수 있나요?",
      answer:
        "선택에 따라 다음 에피소드가 분기되는 1분 내외의 숏드라마 MVP를 체험할 수 있습니다.",
    },
    {
      question: "GEO 최적화는 왜 필요한가요?",
      answer:
        "생성형 AI 검색이 요약 답변을 제공하는 환경에서, 브랜드가 추천되도록 콘텐츠 구조와 신뢰 신호를 강화하기 위해 필요합니다.",
    },
    {
      question: "어떤 요소가 GEO에 도움이 되나요?",
      answer:
        "질문형 제목, 사용자 맥락 설명, 구조화된 정보, 최신성 표시, 신뢰 신호가 핵심입니다.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: toAbsoluteUrl("/"),
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: toAbsoluteUrl("/"),
        inLanguage: siteConfig.language,
        potentialAction: {
          "@type": "SearchAction",
          target: `${toAbsoluteUrl("/feed")}?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-xs font-bold text-black">
            MD
          </div>
          <div>
            <p className="text-sm font-semibold">우디니</p>
            <p className="text-xs text-white/60">K-Short Drama MVP</p>
          </div>
        </div>
        <Link
          href="/feed"
          className="rounded-full border border-white/20 px-4 py-2 text-sm"
        >
          피드 보기
        </Link>
      </header>

      <section className="mx-auto grid w-full max-w-5xl gap-10 px-6 pb-16 pt-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
            모바일 퍼스트 9:16
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            생성형 AI 검색에 최적화된
            <br />
            선택형 숏드라마 MVP
          </h1>
          <p className="mt-4 text-base text-white/70">
            질문형 콘텐츠, 사용자 맥락 설명, 구조화된 정보로 AI 검색에서도
            추천되는 형태를 갖췄습니다. 로그인·결제·댓글 없이 핵심 흐름만
            검증합니다.
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            <p className="font-semibold text-white">GEO 최적화 전략 공개</p>
            <p className="mt-2">
              생성형 AI 검색에서 추천되는 콘텐츠 구조와 체크리스트를 정리했습니다.
            </p>
            <Link href="/geo" className="mt-3 inline-flex text-white underline">
              GEO 가이드 보기 →
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/feed"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
            >
              지금 시작
            </Link>
            <Link
              href="/player/ep-1"
              className="rounded-full border border-white/20 px-5 py-2 text-sm"
            >
              플레이어 보기
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">MVP 구성</h2>
          <div className="mt-4 grid gap-3">
            {landingHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "질문형 콘텐츠",
              desc: "사용자가 묻는 질문을 그대로 답하는 문장 구조로 구성했습니다.",
            },
            {
              title: "사용자 맥락 설명",
              desc: "누가/언제/어떻게 쓰는지 구체 상황을 설명해 AI 이해도를 높였습니다.",
            },
            {
              title: "구조화된 정보",
              desc: "리스트·단계·짧은 블록으로 쪼개 AI가 요약하기 쉬운 형태로 구성했습니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-xl font-semibold">GEO 체크리스트</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <p>□ 질문형 제목/소제목이 있는가?</p>
            <p>□ 사용자의 상황(누가/언제/어떻게)을 설명하는가?</p>
            <p>□ 리스트/표/단계로 요약 가능한가?</p>
            <p>□ 최신 업데이트 날짜를 표시했는가?</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <div className="mt-4 grid gap-4 text-sm text-white/70">
            {faqItems.map((item) => (
              <div key={item.question}>
                <p className="font-semibold text-white">{item.question}</p>
                <p className="mt-1 text-white/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
