import styles from './logo.module.css'

type LogoSizes = {
    size?: 'size1' | 'size2'
}

function Logo({ size = 'size1' }: LogoSizes) {
    const calculateFinalClassName = () => {
        if (size === 'size1') return styles.size1
        else return styles.size2
    }

    return <span className={calculateFinalClassName()}>
        <span className={styles.color}>f</span>
        <span>ashion</span>
        <span className={styles.color}>R</span>
        <span>ecommender</span>
    </span>
}

export default Logo