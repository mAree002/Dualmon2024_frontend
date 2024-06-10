import Button from './Button.tsx'
import styles from './ItemMatch.module.css'
import { Link } from 'react-router-dom'

function ItemMatch() {
    return (
        <div className={styles.ItemMatchDiv}>
            <h1 className={styles.title}>Item <br />match</h1> <br />
            <div className={styles.span1}>
                <span>Instant Style <br />Matches</span> <br />
            </div>
            <div className={styles.span2}>
                <span>Finding that perfect fashion item just got <br />
                    simpler with 'Item Match'. <br />
                    No more endless searching in online stores. <br />
                    This feature makes shopping easier by finding <br />
                    similar products for you without the hassle.</span> <br />
            </div>
            <div className={styles.button}>
                <Link to="/ItemMatch"><Button variant='primary'>Choose</Button></Link>
                {/* <Router>
            <nav>
                <Link to="/SecondPage"><Button variant='primary'>Choose</Button></Link>
            </nav>
            </Router> */}
            </div>
        </div>
    )

}

export default ItemMatch