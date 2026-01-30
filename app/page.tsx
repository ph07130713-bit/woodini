import Link from "next/link";
import { landingHighlights } from "../lib/data/seed";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
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
            선택형 숏드라마
            <br />
            MVP를 7일 안에
          </h1>
          <p className="mt-4 text-base text-white/70">
            로그인, 결제, 댓글 없이 핵심 흐름만 구현한 MVP. 선택에 따라 다음
            에피소드가 분기되는 구조를 검증합니다.
          </p>
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
    </main>
  );
}
