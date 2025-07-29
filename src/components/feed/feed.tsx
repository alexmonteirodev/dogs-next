import React from "react";
import FeedPhotos from "./feed-photos";
import { Photo } from "@/actions/photos-get";

type PhotosProp = {
  data: Photo[];
  error: string;
  ok: boolean;
};

const FeedPage = ({ photos }: { photos: PhotosProp }) => {
  // console.log("photos em FeedPage:", photos);
  return (
    <div>
      <FeedPhotos photos={Array.isArray(photos.data) ? photos.data : []} />
    </div>
  );
};

export default FeedPage;
