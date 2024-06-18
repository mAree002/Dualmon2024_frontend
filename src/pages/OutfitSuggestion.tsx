import styles from './OutfitSuggestion.module.css'
import image from '../components/image.png'
import Product from '../components/Product'
import { useLocation } from 'react-router-dom'

function OutfitSuggestion()
{
    const {state} = useLocation()
    if (!state || !state.productData) {
        return <div>Podaci nisu dostupni.</div>;
    }
    const { elem } = state.productData;
    return(
        <>
    <div className={styles.span0}>
        Suggested products based on <span className={styles.span1}>your</span> <span className={styles.span2}>preferences</span>
    </div>
    <div className={styles.box}>
       {elem.map((product: { store: string | undefined; similarity: number; price: number; product_store_url: string; image_url: string })=>(
        <Product 
            store={product.store}
            compLevel={product.similarity}
            price={product.price}
            productStoreUrl={product.product_store_url}
            imageUrl={product.image_url}
        />
       ))}
    </div>
    </>
)
}
export default OutfitSuggestion