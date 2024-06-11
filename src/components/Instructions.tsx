import styles from  './Instruction.module.css'

function Instructions() {
    return (
        
            <div className={styles.boxin}>
            <h1 className={styles.title}>Instructions</h1>
            <div className={styles.span1}>
            <span>Please make sure to follow all <br />
            instructions down bellow <br /></span>
            </div>
            <div className={styles.span2}>
            <span>1.  Upload Your Desired Product Image<br/>
            Begin by uploading an image or screenshot of the product<br/>
            you want to buy. Whether it's a stunning dress, a trendy pair<br/>
            of sneakers, or a must-have accessory, we've got you<br/>
            covered<br/>
            2.Specify the Product Category<br/>
            Let us know the category of the item you're seeking.<br/>
            3.Get a List of the Most Similar Products:<br/>
            Sit back and relax as our advanced algorithms scour the web<br/>
            to present you with a list of the most similar products<br/>
            available.
            </span>
            </div>
            </div>
            

        

     
    )

}
export default Instructions