import Instructions from '../components/Instructions.tsx'
import styles from './ItemMatchPage.module.css'
import GenderOpt from '../components/GenderOpt.tsx'
import SelectCategory from '../components/SelectCategory.tsx'
import SelectShop from '../components/SelectShop.tsx'
import PriceRange from '../components/PriceRange.tsx'
import { useState, FormEvent } from 'react'
import SingleFileUpload from '../components/SingleFileUpload.tsx'
import Button from '../components/Button.tsx'
import { MAX, MIN } from '../utils/constants.ts'
interface Price {
    min: number;
    max: number;
}
function ItemMatchPage() {


    const [formState, setFormState] = useState({
        gender: 'man',
        category: 'Select Category',
        shop: 'Select Shop',
        price: { min: MIN, max: MAX },
        pictures: [] as File[]
    });


    const onSelectCategory = (newSelectedValue: string) => {
        setFormState((prevState) => ({
            ...prevState,
            category: newSelectedValue
        }));
    };
    const onSelectShop = (newSelectedShop: string) => {
        setFormState((prevState) => ({
            ...prevState,
            shop: newSelectedShop
        }));
    };

    const onPriceRangeChange = (newPriceRange: Price) => {
        setFormState((prevState) => ({
            ...prevState,
            price: newPriceRange
        }));
    };
    const isMan = formState.gender === 'man'
    const onToggleGender = (newValue: boolean) => {
        setFormState((prevState) => ({
            ...prevState,
            gender: newValue ? 'woman' : 'man'
        }));
    };
    const onPictureUpload = (newFiles: File[]) => {
        setFormState((prevState) => ({
            ...prevState,
            pictures: [...prevState.pictures, ...newFiles]
        }));
    }
    const submitForm = () => {
        const formData = new FormData();
        console.log({ data: formState })
        if (formState.pictures) {
            formState.pictures.forEach((file: File) => formData.append("files", file))
            // data = { ...data, pictures: data.pictures.name };
        } else {
            // data = { ...data, pictures: null }; 
        }

        formData.append("recipe", JSON.stringify(formState));
        console.log(formData)
        return fetch("http://192.168.65.44:5556/item_match", {
            method: "POST",
            body: formData,
        }).then((response) => {
            if (response.ok) {
                console.log("Upload successful");
            } else {
                console.error("Upload failed");
            }
        });
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (formState.category === 'Select Category' && formState.shop === 'Select Shop') {
            alert('Please select shop and category')
            return;
        }
        else if (formState.category === 'Select Category') {
            alert('Please select category')
            return;
        }
        else if (formState.shop === 'Select Shop') {
            alert('Please select shop')
            return;
        }
        submitForm()
    }

    const getPreviewImg = () => {
        if (formState.pictures.length > 0) return URL.createObjectURL(formState.pictures[formState.pictures.length - 1])
        return ""
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.box}>
                    <div className={styles.boxinstr}>
                        <Instructions />
                    </div>

                    <div className={styles.box2}>
                        <div className={styles.row1}>
                            <div className={styles.row11}>
                                <GenderOpt value={!isMan} onToggle={onToggleGender} />
                            </div>
                            <div className={styles.row12}>
                                <SelectCategory value={formState.category} onChange={onSelectCategory} />
                            </div>
                            <div className={styles.row13}>
                                <SelectShop value={formState.shop} onChange={onSelectShop} />
                            </div>
                        </div>
                        <div className={styles.row2}>
                            <div className={styles.row21}>
                                <PriceRange value={formState.price} onChange={onPriceRangeChange} />
                            </div>
                        </div>
                        <div className={styles.row3}>
                            <SingleFileUpload previewImg={getPreviewImg()} onChange={onPictureUpload} />
                        </div>
                        <div className={styles.submit}>
                            <Button variant='primary' onClick={() => console.log(formState)} type='submit'>Submit</Button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )

}

export default ItemMatchPage
