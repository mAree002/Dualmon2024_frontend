import { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'front',
    children?: ReactNode,
    onClick?: () => void
    type?: "submit" | "button" | "reset" | undefined
}

function Button({ children, variant = 'primary', onClick, type }: ButtonProps) {
    const calculateFinalClassName = () => {
        if (variant === 'primary') return `${styles.button} ${styles['button--primary']}`
        // if (variant === 'primary') return styles.button + " " + styles["button--primary"]
        else if (variant === 'secondary') return `${styles.button} ${styles['button--secondary']}`
        else return `${styles.button} ${styles['button--front']}`

    }
    return (
        <button className={calculateFinalClassName()} onClick={onClick} type={type}>{children}</button>
    );
}

export default Button
