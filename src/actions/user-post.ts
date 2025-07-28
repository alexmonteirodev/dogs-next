"use server";

import { USER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import login from "./login";

export type StateType = {
  ok: boolean;
  error: string;
  data: null;
};

const userPost = async (state: StateType, formData: FormData) => {
  const username = formData.get("username") as string | null;
  const email = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  //   console.log(username, password);

  try {
    if (!username || !password || !email) throw new Error("Preencha os dados");
    const { url } = USER_POST();
    const r = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!r.ok) throw new Error("Email ou Usuário já cadastrado.");
    const data = await r.json();

    const { ok } = await login({ ok: true, error: "", data: null }, formData);

    if (!ok) throw new Error("Erro ao logar");
    if (!data) throw new Error("Erro ao pegar dados");

    return {
      ok: true,
      error: "",
      data: null,
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default userPost;
