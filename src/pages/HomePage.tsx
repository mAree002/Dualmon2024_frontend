import ItemMatch from '../components/ItemMatch';
import Styles from './HomePage.module.css'
function HomePage() {
  return (
    <>
      <div className={Styles.home}>
        <div className={Styles.ItemMatch}>
          <ItemMatch />
        </div>
      </div>
    </>
  );
};

export default HomePage;