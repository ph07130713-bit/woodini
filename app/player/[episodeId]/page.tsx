import { episodes } from "../../../lib/data/seed";
import PlayerPageClient from "./PlayerPageClient";

export const dynamicParams = false;

export const generateStaticParams = () =>
  episodes.map((episode) => ({ episodeId: episode.id }));

export default function PlayerPage({
  params,
}: {
  params: { episodeId: string };
}) {
  return <PlayerPageClient params={params} />;
}
