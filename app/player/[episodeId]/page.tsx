import type { Metadata } from "next";
import { episodes } from "../../../lib/data/seed";
import { getEpisodeById } from "../../../lib/flow";
import PlayerPageClient from "./PlayerPageClient";

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
    openGraph: {
      title,
      description,
      url: `/player/${episode.id}`,
      type: "article",
    },
    twitter: {
      title,
      description,
    },
  };
};

export default function PlayerPage({
  params,
}: {
  params: { episodeId: string };
}) {
  return <PlayerPageClient params={params} />;
}
