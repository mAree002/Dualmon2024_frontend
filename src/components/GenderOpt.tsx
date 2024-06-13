import Switch from './Switch.tsx'
import { useState } from 'react'
import styles from './GenderOpt.module.css'

const GenderOpt = () => {
    const [isToggled, setIsToggled] = useState(false)
    return (
        <>
            <div className={styles.gender}>
                <div className={styles.gender1}>
                    <span className={styles.span1}>Gender <span className={styles.req}>*</span></span>
                </div>
                <div className={styles.gender2}>
                    <div className={styles.span2}>
                        <span>M</span>
                    </div>
                    <div className={styles.switch}>
                        <Switch isToggled={isToggled} onToggled={() => setIsToggled(!isToggled)} />
                    </div>
                    <div className={styles.span3}>
                        <span >F</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenderOpt