import styles from './Product.module.css'


type productProps={
    store?: string,
    compLevel: string,
    price: number,
    productStoreUrl: string,
    imageUrl: string
}
const Product=({store,compLevel,price,productStoreUrl,imageUrl}:productProps)=>{
    return(
        <>
        <div className={styles.box1}>
            <div>
              <a href={productStoreUrl}><img src={imageUrl} className={styles.image}></img></a>
            </div>
            <div className={styles.textPrice}>
                <div className={styles.text}>
                <div className={styles.shop}>
                    <span>{store}</span>
                </div>
                <div className={styles.compLevel}><div className={styles.compDiv}><span>compatibility level:</span></div> <div className={styles.smileDiv}><img className={styles.smile} src={compLevel} alt="img" /></div> </div>
                </div>
                <div className={styles.price}>
                    <span>{price} RSD</span>
                </div>
            </div>
        </div>
        </>

    )
}

export default Product