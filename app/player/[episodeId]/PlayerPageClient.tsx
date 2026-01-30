"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getEpisodeById, getNextEpisodeId } from "../../../lib/flow";
import ChoiceOverlay from "../../../components/ChoiceOverlay";
import VerticalPlayer from "../../../components/VerticalPlayer";

export default function PlayerPageClient({
  params,
}: {
  params: { episodeId: string };
}) {
  const episode = getEpisodeById(params.episodeId);
  const [showChoices, setShowChoices] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const nextEpisodeId = useMemo(() => {
    if (!selectedChoice) return null;
    return getNextEpisodeId(episode.id, selectedChoice);
  }, [episode.id, selectedChoice]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/feed" className="text-sm text-white/70">
          ← 피드로
        </Link>
        <div className="text-right">
          <p className="text-xs text-white/50">{episode.subtitle}</p>
          <h1 className="text-lg font-semibold">{episode.title}</h1>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 pb-16">
        <VerticalPlayer episode={episode} />

        {!showChoices ? (
          <button
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
            onClick={() => setShowChoices(true)}
          >
            에피소드 종료 보기
          </button>
        ) : (
          <ChoiceOverlay
            choices={episode.choices}
            onSelect={(choiceId) => setSelectedChoice(choiceId)}
          />
        )}

        {nextEpisodeId ? (
          <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-white/60">다음 에피소드</p>
            <Link
              href={`/player/${nextEpisodeId}`}
              className="mt-2 inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm"
            >
              다음 회차로 이동
              <span>→</span>
            </Link>
          </div>
        ) : null}
      </section>
    </main>
  );
}
