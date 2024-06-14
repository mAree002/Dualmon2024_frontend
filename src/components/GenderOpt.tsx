import Switch from './Switch.tsx'
import styles from './GenderOpt.module.css'

type GenderOptProps = {
    value: boolean;
    onToggle: (selectedValue: boolean) => void
}

const GenderOpt = ({ value, onToggle }: GenderOptProps) => {
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
                        <Switch isToggled={value} onToggled={() => onToggle(!value)} />
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