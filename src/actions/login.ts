"use server";

import { TOKEN_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export type StateType = {
  ok: boolean;
  error: string;
  data: null;
};

const login = async (state: StateType, formData: FormData) => {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  console.log(username, password);

  try {
    if (!username || !password) throw new Error("Preencha os dados");
    const { url } = TOKEN_POST();
    const r = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!r.ok) throw new Error("Senha ou Usuário inválidos");
    const data = await r.json();

    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return {
      ok: true,
      error: "",
      data: null,
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default login;
