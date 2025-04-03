import styles from "./homeReviews.module.css"

import TextArea from "../../../commonComp/TextArea/TextArea";
import ReviewSwiper from "./ReviewSwiper/ReviewSwiper";


const HomeReviews = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <TextArea backgroundColor="black" subTitle="UDTALELSER" title="HVAD SIGER VORES SAMARBEJDSPARTNERER OM OS?" text="''Cinestar er en fantastisk samarbejdspartner, der formår at kombinere kreativitet med professionalisme. Deres evne til at skabe unikke og engagerende produktioner er imponerende, og resultatet taler altid for sig selv.''"/>
                <ReviewSwiper/>
            </div>
        </section>
    )
}

export default HomeReviews;