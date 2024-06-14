import style from './SelectCategory.module.css'
import categoriesData from '../../categories.json'

type SelectCategoryProps={
    value:string;
    onChange:(newCategory:string)=>void
}  


function SelectCategory({value,onChange}:SelectCategoryProps) {
    const { categories } = categoriesData;
    return (
        <>
                <select className={style.box} value={value} onChange={(e) => onChange(e.target.value)}>
                    <option selected hidden className={style.colored}>Select category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}

                </select>
        </>
    )
}

export default SelectCategory

