import Instructions from '../components/Instructions.tsx'
import styles from './ItemMatchPage.module.css'
import GenderOpt from '../components/GenderOpt.tsx'
import SelectCategory from '../components/SelectCategory.tsx'
import SelectShop from '../components/SelectShop.tsx'
import PriceRange from '../components/PriceRange.tsx'
import { useState } from 'react'

function ItemMatchPage() {
    const [category,setCategory]=useState()
    return (
        <>
            <div className={styles.box}>
                <div className={styles.boxinstr}>
                    <Instructions />
                </div>
                <div className={styles.box2}>
                    <div className={styles.row1}>
                        <div className={styles.row11}>
                            <GenderOpt/>
                        </div>
                        <div className={styles.row12}>
                            <SelectCategory/>
                        </div>
                        <div className={styles.row13}>
                            <SelectShop/>
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.row21}>
                            <PriceRange/>
                        </div>
                    </div>
                    <div className={styles.row3}>

                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemMatchPage
