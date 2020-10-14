import React from "react";
import { useForm } from "react-hook-form";

import InputMask from "react-input-mask";

import styles from "./styles.module.scss";
import logo from "../../logo_grey.png";

import Toast from "./toast";
import { useDispatch } from "react-redux";
import { SIGN_IN } from "../../constants/actionTypes";

const Login = () => {
  const { handleSubmit, register, errors } = useForm();

  const dispatch = useDispatch();

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

  console.log(typeof register);

  return (
    <div className={styles.wrapper}>
      {errors.login && <Toast message={errors.login.message} />}
      {!errors.login && errors.password && <Toast message={errors.password.message} />}

      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.textLogin}>Faça login para começar</div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label className={errors.login ? styles.errorLogin : ""}>
            Telefone
          </label>
          <InputMask mask={"99 9 9999 9999"}>
            {() => (
              <input
                className={errors.login ? styles.errorLogin : ""}
                name="login"
                placeholder="Telefone"
                ref={register({
                  required:
                    "Número de telefone obrigatório. Preencha por favor.",
                })}
              />
            )}
          </InputMask>
        </div>
        <input
          className={errors.password ? styles.errorLogin : ""}
          name="password"
          type="password"
          placeholder="Senha"
          ref={register({
            required:
              "Número de telefone ou senha inválidos. Por favor, tente novamente",
          })}
        />
        <div className={styles.forgetPassword}>ESQUECEU A SENHA?</div>
        <button type="submit">ENTRAR</button>
      </form>
    </div>
  );
};

export default Login;
