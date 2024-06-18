import styles from './OutfitSuggestion.module.css'
import Product from '../components/Product'
import { useLocation } from 'react-router-dom'
import smile1 from "../images/smile1.png"
import smile2 from "../images/smile2.png"
import smile3 from "../images/smile3.png"

function OutfitSuggestion()
{
    const {state} = useLocation()
    if (!state || !state.productData) {
        return <div>Podaci nisu dostupni.</div>;
    }
    const { productData } = state;
    const smile=(productSimilarity:number)=>{
        if(productSimilarity<=10){return (smile3)}
        else if(productSimilarity>10 && productSimilarity<=40){return (smile2)}
        else return (smile1)
    }
    return(
        <>
    <div className={styles.span0}>
        Suggested products based on <span className={styles.span1}>your</span> <span className={styles.span2}>preferences</span>
    </div>
    <div className={styles.box}>
       {productData.map((product: { store: string | undefined; similarity: number; price: number; product_store_url: string; image_url: string },index: number)=>(
        <Product 
            key={index}
            store={product.store}
            compLevel={smile(product.similarity)}
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