import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import userGet from "@/actions/user-get";

const Header = async () => {
  const user = false;
  const { data } = await userGet();
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link className={styles.logo} href="/">
          <Image
            src={"/assets/dogs.svg"}
            alt="dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {data ? (
          <Link className={styles.login} href="/conta">
            {data.username}
          </Link>
        ) : (
          <Link className={styles.login} href="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
