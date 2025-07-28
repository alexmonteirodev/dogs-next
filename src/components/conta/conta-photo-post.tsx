"use client";
import React from "react";
import Button from "@/components/forms/button";
import { useFormStatus } from "react-dom";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "@/components/conta/conta-photo-post.module.css";
import photoPost from "@/actions/photo-post";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar</Button>
      )}
    </>
  );
}

const ContaPhotoPost = () => {
  const [state, action] = React.useActionState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  const [img, setImg] = React.useState("");
  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (!target.files) return;
    setImg(URL.createObjectURL(target.files[0]));
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} className={styles.form}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          onChange={handleImgChange}
          type="file"
          id="img"
          name="img"
          className={styles.file}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
};

export default ContaPhotoPost;
