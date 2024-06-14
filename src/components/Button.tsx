import { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'front',
    children?: ReactNode
}

function Button({ children, variant = 'primary' }: ButtonProps) {
    const calculateFinalClassName = () => {
        if (variant === 'primary') return `${styles.button} ${styles['button--primary']}`
        // if (variant === 'primary') return styles.button + " " + styles["button--primary"]
        else if (variant === 'secondary') return `${styles.button} ${styles['button--secondary']}`
        else return `${styles.button} ${styles['button--front']}`

    }
    return (
        <button className={calculateFinalClassName()}>{children}</button>
    );
}

export default Button
