import style from './SelectCategory.module.css'

function SelectShop()
{
    return(
    <select name="Select Shop" className={style.box}>
            <option value="" selected hidden>Select shop</option>
            <option value="Zara">Zara</option>
    </select>
    )
}
export default SelectShop