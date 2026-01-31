const fallbackSiteUrl = "https://woodini.space";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? fallbackSiteUrl;

export const siteConfig = {
  name: "My Drama Lab",
  shortName: "My Drama Lab",
  description:
    "선택형 숏드라마 MVP를 7일 안에 검증할 수 있는 모바일 퍼스트 체험.",
  locale: "ko_KR",
  language: "ko-KR",
};

export const toAbsoluteUrl = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
};
