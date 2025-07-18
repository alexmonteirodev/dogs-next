import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src={"assets/dogs-footer.svg"} alt="Dogs" width={28} height={22} />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
