import login from "@/actions/login";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <form action={login}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />
        <button>Entrar</button>
      </form>
    </>
  );
};

export default LoginForm;
