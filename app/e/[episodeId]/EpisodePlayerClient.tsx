"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getEpisodeById, getNextEpisodeId } from "../../../lib/flow";

export default function EpisodePlayerClient({
  params,
}: {
  params: { episodeId: string };
}) {
  const router = useRouter();
  const episode = getEpisodeById(params.episodeId);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showChoices, setShowChoices] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const nextEpisodeId = useMemo(() => {
    if (!selectedChoice) return null;
    return getNextEpisodeId(episode.id, selectedChoice);
  }, [episode.id, selectedChoice]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked; ignore for MVP.
      }
    };

    tryPlay();

    const handleTimeUpdate = () => {
      const duration = Number.isFinite(video.duration)
        ? video.duration
        : episode.durationSec;
      const remaining = duration - video.currentTime;
      if (remaining <= 3) {
        setShowChoices(true);
      }
    };

    const handleEnded = () => {
      setShowChoices(true);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    const fallbackTimer = window.setTimeout(() => {
      setShowChoices(true);
    }, Math.max(episode.durationSec - 3, 1) * 1000);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      window.clearTimeout(fallbackTimer);
    };
  }, [episode.durationSec]);

  useEffect(() => {
    if (!nextEpisodeId) return;
    router.push(`/e/${nextEpisodeId}`);
  }, [nextEpisodeId, router]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4 px-4 py-8">
        <div className="w-full">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              playsInline
              autoPlay
              loop={false}
              poster="/poster.png"
              src="/sample.mp4"
              aria-label={`${episode.title} 예고편 영상`}
              title={episode.title}
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs">
              {episode.subtitle}
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs text-white/70">{episode.durationSec}s</p>
              <h1 className="text-lg font-semibold">{episode.title}</h1>
            </div>
          </div>
        </div>

        {showChoices ? (
          <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Episode Ended
            </p>
            <h2 className="mt-2 text-lg font-semibold">다음 선택</h2>
            <div className="mt-3 grid gap-2">
              {episode.choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => setSelectedChoice(choice.id)}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left text-sm text-white transition hover:bg-white/20"
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full text-center text-xs text-white/50">
            에피소드 종료 3초 전 선택지가 표시됩니다.
          </div>
        )}
      </div>
    </main>
  );
}
