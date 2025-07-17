"use client";
import login from "@/actions/login";
import React from "react";
import Button from "@/components/forms/button";
import { useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Carregando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

const LoginForm = () => {
  const [state, action] = React.useActionState(login, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  );
};

export default LoginForm;
