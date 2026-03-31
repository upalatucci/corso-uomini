import { photos } from "@/app/galleria/photos";
import SingleGallery from "@/components/SingleGallery";
import { notFound } from "next/navigation";
import { FC } from "react";

const Photo: FC<{ params: Promise<{ photo: string }> }> = async ({
  params,
}) => {
  const { photo: rawPhoto } = await params;
  const selectedPhoto = decodeURIComponent(rawPhoto);

  const photoIndex = photos.indexOf(selectedPhoto);
  if (photoIndex === -1) notFound();

  const nextPhoto = photos[(photoIndex + 1) % photos.length];
  const prevPhoto = photos[(photoIndex - 1 + photos.length) % photos.length];

  return (
    <SingleGallery
      selectedPhoto={selectedPhoto}
      nextPhoto={nextPhoto}
      prevPhoto={prevPhoto}
    />
  );
};

export async function generateStaticParams() {
  return photos.map((photo) => ({
    photo: encodeURIComponent(photo),
  }));
}

export default Photo;
