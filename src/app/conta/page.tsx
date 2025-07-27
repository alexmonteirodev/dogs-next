"use client";

import React from "react";
import { useUser } from "@/context/user-context";

const ContaPage = () => {
  const { user } = useUser();
  console.log(user);
  return <div>ContaPage_ {user?.nome}</div>;
};

export default ContaPage;
