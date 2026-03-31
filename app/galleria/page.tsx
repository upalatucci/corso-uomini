import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { photos, PHOTO_DIR } from "./photos";

const Galleria: FC = () => {
  return (
    <main className="min-h-screen bg-defaultBg">
      {/* Hero header */}
      <div className="relative overflow-hidden bg-primary px-4 pb-12 pt-[120px] text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Corso Nazionale Uomini 2026
          </p>
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Galleria Fotografica
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-white/70">
            {photos.length} foto dal corso di Salerno
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="mx-auto max-w-[1960px] px-3 py-8 sm:px-4 md:py-12">
        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
          {photos.map((photo, index) => (
            <Link
              key={photo}
              href={`/p/${encodeURIComponent(photo)}`}
              className="group relative mb-3 block break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  alt={`Foto ${index + 1} — Corso Salerno 2026`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={`${PHOTO_DIR}/${photo}`}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    (max-width: 1280px) 33vw,
                    (max-width: 1536px) 25vw,
                    20vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    {index + 1} / {photos.length}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back to top */}
      <div className="pb-12 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
          </svg>
          Torna su
        </a>
      </div>
    </main>
  );
};

export default Galleria;
