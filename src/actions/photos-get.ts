"use server";

import { PHOTOS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: number;
};

type PhotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};

const photosGet = async ({
  page = 1,
  total = 6,
  user = 0,
}: PhotosGetParams = {}) => {
  try {
    const { url } = PHOTOS_GET({ page, total, user });
    const r = await fetch(url, {
      next: { revalidate: 10, tags: ["photos"] },
    });
    if (!r.ok) throw new Error("Erro ao buscar fotos");
    const data: Photo[] = await r.json();
    return {
      data,
      ok: true,
      error: "",
    };
  } catch (error) {
    return apiError(error);
  }
};

export default photosGet;
