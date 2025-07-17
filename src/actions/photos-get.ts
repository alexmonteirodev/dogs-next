"use server";

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

const photosGet = async () => {
  const r = await fetch(
    "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0"
  );
  const data: Photo[] = await r.json();
  return data;
};

export default photosGet;
