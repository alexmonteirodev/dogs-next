import ContaPhotoPost from "@/components/conta/conta-photo-post";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Postar | Minha conta",
};

const PostarPage = () => {
  return (
    <div>
      <ContaPhotoPost />
    </div>
  );
};

export default PostarPage;
