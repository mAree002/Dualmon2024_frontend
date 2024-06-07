import { Link } from 'react-router-dom';
import styles from './navigation.module.css'
import logo from './logo.png';

function Navigation(){
  return (
    <div>
    <nav className={styles.nav}>
      <Link to="/"> Home </Link> 
      <Link to="/about"> About </Link>
      <Link to="/contacts"> Contacts </Link>
      
    </nav>
    {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
    {/* <button>
    <Link to="/other-page">Go to Other Page</Link>
    </button> */}
    </div>
  );
};

export default Navigation;