"use client";
import Link from "next/link";
import { useContext } from "react";
import styles from "./styles.module.css";
import { ShoppingCartContext } from "@/contexts";
import { LiaShoppingCartSolid } from "react-icons/lia";

export const ProductCard = ({ product }) => {
  const { addProduct } = useContext(ShoppingCartContext);
  return (
    <>
      {!product ? null : (
        <div className={styles.productCardWrapper}>
          <figure className={styles.productImage}>
            <img src={product.producto_imagen} />
          </figure>
          <span>{product.producto_nombre}</span>
          <span>${product.producto_precio}.00</span>
          <Link
            href={`/pago/${product.producto_id}`}
            className={styles.productPaymentButton}
          >
            Comprar ahora
          </Link>
          <button
            className={styles.productShoppingCartButton}
            onClick={() => addProduct(product)}
          >
            <LiaShoppingCartSolid />
          </button>
        </div>
      )}
    </>
  );
};
