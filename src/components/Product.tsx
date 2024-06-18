import styles from './Product.module.css'


type productProps={
    store?: string,
    compLevel: number,
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
                <div className={styles.compLevel}><span>compatibility level:{compLevel} </span></div>
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