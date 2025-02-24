import Link from "next/link";
import styles from "./styles.module.css";
import { LiaShoppingCartSolid } from "react-icons/lia";

export const NavBar = ({ background }) => {
  return (
    <header
      className={
        !background
        ? styles.headerWrapper
        : `${styles.headerWrapper} ${styles.headerBackgound}`
      }
    >
      <nav className={`${styles.navWrapper} flexContainer`}>
        <Link href="/">
          <img
            src="/assets/images/krollo-logo.png"
            alt="KROLLOSHOW"
            className={styles.navLogo}
          />
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/">Tienda</Link>
          </li>
        </ul>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <LiaShoppingCartSolid className={styles.navShoppingCart} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
