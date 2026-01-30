import { episodes } from "./data/seed";

export const getEpisodeById = (episodeId: string) =>
  episodes.find((episode) => episode.id === episodeId) ?? episodes[0];

export const getNextEpisodeId = (episodeId: string, choiceId: string) => {
  const episode = getEpisodeById(episodeId);
  return (
    episode.choices.find((choice) => choice.id === choiceId)?.nextEpisodeId ??
    episodes[0].id
  );
};
