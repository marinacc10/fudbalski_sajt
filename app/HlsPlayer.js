"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function HlsPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      className="rounded w-full max-h-[500px]"
      autoPlay
    />
  );
}
