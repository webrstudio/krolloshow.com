"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";
import { IoMdClose } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import { LiaShoppingCartSolid } from "react-icons/lia";

export const NavBar = ({ background }) => {
  const [isActive, setIsActive] = useState(false);
  const activeMenu = () => setIsActive(!isActive);
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
        <button className={styles.buttonMenu} onClick={activeMenu}>
          {!isActive ? <HiMiniBars3 /> : <IoMdClose />}
        </button>
        <ul className={`${styles.navList} ${!isActive ? "" : styles.active}`}>
          <li>
            <Link
            href="/"
            onClick={activeMenu}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
            href="/"
            onClick={activeMenu}
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
            href="/"
            onClick={activeMenu}
            >
              <LiaShoppingCartSolid className={styles.navShoppingCart} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
