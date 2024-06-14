import Instructions from '../components/Instructions.tsx'
import styles from './ItemMatchPage.module.css'
import GenderOpt from '../components/GenderOpt.tsx'
import SelectCategory from '../components/SelectCategory.tsx'
import SelectShop from '../components/SelectShop.tsx'
import PriceRange from '../components/PriceRange.tsx'
import { SetStateAction, useState } from 'react'
import SingleFileUpload from '../components/SingleFileUpload.tsx'
import Button from '../components/Button.tsx'

// const [gender,setGender]=useState<"male" | "female"> ("male")
    // const isMan = gender === 'male'
    // const onSelect = (newSelectedValue: string) => {
    //     setSelected(newSelectedValue);
    // }
    interface Price {
        min: number;
        max: number;
    }
    
    const MIN=10
    const MAX=100000

function ItemMatchPage() {
    

    const [formState, setFormState] = useState({
        gender: 'man',
        category: 'Select Category',
        shop: 'Select Shop',
        price: { min: MIN, max: MAX }
    });


    const onSelectCategory = (newSelectedValue: string) => {
        setFormState((prevState) => ({
                ...prevState,
                category: newSelectedValue
        }));
    };
    const onSelectShop = (newSelectedShop:string) => {
        setFormState((prevState) => ({
            ...prevState,
            shop: newSelectedShop
        }));
    };

    const onPriceRangeChange = (newPriceRange:Price) => {
        setFormState((prevState) => ({
            ...prevState,
            price: newPriceRange
        }));
    };
    const isMan = formState.gender === 'man'
    const onToggleGender = (newValue:boolean) => {
        setFormState((prevState) => ({
            ...prevState,
            gender: newValue ? 'woman' : 'man'
        }));
    };
    const handleButtonClick = () => {
        console.log('Current form state:', formState);
    };

    return (
        <>
            <div className={styles.box}>
                <div className={styles.boxinstr}>
                    <Instructions />
                </div>
                
                <div className={styles.box2}>
                    <div className={styles.row1}>
                        <div className={styles.row11}>
                            <GenderOpt value={!isMan} onToggle={onToggleGender}/>
                        </div>
                        <div className={styles.row12}>
                            <SelectCategory value={formState.category} onChange={onSelectCategory}/>
                        </div>
                        <div className={styles.row13}>
                            <SelectShop value={formState.shop} onChange={onSelectShop}/>
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.row21}>
                            <PriceRange  value={formState.price} onChange={onPriceRangeChange}/>
                        </div>
                    </div>
                    <div className={styles.row3}>
                        <SingleFileUpload/>
                    </div>
                </div>
                <Button onClick={handleButtonClick}>Print Form State</Button>
                
            </div>
        </>
    )

}

export default ItemMatchPage
