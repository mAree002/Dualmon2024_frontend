 import styles from './Switch.module.css'

 type Toogled={
    isToggled: boolean,
    onToggled: ()=>void
 }
 const Switch= ({isToggled, onToggled}:Toogled) =>{

    return (
        <>
        <label className={styles.switch}>
            <input type='checkbox' checked={isToggled} onChange={onToggled}/>
            <span className={styles.slider}/>
        </label>
        </>
    )
 }
 export default Switch