import { useState } from 'react';
import Slider from 'react-slider';
import styles from './PriceRange.module.css'; 

function PriceRange() {
    const MIN = 10;
    const MAX = 12000;
    const [values, setValues] = useState([MIN, MAX]);
    console.log('values:', values);
    return (
        <div className={styles.box}> 
          <div className={styles.span1}> 
           <span className={styles.span2}>Price<br/></span>
           <hr></hr>
           <div className={styles.span2}>
           <span >Min </span><span className={styles['values-container']}>{values[0]}</span> - <span className={styles.span1}>Max</span> <span className={styles['values-container']}>{values[1]}</span>
          </div>
          </div>
          <Slider
            className={styles.slider} 
            thumbClassName={styles.thumb} 
            trackClassName='track'
            onChange={setValues} 
            value={values}
            min={MIN}
            max={MAX}
          />
        </div>
    );
}
  
export default PriceRange;