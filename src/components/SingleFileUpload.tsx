import Button from './Button'
import style from './SingleFileUpload.module.css'
import image from '../images/image.png'

type FileUploadProps = {
    onChange: (newFile: File[]) => void
    previewImg?: string
}
function SingleFile({ previewImg, onChange }: FileUploadProps) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileList = Array.from(files)
            onChange(fileList);
        }
    };
    return (
        <>
            <div className={style.comp}>
                <div className={style.box}>
                    <div className={style.box1}><img src={previewImg || image} className={style.image}></img></div>
                    <div className={style.box2}>
                        <span className={style.span1}>Please upload image, size less than 500KB<br /></span>

                        <div className={style.button}>
                            <Button variant='secondary' type='button'><label htmlFor="file" className={style.button1} >Choose file</label></Button>
                            <input type="file" className={style.file} id='file' onChange={handleFileChange} multiple />
                        </div>

                    </div>

                </div>
                {/* <div className={style.button2}><Button variant="primary">Submit</Button></div> */}
            </div>
        </>
    )
}
export default SingleFile


