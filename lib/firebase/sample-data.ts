import type { Episode, Series } from "./schema";

export const sampleSeries: Series[] = [
  {
    id: "series-1",
    title: "사라진 클립",
    summary: "3초짜리 영상이 불러온 미스터리",
    coverColor: "linear-gradient(140deg, #ff6b3d, #ffb64f)",
    category: "미스터리",
    createdAt: "2026-01-29T00:00:00.000Z",
  },
];

export const sampleEpisodes: Episode[] = [
  {
    id: "episode-1",
    seriesId: "series-1",
    title: "사라진 클립",
    subtitle: "EP.01 낯선 번호의 통화",
    synopsis:
      "자정에 도착한 3초짜리 영상. 마지막 프레임 속 번호가 사건을 움직이기 시작한다.",
    durationSec: 58,
    tags: ["미스터리", "스릴러", "1분"],
    thumbnailColor: "linear-gradient(140deg, #3d7bff, #7ed6ff)",
    publishedAt: "2026-01-29T00:00:00.000Z",
    choices: [
      {
        id: "call",
        label: "바로 전화를 건다",
        result: "통화 연결음 사이로 숨소리만 들린다.",
        order: 1,
      },
      {
        id: "trace",
        label: "번호를 추적한다",
        result: "사라진 제작사의 기록이 다시 움직인다.",
        order: 2,
      },
      {
        id: "ignore",
        label: "무시하고 다시 잠든다",
        result: "새벽 3시, 문 앞에 택배가 도착한다.",
        order: 3,
      },
    ],
  },
];
