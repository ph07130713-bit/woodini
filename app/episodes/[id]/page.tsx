import type { Metadata } from "next";
import EpisodeDetailClient from "./EpisodeDetailClient";

export const dynamicParams = false;

export const generateStaticParams = () => [{ id: "1" }];

const episodeSeo = {
  title: "사라진 클립",
  subtitle: "EP.01 낯선 번호의 통화",
  synopsis:
    "자정, 3초짜리 영상이 도착한다. 마지막 프레임 속 번호는 이미 지워진 제작사와 연결되어 있다.",
};

export const generateMetadata = ({
  params,
}: {
  params: { id: string };
}): Metadata => {
  const title = `${episodeSeo.title} · ${episodeSeo.subtitle}`;
  const description = episodeSeo.synopsis;

  return {
    title,
    description,
    alternates: {
      canonical: `/episodes/${params.id}`,
    },
    openGraph: {
      title,
      description,
      url: `/episodes/${params.id}`,
      type: "article",
    },
    twitter: {
      title,
      description,
    },
  };
};

export default function EpisodeDetail({
  params,
}: {
  params: { id: string };
}) {
  return <EpisodeDetailClient params={params} />;
}
