"use server";

import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export type StateType = {
  ok: boolean;
  error: string;
  data: null;
};

export type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

const userGet = async () => {
  try {
    const token = (await cookies()).get("token")?.value;
    if (!token) throw new Error("Token não encontrado.");

    const { url } = USER_GET();
    const r = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });
    if (!r.ok) throw new Error("Erro ao pegar o usuário.");
    const data: User = await r.json();

    return {
      ok: true,
      error: "",
      data,
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default userGet;
