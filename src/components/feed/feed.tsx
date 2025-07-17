import React from "react";
import FeedPhotos from "./feed-photos";
import { Photo } from "@/actions/photos-get";

const FeedPage = ({ photos }: { photos: Photo[] }) => {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
};

export default FeedPage;
