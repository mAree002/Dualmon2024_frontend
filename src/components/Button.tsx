import styles from './button.module.css'

type ButtonProps = {
    title: string,
    variant: 'primary' | 'secondary',
}

function Button({ title, variant }: ButtonProps) {
    const calculateFinalClassName = () => {
        if (variant === 'secondary') return `${styles.button} ${styles['button__primary']}`
        else return `${styles.button} ${styles['button__secondary']}`
    }
    return (
        <button className={calculateFinalClassName()}>{title}</button>
    );
}

export default Button