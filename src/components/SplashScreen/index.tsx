import React from "react";

import styles from "./styles.module.scss";

import logo from "../../logo.png"

const SplashScreen: React.FC = () => {
    return <div className={styles.wrapper}>
        <img src={logo} alt={"logo"} className={styles.logo}/>
    </div>
}

export default SplashScreen;