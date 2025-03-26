import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { photos } from "./photos";

const Galleria: FC = () => {
  return (
    <main className="mx-auto max-w-[1960px] p-4 mt-[120px]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {photos.map((photo) => (
          <Link
            key={photo}
            href={`/?photoId=${photo}`}
            as={`/p/${photo}`}
            shallow
            className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              alt="Foto corso"
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              src={"/photo/" + photo}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Galleria;
