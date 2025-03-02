"use client";
import styles from "./styles.module.css";
import { UserContext } from "@/contexts";
import { useContext, useState } from "react";

export const AddressForm = () => {
  const { addUser } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const onChange = (evt)=>{
    setUser({
      ...user,
      [evt.target.name]: evt.target.value
    })
  }
  const onSubmit = (evt)=>{
    evt.preventDefault();
    return addUser(user)
  }
  return (
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
  );
};
