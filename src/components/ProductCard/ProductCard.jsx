"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useContext } from "react";
import styles from "./styles.module.css";
import { ShoppingCartContext } from "@/contexts";
import { LiaShoppingCartSolid } from "react-icons/lia";

export const ProductCard = ({ product }) => {
  const { addProduct } = useContext(ShoppingCartContext);
  const showModal = () => {
    Swal.fire({
      title: "Añadido al carrito",
      icon: "success",
      timer: 1000,
      position: "top-end",
      showConfirmButton: false,
    });
    return addProduct(product);
  };
  return (
    <>
      {!product ? null : (
        <div className={styles.productCardWrapper}>
          <figure className={styles.productImage}>
            <img src={product.producto_imagen} />
          </figure>
          <span>{product.producto_nombre}</span>
          <span>
            Únicamente <strong>{product.producto_inventario}</strong> pieza(s)
            disponibles
          </span>
          <span>${product.producto_precio}.00</span>
          {!product.producto_adicionales ? null : (
            <span className={styles.productAditionals}>
              {product.producto_adicionales}
            </span>
          )}
          <Link
            href={`/pago/${product.producto_id}`}
            className={styles.productPaymentButton}
          >
            Comprar ahora
          </Link>
          {/*
              <button
                className={styles.productShoppingCartButton}
                onClick={showModal}
              >
                <LiaShoppingCartSolid />
              </button>
            */}
        </div>
      )}
    </>
  );
};
