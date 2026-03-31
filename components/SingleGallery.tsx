"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useCallback, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import { PHOTO_DIR, photos } from "@/app/galleria/photos";

type SingleGalleryProps = {
  selectedPhoto: string;
  nextPhoto: string;
  prevPhoto: string;
};

const SingleGallery: FC<SingleGalleryProps> = ({
  selectedPhoto,
  nextPhoto,
  prevPhoto,
}) => {
  const router = useRouter();

  const goNext = useCallback(() => router.push(`/p/${encodeURIComponent(nextPhoto)}`), [router, nextPhoto]);
  const goPrev = useCallback(() => router.push(`/p/${encodeURIComponent(prevPhoto)}`), [router, prevPhoto]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") router.push("/galleria");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, router]);

  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    trackMouse: true,
  });

  const currentIndex = photos.indexOf(selectedPhoto) + 1;
  const total = photos.length;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/galleria"
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition hover:bg-white/20 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Galleria
        </Link>

        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium tabular-nums text-white/70 backdrop-blur-md">
          {currentIndex} / {total}
        </span>
      </div>

      {/* Photo area */}
      <div
        className="relative flex flex-1 items-center justify-center px-4 sm:px-16"
        {...handlers}
      >
        {/* Prev button */}
        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/60 backdrop-blur-md transition hover:bg-white/25 hover:text-white sm:left-4 sm:p-4"
          aria-label="Foto precedente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/60 backdrop-blur-md transition hover:bg-white/25 hover:text-white sm:right-4 sm:p-4"
          aria-label="Foto successiva"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <Image
          key={selectedPhoto}
          alt={`Foto ${currentIndex} — Corso Salerno 2026`}
          className="max-h-[calc(100vh-120px)] w-auto rounded-lg object-contain shadow-2xl"
          src={`${PHOTO_DIR}/${selectedPhoto}`}
          width={1920}
          height={1280}
          priority
        />
      </div>

      {/* Bottom hint (mobile only) */}
      <p className="pb-4 text-center text-xs text-white/40 sm:hidden">
        Scorri per cambiare foto
      </p>
    </div>
  );
};

export default SingleGallery;
