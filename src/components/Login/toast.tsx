import React from "react";

import styles from "./styles.module.scss";

type toastType ={
    message: string
}

const Toast: React.FC<toastType> = props => {
    return <div className={styles.toastError}>
        {props.message}
    </div>
}

export default Toast;