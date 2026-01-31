import type { Metadata } from "next";
import { episodes } from "../../../lib/data/seed";
import { getEpisodeById } from "../../../lib/flow";
import EpisodePlayerClient from "./EpisodePlayerClient";

export const dynamicParams = false;

export const generateStaticParams = () =>
  episodes.map((episode) => ({ episodeId: episode.id }));

export const generateMetadata = ({
  params,
}: {
  params: { episodeId: string };
}): Metadata => {
  const episode = getEpisodeById(params.episodeId);
  const title = `${episode.title} · ${episode.subtitle}`;
  const description = episode.synopsis;

  return {
    title,
    description,
    alternates: {
      canonical: `/player/${episode.id}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
};

export default function EpisodePlayerPage({
  params,
}: {
  params: { episodeId: string };
}) {
  return <EpisodePlayerClient params={params} />;
}
