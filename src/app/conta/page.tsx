import FeedPage from "@/components/feed/feed";
import { Metadata } from "next";
import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minha conta",
};

const ContaPage = async () => {
  const { data: user } = await userGet();
  // console.log(user);

  const photos = await photosGet({ user: user?.username });
  return (
    <section>
      {photos.data?.length ? (
        <FeedPage photos={photos} user={user?.username} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Nenhuma foto encontrada
          </p>
          <Link
            href={"/conta/postar"}
            className="button"
            style={{ display: "inline-block" }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
};

export default ContaPage;
