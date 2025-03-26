"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

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
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      router.push(`/p/${nextPhoto}`);
    },
    onSwipedRight: () => {
      router.push(`/p/${prevPhoto}`);
    },
    trackMouse: true,
  });

  return (
    <>
      <div
        className="relative mt-[120px] flex items-center justify-center min-h-[60vh]"
        {...handlers}
      >
        <Link
          href={`/p/${prevPhoto}`}
          className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            ></path>
          </svg>
        </Link>
        <Link
          href={`/p/${nextPhoto}`}
          className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </Link>

        <div className="absolute top-0 left-0 flex items-center gap-2 p-3 text-white">
          <Link
            href="/galleria"
            className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </Link>
        </div>
        <Link
          key={selectedPhoto}
          href={`/?photoId=${selectedPhoto}`}
          as={`/p/${selectedPhoto}`}
          shallow
          className="flex justify-center"
        >
          <Image
            alt="Foto corso"
            className="w-fit transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            src={"/photo/" + selectedPhoto}
            placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc1IiBoZWlnaHQ9IjIyOSIgdmlld0JveD0iMCAwIDE3NSAyMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNzUiIGhlaWdodD0iMjI5IiByeD0iMTYiIGZpbGw9IiM4MDgwODAiIGZpbGwtb3BhY2l0eT0iMC41NSIvPgo8L3N2Zz4K"
            width={720}
            height={480}
          />
        </Link>
      </div>
      <div className="text-center">
        Swipe a destra e sinistra per cambiare foto
      </div>
    </>
  );
};

export default SingleGallery;
