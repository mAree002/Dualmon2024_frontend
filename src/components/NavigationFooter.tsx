import styles from './NavigationFooter.module.css'
import Logo from './Logo.tsx'
import CDate from './CurrentYear.tsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'

function NavigationFooter() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer1}>
                    <div>
                        <Logo size='size2' /> <br />
                    </div>
                    <div className={styles.footer12}>
                        <span>All rights reserved. @ Copyright <CDate /></span>
                    </div>
                </div>
                <div className={styles.footer2}>
                    <div className={styles.footer21}>Social Media</div>
                        <div className={styles.footer22}>
                            <Link to={'https://www.facebook.com/VegaITSourcing/?locale=sr_RS'}> <FontAwesomeIcon icon={faFacebook} /> <span>Facebook</span></Link> <br />
                        </div>
                        <div className={styles.footer23}>
                            <Link to={'https://www.instagram.com/vega_it/'}> <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span></Link>
                        </div>
                </div>
            </div>
        </>
    )
}

export default NavigationFooter