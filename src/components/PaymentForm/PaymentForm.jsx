"use client";
import Swal from "sweetalert2";
import styles from "./styles.module.css";
import { UserContext } from "@/contexts";
import { useContext, useState } from "react";
import { PaymentButtons } from "./PaymentButtons";

export const PaymentForm = ({ paymentAmount }) => {
  const { user, addUser } = useContext(UserContext);
  const [formData, setFormData] = useState(null);
  const onChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    Swal.fire({
      title: "Dirección de envío añadida",
      icon: "success",
      timer: 1000,
      position: "top-end",
      showConfirmButton: false,
    });
    addUser(formData);
  };
  return (
    <div className={styles.paymentFormWrapper}>
      <span>Añade una dirección de envío</span>
      <form className={styles.addressFormWrapper} onSubmit={onSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            autoComplete="off"
            name="usuario_nombre"
            onChange={onChange}
            required
            type="text"
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            autoComplete="off"
            name="usuario_direccion"
            onChange={onChange}
            required
            type="text"
          />
        </div>
        <div>
          <label>Código postal:</label>
          <input
            autoComplete="off"
            name="usuario_cp"
            onChange={onChange}
            required
            type="text"
          />
        </div>
        <div>
          <label>Estado:</label>
          <input
            autoComplete="off"
            name="usuario_estado"
            onChange={onChange}
            required
            type="text"
          />
        </div>
        <div>
          <label>Municipio:</label>
          <input
            autoComplete="off"
            name="usuario_municipio"
            onChange={onChange}
            required
            type="text"
          />
        </div>
        <div>
          <label>Colonia:</label>
          <input
            autoComplete="off"
            name="usuario_colonia"
            onChange={onChange}
            required
            type="text"
          />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input
            autoComplete="off"
            name="usuario_email"
            onChange={onChange}
            required
            type="text"
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            autoComplete="off"
            name="usuario_telefono"
            onChange={onChange}
            required
            type="text"
          />
        </div>
        <button>Guardar dirección de envío</button>
      </form>
      {!formData ? null : <PaymentButtons paymentAmount={paymentAmount} />}
    </div>
  );
};
