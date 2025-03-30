import { photos } from "@/app/galleria/photos";
import SingleGallery from "@/components/SingleGallery";
import { FC } from "react";

const Photo: FC<{ params: Promise<{ photo: string }> }> = async ({
  params,
}) => {
  const { photo: selectedPhoto } = await params;

  const photoIndex = photos.findIndex((photo) => photo === selectedPhoto);

  const nextPhoto = photos?.[(photoIndex + 1) % photos.length];
  const prevPhoto =
    photos?.[photoIndex - 1 > 0 ? photoIndex - 1 : photos.length - 1];

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
    photo,
  }));
}

export default Photo;
