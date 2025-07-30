import photoGet from "@/actions/photo-get";
import PhotoContent from "@/components/photo/photo-content";
import { notFound } from "next/navigation";
import React from "react";

type FotoIdParams = {
  id: string;
};

export async function generateMetadata({ params }: { params: FotoIdParams }) {
  const { data } = await photoGet(params.id);
  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
  };
}

const FotoIdPage = async ({ params }: { params: { id: string } }) => {
  const p = await params;
  const { data } = await photoGet(p.id);
  console.log("data", data);

  if (!data) return notFound();
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
};

export default FotoIdPage;
