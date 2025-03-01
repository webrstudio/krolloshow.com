"use client";
import { useFetch } from "@/hooks";
import styles from "./styles.module.css";
import { PaymentButtons } from "@/components";

export const PaymentProduct = ({ id }) => {
  const { error, data } = useFetch({
    url: `https://test.webrstudio.com/backend/controllers/products/getProductById/index.php?id=${id}`,
  });
  console.log(data);
  return (
    <>
      {!data ? null : (
        <div className={`${styles.paymentDetailsWrapper} flexContainer`}>
          <figure className={styles.productImage}>
            <img src={data.producto_imagen} />
          </figure>
          <div className={styles.productDetailsWrapper}>
            <h3 className={styles.productName}>{data.producto_nombre}</h3>
            <span>Precio: ${data.producto_precio}.00</span>
            <PaymentButtons paymentAmount={data.producto_precio}/>
          </div>
        </div>
      )}
    </>
  );
};
