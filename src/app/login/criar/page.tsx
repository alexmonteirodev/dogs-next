import LoginCriarForm from "@/components/login/login-criar-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta no site Dogs",
};

const CriarPage = () => {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  );
};

export default CriarPage;
