import { NavBar } from "@/components";
import styles from "./styles.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export const Jumbotron = () => {
  return (
    <section className={styles.jumbotronWrapper}>
      <div className={styles.jumbotronMask}>
        <NavBar />
        <div className={styles.jumbotronTitles}>
          <img
            src="/assets/images/krollo-logo.png"
            alt="KROLLOSHOW"
            className={styles.jumbotronImage}
          />
          <div className={styles.jumbotronButtons}>
            <a href="https://www.instagram.com/wilyn_krollo/" target="_blank">
              <FaInstagram /> <span>Willyn</span>
            </a>
            <a
              href="https://www.tiktok.com/@wilyn_krollo?_t=ZM-8u4v6neWjH5&_r=1"
              target="_blank"
            >
              <FaTiktok/> <span>Willyn</span>
            </a>
            <a
              href="https://www.facebook.com/krolloshow"
              target="_blank"
            >
              <FaFacebook/> <span>KROLLOSHOW</span>
            </a>
            <a
              href="https://www.instagram.com/patitas_k_rollo/"
              target="_blank"
            >
              <FaInstagram /> <span>Patitas</span>
            </a>
            <a
              href="https://www.tiktok.com/@patitas_7w7?_t=ZM-8u4v93G0SLW&_r=1"
              target="_blank"
            >
              <FaTiktok/> <span>Patitas</span>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};
