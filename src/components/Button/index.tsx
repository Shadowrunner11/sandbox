import { ButtonHTMLAttributes } from "react";

import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<unknown> {
  variant: 'primary' | 'secondary';
}

const variants = {
  primary: styles.button_primary,
  secondary: styles.button_secondary
}

export const Button = ({ children, variant, ...rest }: ButtonProps)=>{
  return (<button 
      className={variants[variant]} 
      {...rest}
    >
      {children}
    </button>
  )
}
