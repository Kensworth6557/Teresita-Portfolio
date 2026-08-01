"use client";

import { useEffect, useRef } from "react";

type FilmPlayerProps = {
  src: string;
  poster: string;
  title: string;
};

export default function FilmPlayer({
  src,
  poster,
  title,
}: FilmPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;
  }, [src]);

  return (
    <video
      ref={videoRef}
      key={src}
      controls
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={title}
      className="max-h-screen w-full bg-black object-contain"
      onLoadedMetadata={(event) => {
        event.currentTarget.muted = false;
        event.currentTarget.volume = 1;
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
}