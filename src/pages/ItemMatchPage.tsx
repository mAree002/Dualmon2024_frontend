import { useState, useEffect, FormEvent } from 'react';
import Instructions from '../components/Instructions';
import styles from './ItemMatchPage.module.css';
import GenderOpt from '../components/GenderOpt';
import SelectCategory from '../components/SelectCategory';
import SelectShop from '../components/SelectShop';
import PriceRange from '../components/PriceRange';
import SingleFileUpload from '../components/SingleFileUpload';
import Button from '../components/Button';
import { MAX, MIN } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

interface Price {
    min: number;
    max: number;
}

function ItemMatchPage() {
    const [loading, setLoading] = useState(false);
    const [formState, setFormState] = useState({
        gender: 'man',
        category: 'Select Category',
        store: 'Select Shop',
        price: { min: MIN, max: MAX },
        pictures: [] as File[]
    });
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onSelectCategory = (newSelectedValue: string) => {
        setFormState((prevState) => ({
            ...prevState,
            category: newSelectedValue
        }));
    };

    const onSelectShop = (newSelectedShop: string) => {
        setFormState((prevState) => ({
            ...prevState,
            store: newSelectedShop
        }));
    };

    const onPriceRangeChange = (newPriceRange: Price) => {
        setFormState((prevState) => ({
            ...prevState,
            price: newPriceRange
        }));
    };

    const isMan = formState.gender === 'man';

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
    };

    const navigate = useNavigate();

    const submitForm = () => {
        setLoading(true);
        const formData = new FormData();
        console.log({ data: formState });
        formData.append('image', formState.pictures[0]);
        const payload = {
            gender: formState.gender,
            item_wanted: formState.category,
            min_price: formState.price.min,
            max_price: formState.price.max,
            fashion_store: formState.store
        };
        formData.append('body', JSON.stringify(payload));
        console.log(formData);

        axios
            .post('http://192.168.65.44:5556/item_match', formData, {
                params: {
                    gender: formState.gender,
                    item_wanted: formState.category,
                    min_price: formState.price.min,
                    max_price: formState.price.max,
                    fashion_store: formState.store
                },
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: '/',
                },
            })
            .then((res) => {
                navigate('/Suggestion', { state: { productData: res.data } });
                setLoading(false);
            })
            .catch((err) => {
                console.log({ err });
                setLoading(false);
            });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formState.category === 'Select Category' && formState.store === 'Select Shop') {
            alert('Please select shop and category');
            return;
        } else if (formState.category === 'Select Category') {
            alert('Please select category');
            return;
        } else if (formState.store === 'Select Shop') {
            alert('Please select shop');
            return;
        } else if (formState.pictures.length === 0) {
            alert('Please select image');
            return;
        }
        submitForm();
    };

    const getPreviewImg = () => {
        if (formState.pictures.length > 0) return URL.createObjectURL(formState.pictures[formState.pictures.length - 1]);
        return '';
    };

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
                                <SelectShop value={formState.store} onChange={onSelectShop} />
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
                            {loading ? <Loader /> : (
                                <Button
                                    variant={isMobile ? 'front' : 'primary'}
                                    onClick={() => console.log(formState)}
                                    type="submit"
                                    disabled={loading}
                                >
                                    Submit
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ItemMatchPage;
