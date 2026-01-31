import Link from "next/link";
import type { Episode } from "../lib/types";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link
      href={`/e/${episode.id}`}
      className="group block min-w-[160px] max-w-[220px]"
    >
      <div
        className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl ${episode.poster}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <span className="absolute left-3 top-3 rounded-full bg-white/20 px-2 py-1 text-[10px] text-white">
          {episode.durationSec}s
        </span>
      </div>
      <div className="mt-2">
        <p className="text-sm font-semibold text-white group-hover:text-amber-200">
          {episode.title}
        </p>
        <p className="text-xs text-white/60">{episode.subtitle}</p>
      </div>
    </Link>
  );
}
