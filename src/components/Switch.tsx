import styles from './Switch.module.css'

type Toogled = {
    isToggled: boolean,
    onToggled: (isMan:boolean) => void
}
const Switch = ({ isToggled, onToggled }: Toogled) => {
    console.log(isToggled)
    return (
        <>
            <label className={styles.switch}>
                <input type='checkbox' checked={isToggled} onChange={onToggled(isToggled)} />
                <span className={styles.slider} />
            </label>
        </>
    )
}
export default Switch