import { feedRows, episodes } from "../../lib/data/seed";
import FeedRow from "../../components/FeedRow";

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <div>
          <p className="text-sm text-white/60">우디니 피드</p>
          <h1 className="text-2xl font-semibold">오늘의 피드</h1>
        </div>
        <div className="flex items-center gap-2">
          <input
            placeholder="작품, 배우, 키워드"
            className="w-40 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs"
          />
          <button className="rounded-full border border-white/20 px-4 py-2 text-xs">
            코인 240
          </button>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        {feedRows.map((row) => (
          <FeedRow
            key={row.id}
            row={row}
            episodes={row.episodeIds.map(
              (episodeId) => episodes.find((ep) => ep.id === episodeId)!
            )}
          />
        ))}
      </section>
    </main>
  );
}
