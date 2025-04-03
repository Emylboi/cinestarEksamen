import styles from "./blogNewsletter.module.css";

import TextArea from "../../../commonComp/TextArea/TextArea";
import NewsletterForm from "./NewsletterForm/NewsletterForm";


const BlogNewsletter = () => {
    return(
        <section className={styles.container}>
            <div className={styles.overlay}>
                <TextArea subTitle="EN BLOG, DER KAN INSPIRERE OG HJÆLPE DIG" text="Få de nyeste opdateringer, tips og indsigter direkte i din indbakke. Vores blog deler viden, inspiration og historier, der kan hjælpe dig med at tage dine projekter til det næste niveau."/>
                <NewsletterForm/>
            </div>
        </section>
    )
}

export default BlogNewsletter;