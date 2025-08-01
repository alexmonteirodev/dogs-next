import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="container">
      <h1 className="title">Página não encontrada</h1>
      <Link className="button" href={"/"}>
        Volte para a home
      </Link>
    </section>
  );
};

export default NotFound;
