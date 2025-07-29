"use client";

import photosGet, { Photo } from "@/actions/photos-get";
import FeedPhotos from "./feed-photos";
import React from "react";

type PhotosProp = {
  data: Photo[] | null;
  error: string;
  ok: boolean;
};

export default function Feed({
  photos,
  user,
}: {
  photos: PhotosProp;
  user?: 0 | string;
}) {
  const initialPhotos = photos.data ?? [];

  const [photosFeed, setPhotosFeed] = React.useState<Photo[]>(initialPhotos);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [infinite, setInfinite] = React.useState(initialPhotos.length >= 6);

  const fetching = React.useRef(false);

  function infiniteScroll() {
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);

    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  React.useEffect(() => {
    if (page === 1) return;

    async function getPagePhotos(page: number) {
      const actionData = await photosGet(
        { page, total: 6, user },
        { cache: "no-store" }
      );

      if (actionData?.data?.length) {
        setPhotosFeed((current) => [...current, ...actionData.data]);

        if (actionData.data.length < 6) {
          setInfinite(false);
        }
      } else {
        setInfinite(false);
      }
    }

    getPagePhotos(page);
  }, [page]);

  React.useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    }

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      {loading && <p>Carregando...</p>}
    </div>
  );
}
