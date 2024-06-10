import Instructions from './Instructions'
import styles from './seclay.module.css'

function InstructionsBox() {
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

export default InstructionsBox
