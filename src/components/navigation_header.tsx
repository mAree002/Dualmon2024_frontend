import styles from './navigation_header.module.css'
import Logo from "./Logo.tsx"

function Navigation_header() {

    return (
        <>
            <div className={styles.header}>
                <Logo size='size1' />
            </div>
        </>
    )
}

export default Navigation_header
