import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const photos = await photosGet();
  console.log("data aqui", photos);
  return (
    <section className="container mainContainer">
      <Feed photos={photos} />
    </section>
  );
}
