"use client";
import login from "@/actions/login";
import React from "react";
import Button from "@/components/forms/button";
import { useFormStatus } from "react-dom";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";

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

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
};

export default LoginForm;
