import style from './SelectCategory.module.css'


type SelectShopProps={
    value:string;
    onChange:(newCategory:string)=>void
} 

function SelectShop({value,onChange}:SelectShopProps)
{
    return(
    <select name="Select Shop" className={style.box} value={value}  onChange={(e) => onChange(e.target.value)}>
            <option value="" selected hidden>Select shop</option>
            <option value="Zara">Zara</option>
        </select>
    )
}
export default SelectShop