import { useState } from 'react'
import style from './SelectCategory.module.css'

function SelectShop()
{
    const [shop, setShop]=useState("")
    return(
    <select name="Select Shop" className={style.box} onChange={(e)=>setShop(e.target.value)}>
            <option value="" selected hidden>Select shop</option>
            <option value="Zara">Zara</option>
    </select>
    )
}
export default SelectShop