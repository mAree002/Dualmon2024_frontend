import Button from './Button'
import style from './SingleFileUpload.module.css'
import image from './image.png'
import {ChangeEvent, useState} from 'react'

function SingleFile()
{
    const[file,setFile]=useState<File>()
    
    function handleFile(event:ChangeEvent<HTMLInputElement>) {
        if (!event.target.files || event.target.files.length===0)
        {
            return;
        }
        else
        {
            setFile(event.target.files[0])
            console.log(file)
        } 
    }
    return(
    <>
    <div className={style.comp}>
    <div className={style.box}>
       <div className={style.box1}><img src={image} className={style.image}></img></div>
       <div className={style.box2}>
        <span className={style.span1}>Please upload image, size less than 500KB<br/></span>
        
        <div className={style.button}>
        <form>
            <Button variant='secondary'><label htmlFor="file" className={style.button1}>Choose file</label></Button>
            <input type="file" className={style.file} id='file' onChange={handleFile}/>
        </form>
        </div>
        
       </div>

    </div>
    <div className={style.button2}><Button variant="primary">Submit</Button></div>
    </div>
    </>
    )
}
export default SingleFile


