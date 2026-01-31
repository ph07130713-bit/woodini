import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { siteConfig, toAbsoluteUrl } from "../../lib/seo";
import ShareBar from "../../components/ShareBar";

export const metadata: Metadata = {
  title: "GEO 최적화 가이드",
  description:
    "생성형 AI 검색 환경에서 브랜드가 추천되도록 만드는 GEO 전략. 질문형 콘텐츠, 사용자 중심 설명, 구조화, 신뢰 신호, 최신성 업데이트까지 한 페이지에 정리했습니다.",
  alternates: {
    canonical: "/geo",
  },
  openGraph: {
    title: "GEO 최적화 가이드",
    description:
      "생성형 AI 검색 환경에서 브랜드가 추천되도록 만드는 GEO 전략을 한 페이지에 정리했습니다.",
    url: "/geo",
    type: "article",
  },
  twitter: {
    title: "GEO 최적화 가이드",
    description:
      "생성형 AI 검색 환경에서 브랜드가 추천되도록 만드는 GEO 전략을 한 페이지에 정리했습니다.",
  },
};

const lastUpdated = "2026-01-31";

const faqItems = [
  {
    question: "GEO는 SEO와 무엇이 다른가요?",
    answer:
      "SEO는 검색 엔진에서 상위 노출을 목표로 하고, GEO는 생성형 AI 답변에 브랜드가 자연스럽게 포함되도록 최적화하는 전략입니다. 두 전략은 함께 운영하는 것이 효과적입니다.",
  },
  {
    question: "AI 검색에서 성과를 높이려면 무엇을 먼저 해야 하나요?",
    answer:
      "사용자 질문을 직접 해결하는 고유하고 유용한 콘텐츠를 만들고, 페이지 경험을 개선하며, 검색 크롤러가 접근할 수 있는 기술 요건을 충족하세요.",
  },
  {
    question: "구조화 데이터는 꼭 필요한가요?",
    answer:
      "구조화 데이터는 검색 시스템이 페이지 내용을 이해하는 데 도움이 됩니다. 표시되는 내용과 일치하도록 작성하고 검증하는 것이 중요합니다.",
  },
];

export default function GeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: toAbsoluteUrl("/"),
      },
      {
        "@type": "Article",
        headline: "GEO 최적화 가이드",
        description:
          "생성형 AI 검색 환경에서 브랜드가 추천되도록 만드는 GEO 전략.",
        datePublished: "2026-01-31",
        dateModified: "2026-01-31",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        mainEntityOfPage: toAbsoluteUrl("/geo"),
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
      <Script id="geo-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <header className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 pb-8 pt-10">
        <div className="flex items-center gap-3 text-xs text-white/60">
          <span className="rounded-full border border-white/20 px-3 py-1">
            GEO 실전 가이드
          </span>
          <span>최종 업데이트: {lastUpdated}</span>
        </div>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          생성형 AI 시대의 검색 최적화
          <br />
          GEO 전략 한 페이지 정리
        </h1>
        <p className="max-w-3xl text-base text-white/70">
          AI 검색은 긴 질문과 맥락을 이해해 요약 답변을 제공합니다. 이 환경에서
          브랜드가 추천되려면, 질문형 콘텐츠·사용자 중심 설명·구조화·신뢰 신호·
          최신성 업데이트를 체계적으로 갖춰야 합니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/feed"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            사례 보러가기
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/20 px-5 py-2 text-sm"
          >
            홈으로
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "1. 질문형 콘텐츠 설계",
              desc: "사용자 질문을 직접 답하는 Q&A 구조를 만들고 제목/본문에 대화형 키워드를 반복합니다.",
            },
            {
              title: "2. 사용자 중심 설명",
              desc: "누가·언제·어떻게 사용하는지 구체적 상황을 넣어 맥락을 강화합니다.",
            },
            {
              title: "3. 콘텐츠 구조화",
              desc: "H2/H3, 리스트, 단계별 가이드, 표로 정보를 분해해 각 블록이 독립적으로 의미를 갖게 합니다.",
            },
            {
              title: "4. 신뢰 신호 확보",
              desc: "외부 언급, 리뷰, 전문가 인용 등으로 브랜드 신뢰도를 쌓아 AI 추천 확률을 높입니다.",
            },
            {
              title: "5. 최신성 업데이트",
              desc: "업데이트 날짜와 최신 사례를 반영해 정보 신뢰도를 유지합니다.",
            },
            {
              title: "6. 페이지 경험 최적화",
              desc: "주요 정보가 눈에 잘 보이도록 구성하고, 모바일에서 읽기 쉬운 레이아웃을 유지합니다.",
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
          <h2 className="text-xl font-semibold">AI 검색에서 성과를 내는 기본 원칙</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/70">
            <li>고유하고 유용한 콘텐츠로 사용자의 질문을 직접 해결합니다.</li>
            <li>핵심 정보를 먼저 제시하고, 세부 근거는 단계별로 정리합니다.</li>
            <li>구조화 데이터가 실제 표시 내용과 일치하도록 유지합니다.</li>
            <li>검색 크롤러가 접근 가능한 기술 요건(200 응답, 인덱스 가능)을 충족합니다.</li>
          </ul>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">실전 체크리스트</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <p>□ 질문형 제목/소제목이 있는가?</p>
            <p>□ 사용자의 상황(누가/언제/어떻게)을 설명하는가?</p>
            <p>□ 리스트/표/단계로 요약 가능한가?</p>
            <p>□ 외부 리뷰/언급/출처가 있는가?</p>
            <p>□ 최근 업데이트 날짜를 표시했는가?</p>
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

        <div className="mt-10">
          <ShareBar
            title="GEO 최적화 가이드"
            text="AI 검색에서 추천되는 GEO 전략을 한 페이지로 정리했습니다."
            url={toAbsoluteUrl("/geo")}
          />
        </div>
      </section>
    </main>
  );
}
