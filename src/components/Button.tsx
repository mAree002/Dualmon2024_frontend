import { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
    variant?: 'primary' | 'secondary',
    children?: ReactNode
}

function Button({ children, variant = 'primary' }: ButtonProps) {
    const calculateFinalClassName = () => {
        if (variant === 'primary') return `${styles.button} ${styles['button--primary']}`
        // if (variant === 'primary') return styles.button + " " + styles["button--primary"]
        else return `${styles.button} ${styles['button--secondary']}`

    }
    return (
        <button className={calculateFinalClassName()}>{children}</button>
    );
}

export default Button
