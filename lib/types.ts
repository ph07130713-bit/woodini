export type Choice = {
  id: string;
  label: string;
  nextEpisodeId: string;
};

export type Episode = {
  id: string;
  title: string;
  subtitle: string;
  synopsis: string;
  durationSec: number;
  tags: string[];
  poster: string;
  choices: Choice[];
};

export type FeedRow = {
  id: string;
  label: string;
  episodeIds: string[];
};
