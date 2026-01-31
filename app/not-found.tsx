import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          404 Not Found
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">
          찾을 수 없는 페이지입니다.
        </h1>
        <p className="text-sm text-white/60">
          주소가 변경되었거나 삭제되었을 수 있어요. 아래 링크로 이동해
          주세요.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            홈으로
          </Link>
          <Link
            href="/feed"
            className="rounded-full border border-white/20 px-5 py-2 text-sm"
          >
            오늘의 피드
          </Link>
        </div>
      </div>
    </main>
  );
}
