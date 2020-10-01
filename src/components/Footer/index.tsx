import React from "react";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <span></span>
        <span>Inicio</span>
      </div>
      <div>
        <span></span>
        <span>Chat</span>
      </div>
      <div>
        <span></span>
        <span>Clientes</span>
      </div>
      <div>
        <span></span>
        <span>Configurações</span>
      </div>
    </div>
  );
};

export default Footer;
