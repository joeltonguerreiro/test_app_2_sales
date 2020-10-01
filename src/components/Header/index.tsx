import React from "react";

import styles from "./styles.module.scss";

import logoDark from "../../logo_dark.png";

const Header = () => {
    return <div className={styles.header}>
        <img src={logoDark} alt="logo" className={styles.logo}/>
    </div>
}

export default Header;