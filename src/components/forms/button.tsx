import React from "react";
import styles from "./button.module.css";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonType) => {
  return (
    <div>
      <button {...props} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default Button;
