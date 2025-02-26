import styles from "./styles.module.css";
import { LiaShoppingCartSolid } from "react-icons/lia";

export const ProductCard = () => {
  return (
    <div className={styles.productCardWrapper}>
      <figure className={styles.productImage}>
        <img src="/assets/images/krollo-mockup.png" />
      </figure>
      <span>Playera K Rollo Show</span>
      <span>$299.00</span>
      <a href="/" className={styles.productPaymentButton}>
        Comprar ahora
      </a>
      <button className={styles.productShoppingCartButton}>
        <LiaShoppingCartSolid />
      </button>
    </div>
  );
};
