import Instructions from './Instructions'
import styles from './Item-match.module.css'

function Item_match() {
    return (
        <>
        <div className={styles.box}>
        <div className={styles.boxinstr}>
    <Instructions/>
        </div>
        <div className={styles.boxcomp}></div>
        </div>
        </>
    )

}

export default Item_match
