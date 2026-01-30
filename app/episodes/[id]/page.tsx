import EpisodeDetailClient from "./EpisodeDetailClient";

export const dynamicParams = false;

export const generateStaticParams = () => [{ id: "1" }];

export default function EpisodeDetail({
  params,
}: {
  params: { id: string };
}) {
  return <EpisodeDetailClient params={params} />;
}
