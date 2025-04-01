import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";

import styles from "./contact.module.css";

const Contact = ({background}) => {
    /* Checks for type of background*/
    const containerStyle = {
        background: background.includes("url") ? background : background || "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return(
        <section className={styles.container} style={containerStyle}>
            <div className={styles.content}>
                <ContactInfo/>
                <ContactForm/>
            </div>
        </section>
    )
}

export default Contact;