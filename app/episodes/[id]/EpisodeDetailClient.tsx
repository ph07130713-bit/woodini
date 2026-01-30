"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const episodeMap: Record<
  string,
  {
    title: string;
    subtitle: string;
    duration: string;
    tags: string[];
    synopsis: string;
    choices: { id: string; label: string; result: string }[];
  }
> = {
  "1": {
    title: "사라진 클립",
    subtitle: "EP.01 낯선 번호의 통화",
    duration: "00:58",
    tags: ["미스터리", "스릴러", "1분"],
    synopsis:
      "자정, 3초짜리 영상이 도착한다. 마지막 프레임 속 번호는 이미 지워진 제작사와 연결되어 있다.",
    choices: [
      {
        id: "call",
        label: "바로 전화를 건다",
        result:
          "통화 연결음 사이로 숨소리만 들린다. 화면에 ‘녹화 중’ 표시가 켜진다.",
      },
      {
        id: "trace",
        label: "번호를 추적한다",
        result:
          "번호는 3년 전 사라진 제작사의 기록과 연결된다. 서버가 아직 살아 있다.",
      },
      {
        id: "ignore",
        label: "무시하고 다시 잠든다",
        result: "새벽 3시, 문 앞에 택배가 도착한다. 보낸 사람 없음.",
      },
    ],
  },
};

export default function EpisodeDetailClient({
  params,
}: {
  params: { id: string };
}) {
  const episode = episodeMap[params.id] ?? episodeMap["1"];
  const [selected, setSelected] = useState(episode.choices[0]);
  const resultText = useMemo(() => selected.result, [selected]);

  return (
    <div className="episode-shell">
      <header className="episode-topbar">
        <Link className="back-link" href="/">
          ← 홈으로
        </Link>
        <div className="episode-title">
          <h1>{episode.title}</h1>
          <p>{episode.subtitle}</p>
        </div>
        <div className="episode-actions">
          <button className="btn ghost">찜하기</button>
          <button className="btn primary">다음 회차 예약</button>
        </div>
      </header>

      <section className="episode-hero">
        <div className="player-panel">
          <div className="player-screen">
            <span className="screen-tag">NOW PLAYING</span>
            <div className="screen-title">{episode.title}</div>
            <div className="screen-meta">{episode.duration}</div>
          </div>
          <div className="episode-meta">
            {episode.tags.map((tag) => (
              <span key={tag} className="option-pill">
                {tag}
              </span>
            ))}
          </div>
          <p className="episode-synopsis">{episode.synopsis}</p>
        </div>

        <div className="choice-panel">
          <h2>선택지</h2>
          <p className="choice-help">당신의 선택이 다음 회차의 결을 만든다.</p>
          <div className="choice-list">
            {episode.choices.map((choice) => (
              <button
                key={choice.id}
                className={`choice-item ${
                  selected.id === choice.id ? "active" : ""
                }`}
                onClick={() => setSelected(choice)}
              >
                {choice.label}
              </button>
            ))}
          </div>
          <div className="result-panel">
            <span>선택 결과</span>
            <p>{resultText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
