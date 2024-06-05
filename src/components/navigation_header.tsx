import styles from './navigation_header.module.css'
import fashionRecommender from './fashionRecommender'

function Navigation_header() {

    return(
        <>
        <div className={styles.header}>
            <fashionRecommender variant='primary'/>
        </div>
        </>
    )
}

export default Navigation_header