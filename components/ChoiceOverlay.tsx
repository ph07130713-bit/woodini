"use client";

import type { Choice } from "../lib/types";

export default function ChoiceOverlay({
  choices,
  onSelect,
}: {
  choices: Choice[];
  onSelect: (choiceId: string) => void;
}) {
  return (
    <div className="w-full max-w-[420px] rounded-3xl border border-white/10 bg-black/60 p-4">
      <p className="text-xs uppercase tracking-widest text-white/60">Episode Ended</p>
      <h3 className="mt-2 text-lg font-semibold text-white">다음 선택</h3>
      <div className="mt-3 grid gap-2">
        {choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onSelect(choice.id)}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left text-sm text-white transition hover:bg-white/20"
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}
