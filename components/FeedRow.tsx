import EpisodeCard from "./EpisodeCard";
import type { Episode, FeedRow as FeedRowType } from "../lib/types";

export default function FeedRow({
  row,
  episodes,
}: {
  row: FeedRowType;
  episodes: Episode[];
}) {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{row.label}</h3>
        <button className="text-xs text-white/60">전체 보기</button>
      </div>
      <div className="mt-3 flex gap-4 overflow-x-auto pb-2">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
}
