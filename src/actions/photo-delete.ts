"use server";

import { PHOTO_DELETE } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Photo } from "./photos-get";

export type StateType = {
  ok: boolean;
  error: string;
  data: Photo[] | null;
};

const photoDelete = async (id: string) => {
  const tokenCookie = (await cookies()).get("token");
  const token = tokenCookie?.value;

  try {
    if (!token) throw new Error("Token inválido");
    const { url } = PHOTO_DELETE(id);
    const r = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!r.ok) throw new Error("Erro ao deletar foto");
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag("photos");
  revalidatePath("/conta");
  redirect("/conta");
};

export default photoDelete;
