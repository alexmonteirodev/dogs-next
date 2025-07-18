"use server";

import { PASSWORD_LOST } from "@/functions/api";
import apiError from "@/functions/api-error";

export type StateType = {
  ok: boolean;
  error: string;
  data: null;
};

const passwordLost = async (state: StateType, formData: FormData) => {
  const login = formData.get("login") as string | null;
  const urlPerdeu = formData.get("url") as string | null;

  //   console.log(username, password);

  try {
    if (!login) throw new Error("Preencha os dados");
    const { url } = PASSWORD_LOST();
    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        url: urlPerdeu,
      }),
    });
    if (!r.ok) throw new Error("Email ou Usuário não cadastrado.");

    return {
      ok: true,
      error: "",
      data: null,
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default passwordLost;
