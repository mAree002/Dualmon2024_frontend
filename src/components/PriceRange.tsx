import Slider from 'react-slider';
import styles from './PriceRange.module.css'; 
import { MIN, MAX } from '../utils/constants';

type PriceRangeProps = {
  value: { min: number; max: number };
  onChange: (newRange: { min: number; max: number }) => void;
}

function PriceRange({ value, onChange }: PriceRangeProps) {
    const values = [value.min, value.max];

    return (
        <div className={styles.box}> 
          <div className={styles.span1}> 
           <span className={styles.span2}>Price<br/></span>
           <hr />
           <div className={styles.span2}>
             <span>Min </span>
             <span className={styles['values-container']}>{values[0]}</span> - 
             <span className={styles.span1}>Max</span> 
             <span className={styles['values-container']}>{values[1]}</span>
           </div>
          </div>
          <Slider
            className={styles.slider} 
            thumbClassName={styles.thumb} 
            trackClassName='track'
            value={values}
            onChange={(newValues) => onChange({ min: newValues[0], max: newValues[1] })}
            min={MIN}
            max={MAX}
          />
        </div>
    );
}
  
export default PriceRange;
