export type Choice = {
  id: string;
  label: string;
  result: string;
  order: number;
};

export type Episode = {
  id: string;
  seriesId: string;
  title: string;
  subtitle: string;
  synopsis: string;
  durationSec: number;
  tags: string[];
  thumbnailColor: string;
  publishedAt: string;
  choices: Choice[];
};

export type Series = {
  id: string;
  title: string;
  summary: string;
  coverColor: string;
  category: string;
  createdAt: string;
};

export type UserChoice = {
  id: string;
  episodeId: string;
  choiceId: string;
  createdAt: string;
};

export const COLLECTIONS = {
  series: "series",
  episodes: "episodes",
  userChoices: "userChoices",
} as const;
