"use client";

import { useEffect, useRef, useState } from "react";

type MinimalVideoPlayerProps = {
  src: string;
  poster?: string;
  title?: string;
  subtitle?: string;
  onEnded?: () => void;
};

export default function MinimalVideoPlayer({
  src,
  poster,
  title,
  subtitle,
  onEnded,
}: MinimalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    tryPlay();

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      setProgress((video.currentTime / video.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onEnded?.();
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [onEnded]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted={isMuted}
        playsInline
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className="rounded-full bg-black/50 px-4 py-2 text-xs text-white"
        >
          {isPlaying ? "일시정지" : "재생"}
        </button>
      </div>

      <div className="absolute left-4 top-4 space-y-1">
        {subtitle ? (
          <p className="rounded-full bg-white/20 px-3 py-1 text-[10px] text-white">
            {subtitle}
          </p>
        ) : null}
        {title ? (
          <p className="text-sm font-semibold text-white drop-shadow">{title}</p>
        ) : null}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-white/70">
          <button onClick={toggleMute}>{isMuted ? "음소거" : "소리"}</button>
          <span>자동 재생</span>
        </div>
      </div>
    </div>
  );
}
