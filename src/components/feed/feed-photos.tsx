import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/components/feed/feed.module.css";

const FeedPhotos = ({ photos }: { photos: Photo[] }) => {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li key={i} className={styles.photo}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FeedPhotos;
