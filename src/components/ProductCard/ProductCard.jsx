'use client'
import { useContext } from "react";
import styles from "./styles.module.css";
import { ShoppingCartContext } from "@/contexts";
import { LiaShoppingCartSolid } from "react-icons/lia";

export const ProductCard = () => {
  const {addProduct} = useContext(ShoppingCartContext)
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
      <button className={styles.productShoppingCartButton} onClick={()=>addProduct({
        product: 'Playera K Rollo Show',
        price: '$299.00'
      })}>
        <LiaShoppingCartSolid />
      </button>
    </div>
  );
};
