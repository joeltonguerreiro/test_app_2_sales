import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

import { IconHome, IconChat, IconClients, IconSettings } from "./icons";

const FooterMenu = () => {
  let location = useLocation();

  return (
    <div className={styles.footerMenu}>
      <NavLink
        className={styles.footerMenuItem}
        to="/"
        activeStyle={{
          opacity: 1,
        }}
      >
        <IconHome active={location.pathname === "/"} />
        <span>Inicio</span>
      </NavLink>
      <NavLink className={styles.footerMenuItem} to="/chat">
        <IconChat active={location.pathname === "/chat"} />
        <span>Chat</span>
      </NavLink>
      <NavLink className={styles.footerMenuItem} to="/clients">
        <IconClients active={location.pathname === "/clients"} />
        <span>Clientes</span>
      </NavLink>
      <NavLink className={styles.footerMenuItem} to="/settings">
        <IconSettings active={location.pathname === "/settings"} />
        <span>Configurações</span>
      </NavLink>
    </div>
  );
};

export default FooterMenu;
