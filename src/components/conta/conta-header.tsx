"use client";
import React from "react";
import { UserContext } from "../../UserContext";
import FeedIcon from "@/icons/feed-icon";
import EstatisticasIcon from "@/icons/estatisticas-icon";
import AdicionarIcon from "@/icons/adicionar-icon";
import SairIcon from "@/icons/sair-icon";
import styles from "./conta-header.module.css";
import useMedia from "@/hooks/use-media";
import { usePathname } from "next/navigation";
import Link from "next/link";

function getTitile(pathname: string) {
  switch (pathname) {
    case "/conta/postar":
      return "Poste Sua Foto";
    case "/conta/estatisticas":
      return "Estatísticas";
    default:
      return "Minha Conta";
  }
}

const ContaHeader = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  function handleLogout() {
    // userLogout();
  }

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitile(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        } nav`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <FeedIcon /> {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === "/conta/estatisticas" ? "active" : ""}
        >
          <EstatisticasIcon /> {mobile && "Estatisticas"}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === "/conta/postar" ? "active" : ""}
        >
          <AdicionarIcon /> {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon /> {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
};

export default ContaHeader;
