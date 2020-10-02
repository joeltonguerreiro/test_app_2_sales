import React from "react";
import { useDispatch } from "react-redux";

import Header from "../Header";
import FooterMenu from "../FooterMenu";

import styles from "./styles.module.scss";

import { SIGN_OUT } from "../../constants/actionTypes";

const Settings = () => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch({ type: SIGN_OUT, payload: {} });
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <button onClick={handleSignout}>SAIR</button>
      </div>
      <FooterMenu />
    </>
  );
};

export default Settings;
