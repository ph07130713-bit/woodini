import { episodes } from "../../../lib/data/seed";
import EpisodePlayerClient from "./EpisodePlayerClient";

export const dynamicParams = false;

export const generateStaticParams = () =>
  episodes.map((episode) => ({ episodeId: episode.id }));

export default function EpisodePlayerPage({
  params,
}: {
  params: { episodeId: string };
}) {
  return <EpisodePlayerClient params={params} />;
}
