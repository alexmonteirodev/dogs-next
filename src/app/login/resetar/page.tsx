import React from "react";

import { Metadata } from "next";
import LoginResetarForm from "@/components/login/login-resetar-form";

export const metadata: Metadata = {
  title: "Resetar | Dogs",
  description: "Resete a sua senha",
};

export type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

const ResetarPage = ({ searchParams }: ResetarSearchParams) => {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
};

export default ResetarPage;
