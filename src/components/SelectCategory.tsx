import { useState } from 'react'
import style from './SelectCategory.module.css'

function SelectCategory() {
    const [category,setCategory]= useState("")
    console.log(category)
    return (
        <>
        <select name="Select Category" className={style.box} onChange={(e)=>setCategory(e.target.value)}>
            <option selected hidden className={style.colored}>Select category</option>
            <option value="long-sleeve_tops">long-sleeve_tops</option>
            <option value="zip-up_tops">zip-up_tops</option>
            <option value="dresses">dresses</option>
            <option value="swimwear">swimwear</option>
            <option value="sleeveless_outwear">sleeveless_outwear</option>
            <option value="jumpsuits">jumpsuits</option>
            <option value="shorts">shorts</option>
            <option value="shoes">shoes</option>
            <option value="bottoms">bottoms</option>
            <option value="bags">bags</option>
            <option value="tops">tops</option>
            <option value="shirts">shirts</option>
            <option value="skirts">skirts</option>
            <option value="outwear">outwear</option>
            <option value="hats">hats</option>
            <option value="scarfs">scarfs</option>
            <option value="wallets">wallets</option>
            <option value="not_wanted">not_wanted</option>
            <option value="belts">belts</option>
            <option value="braces">braces</option>
            <option value="ties">ties</option>
        </select>
        </>
    )
}

export default SelectCategory

