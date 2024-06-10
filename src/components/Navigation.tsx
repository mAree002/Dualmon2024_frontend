import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

function Navigation(){
  return (
    <div className={styles.nav}>
      <div className={styles.a}>
      <Link to="/">Home</Link> 
      </div>
      <div className={styles.b}>
       <Link to="/ItemMatch"> Choose </Link>
      </div>
    </div>
  )
}

export default Navigation