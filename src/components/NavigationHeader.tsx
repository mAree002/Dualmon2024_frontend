import styles from './NavigationHeader.module.css'
import Logo from "./Logo.tsx"
import Navigation from './Navigation.tsx'
import { Link } from 'react-router-dom'




function NavigationHeader() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to={'/'}><Logo size='size1' /></Link>
                </div>
                <div className={styles.nav}>
                    <Navigation />
                </div>
            </div>
        </>
    )
}

export default NavigationHeader
