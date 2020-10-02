import React from "react";

import Header from "../Header";
import FooterMenu from "../FooterMenu";
import Projects from "../Projects";

import styles from "./styles.module.scss";

const Home = () => {
    return <>
        <Header />
        <div className={styles.wrapper}>
            <Projects />
        </div>
        <FooterMenu />
    </>
}

export default Home;