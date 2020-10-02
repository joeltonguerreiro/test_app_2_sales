import React, { useState } from "react";
import { useForm } from "react-hook-form";

import InputMask from "react-input-mask";

import styles from "./styles.module.scss";
import logo from "../../logo_grey.png";

import Toast from "./toast";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_IN } from "../../constants/actionTypes";

const Login = () => {
  const { handleSubmit, register, errors } = useForm();

  const dispatch = useDispatch();


  type AuthState = {
    isAuthenticated: Boolean;
  };

  type RootState = {
    auth: AuthState;
  };

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  type formValues = {
    login: string;
    password: string;
  };

  const onSubmit = (values: formValues) => {
    let payload = {
      login: values.login || "",
      password: values.password || "",
    };
    dispatch({ type: SIGN_IN, payload: payload });

    window.location.href = "/";
  };

  return (
    <div className={styles.wrapper}>
      {errors.login && <Toast message={errors.login.message} />}

      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.textLogin}>Faça login para começar</div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputMask mask={"99 9 9999 9999"}>
          {() => (
            <input
              className={errors.login ? styles.errorLogin : ""}
              name="login"
              placeholder="E-mail ou telefone"
              ref={register({
                required: "Número de telefone obrigatório. Preencha por favor.",
              })}
            />
          )}
        </InputMask>
        <input
          className={errors.password ? styles.errorLogin : ""}
          name="password"
          type="password"
          placeholder="Senha"
          ref={register({
            required: "Required",
          })}
        />
        <div className={styles.forgetPassword}>ESQUECEU A SENHA?</div>
        <button type="submit">ENTRAR</button>
      </form>
    </div>
  );
};

export default Login;
