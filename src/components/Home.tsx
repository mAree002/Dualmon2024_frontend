import ItemMatch from './ItemMatch';
import Styles from './home.module.css'
function Home (){
  return(
    <>
    <div className={Styles.home}>
      <div className={Styles.ItemMatch}>
       <ItemMatch />
       </div>
  </div>
  </>
  );
};

export default Home;