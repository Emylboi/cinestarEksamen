import styles from "./contactInfo.module.css"

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPin, IoMdMail  } from "react-icons/io";

const ContactInfo = () => {
    return(
        <section className={styles.container}>
            <div className={styles.infoContainer}>
                <FaPhoneAlt className={styles.icon}/>
                <p className={styles.info}>+45 12 34 56 78</p>
            </div>
            <div className={styles.infoContainer}>
                <IoMdPin className={styles.icon}/>
                <p className={styles.info}>Fotovej 66, 8456 Cineby</p>
            </div>
            <div className={styles.infoContainer}>
                <IoMdMail className={styles.icon}/>
                <p className={styles.info}>cinestar@production.dk</p>
            </div>
        </section>
    )
}

export default ContactInfo;