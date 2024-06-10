import Instructions from '../components/Instructions.tsx'
import styles from './ItemMatchPage.module.css'

function ItemMatchPage() {
    return (
        <>
            <div className={styles.box}>
                <div className={styles.boxinstr}>
                    <Instructions />
                </div>
                <div className={styles.boxcomp}></div>
            </div>
        </>
    )

}

export default ItemMatchPage
