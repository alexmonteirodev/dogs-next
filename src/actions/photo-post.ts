"use server";

import { PHOTO_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type StateType = {
  ok: boolean;
  error: string;
  data: null;
};

const photoPost = async (state: StateType, formData: FormData) => {
  const tokenCookie = (await cookies()).get("token");
  const token = tokenCookie?.value;
  const nome = formData.get("nome") as string | null;
  const idade = formData.get("idade") as string | null;
  const peso = formData.get("peso") as string | null;
  const img = formData.get("img") as File;
  try {
    if (!token || !nome || !idade || !peso || img?.size === 0)
      throw new Error("Preencha os dados");
    const { url } = PHOTO_POST();
    const r = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
    if (!r.ok) {
      const errorText = await r.text();
      console.error("Erro da API:", r.status, errorText);
      throw new Error("Erro ao carregar dados");
    }
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag("photos");
  redirect("/conta");
};

export default photoPost;
