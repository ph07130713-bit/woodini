import type { Episode, FeedRow } from "../types";

export const series = {
  id: "series-1",
  title: "사라진 클립",
  summary: "3초짜리 영상이 부른 미스터리",
  cover: "bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-300",
  category: "미스터리",
};

export const episodes: Episode[] = [
  {
    id: "ep-1",
    title: "사라진 클립",
    subtitle: "EP.01 낯선 번호",
    synopsis:
      "자정에 도착한 3초짜리 영상. 마지막 프레임 속 번호가 사건을 시작한다.",
    durationSec: 58,
    tags: ["미스터리", "스릴러", "1분"],
    poster: "bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-300",
    videoSrc: "/bulryun-short.mp4",
    choices: [
      { id: "call", label: "바로 전화를 건다", nextEpisodeId: "ep-2" },
      { id: "trace", label: "번호를 추적한다", nextEpisodeId: "ep-3" },
    ],
  },
  {
    id: "ep-2",
    title: "연결음",
    subtitle: "EP.02 숨소리",
    synopsis: "통화 연결음 사이로 숨소리만 들린다. 화면에 녹화 중 표시가 켜진다.",
    durationSec: 62,
    tags: ["스릴러", "단서"],
    poster: "bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500",
    videoSrc: "/sample.mp4",
    choices: [
      { id: "stay", label: "통화를 유지한다", nextEpisodeId: "ep-4" },
      { id: "hang", label: "전화를 끊는다", nextEpisodeId: "ep-4" },
    ],
  },
  {
    id: "ep-3",
    title: "기록",
    subtitle: "EP.02 사라진 제작사",
    synopsis: "번호는 3년 전 사라진 제작사의 기록으로 연결된다. 서버는 아직 살아 있다.",
    durationSec: 59,
    tags: ["미스터리", "추적"],
    poster: "bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400",
    videoSrc: "/sample.mp4",
    choices: [
      { id: "enter", label: "서버에 접속한다", nextEpisodeId: "ep-4" },
      { id: "wait", label: "팀을 부른다", nextEpisodeId: "ep-4" },
    ],
  },
  {
    id: "ep-4",
    title: "노이즈",
    subtitle: "EP.03 끊기는 화면",
    synopsis: "영상이 끊기고, 낯선 좌표가 화면에 떠오른다. 다음 선택을 기다린다.",
    durationSec: 57,
    tags: ["스릴러", "속도"],
    poster: "bg-gradient-to-br from-fuchsia-600 via-purple-500 to-indigo-500",
    videoSrc: "/sample.mp4",
    choices: [
      { id: "go", label: "좌표로 향한다", nextEpisodeId: "ep-1" },
      { id: "share", label: "좌표를 공유한다", nextEpisodeId: "ep-1" },
    ],
  },
];

export const feedRows: FeedRow[] = [
  { id: "row-1", label: "지금 뜨는 시리즈", episodeIds: ["ep-1", "ep-2"] },
  { id: "row-2", label: "하루 10분 몰입", episodeIds: ["ep-3", "ep-4"] },
];

export const landingHighlights = [
  {
    title: "1분 안에 바뀌는 결말",
    desc: "선택 하나로 다음 에피소드가 달라진다.",
  },
  {
    title: "모바일 퍼스트 9:16",
    desc: "세로형 플레이어에 최적화된 경험.",
  },
  {
    title: "간단한 MVP",
    desc: "로그인/결제/댓글 없이 핵심 흐름만 검증.",
  },
];
