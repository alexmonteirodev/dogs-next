"use client";
import React from "react";
import Button from "@/components/forms/button";
import { useFormStatus } from "react-dom";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "@/components/login/login-form.module.css";
import passwordReset from "@/actions/password-reset";
import { ResetarSearchParams } from "@/app/login/resetar/page";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button>Resetar Senha</Button>
      )}
    </>
  );
}

const LoginResetarForm = ({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) => {
  const [state, action] = React.useActionState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova Senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
};

export default LoginResetarForm;
