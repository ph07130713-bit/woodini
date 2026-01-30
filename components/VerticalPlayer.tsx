import type { Episode } from "../lib/types";

export default function VerticalPlayer({ episode }: { episode: Episode }) {
  return (
    <div className="w-full max-w-[420px]">
      <div
        className={`relative aspect-[9/16] w-full overflow-hidden rounded-3xl ${episode.poster}`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs text-white">
          NOW PLAYING
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs text-white/70">{episode.durationSec}s</p>
          <h2 className="text-xl font-semibold text-white">{episode.title}</h2>
          <p className="text-sm text-white/80">{episode.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
