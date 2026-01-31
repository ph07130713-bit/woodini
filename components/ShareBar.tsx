"use client";

import { useEffect, useMemo, useState } from "react";

type ShareBarProps = {
  title: string;
  text: string;
  url: string;
};

export default function ShareBar({ title, text, url }: ShareBarProps) {
  const [currentUrl, setCurrentUrl] = useState(url);
  const encodedUrl = useMemo(() => encodeURIComponent(currentUrl), [currentUrl]);
  const encodedTitle = useMemo(() => encodeURIComponent(title), [title]);
  const encodedText = useMemo(() => encodeURIComponent(text), [text]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCurrentUrl(window.location.href);
  }, []);

  const handleNativeShare = async () => {
    if (typeof navigator === "undefined" || !navigator.share) return;
    try {
      await navigator.share({ title, text, url: currentUrl });
    } catch {
      // User cancelled or share failed; ignore.
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("링크가 복사되었습니다.");
    } catch {
      window.prompt("링크를 복사하세요.", currentUrl);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">공유하기</p>
          <p className="mt-1 text-xs text-white/60">
            이 페이지가 도움이 되었다면 공유해 주세요.
          </p>
        </div>
        <button
          className="rounded-full border border-white/20 px-4 py-2 text-xs"
          onClick={handleNativeShare}
          type="button"
        >
          기기 공유
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <a
          className="rounded-full border border-white/20 px-4 py-2"
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          X 공유
        </a>
        <a
          className="rounded-full border border-white/20 px-4 py-2"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          className="rounded-full border border-white/20 px-4 py-2"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="rounded-full border border-white/20 px-4 py-2"
          href={`https://share.naver.com/web/shareView?url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
        >
          네이버
        </a>
        <button
          className="rounded-full border border-white/20 px-4 py-2"
          onClick={handleCopy}
          type="button"
        >
          링크 복사
        </button>
      </div>
    </div>
  );
}
