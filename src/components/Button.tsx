import { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'front',
    children?: ReactNode,
    onClick?: () => void
    type?: "submit" | "button" | "reset" | undefined
    disabled?: boolean
}

function Button({ children, variant = 'primary', onClick, type ,disabled}: ButtonProps) {
    const calculateFinalClassName = () => {
        if (variant === 'primary') return `${styles.button} ${styles['button--primary']}`
        else if (variant === 'secondary') return `${styles.button} ${styles['button--secondary']}`
        else return `${styles.button} ${styles['button--front']}`

    }
    return (
        <button className={calculateFinalClassName()} onClick={onClick} type={type} disabled={disabled}>{children}</button>
    );
}

export default Button
