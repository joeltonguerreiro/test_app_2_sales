import React from "react";

import styles from "./styles.module.scss";

import {StyledWrapper} from "./styles";

import logo from "../../logo.png"

const SplashScreen: React.FC = () => {
    return <StyledWrapper>
        <img src={logo} alt={"logo"} className={styles.logo}/>
    </StyledWrapper>
}

export default SplashScreen;