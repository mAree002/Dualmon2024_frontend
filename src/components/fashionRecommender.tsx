import styles from './fashionRecommender.module.css'

type fashionReccomenderProps = {
    variant: 'primary' | 'secondary'
}

function fashionRecommender({ variant }: fashionReccomenderProps) {

    const calculateFinalClassName = () => {
        if (variant === 'primary') return styles['fashionRecommender--primary']
        else return styles['fashionRecommender--Secondary']
    }
    return (
        <span className={calculateFinalClassName()}>
            fashionRecommender
        </span>
    )
}

export default fashionRecommender