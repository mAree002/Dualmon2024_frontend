import styles from './OutfitSuggestion.module.css'
import image from '../components/image.png'
function OutfitSuggestion()
{
    return(
        <>
    <div className={styles.span0}>
        Suggested products based on <span className={styles.span1}>your</span> <span className={styles.span2}>preferences</span>
    </div>
    <div>
    <div className={styles.box}>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
    </div>
    <div className={styles.box}>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
        <div className={styles.box1}>
        <img src={image} className={styles.image}></img>
        <div className={styles.text}>compability level</div>
        </div>
    </div>
    </div>
    </>
)
}
export default OutfitSuggestion