import styles from "./footerInfo.module.css"

const FooterInfo = () => {
    return(
        <section className={styles.infoContainer}>
            <h2>HAR DU EN IDÉ I TANKERNE? <br />LAD OS STARTE DIT PROJEKT SAMMEN</h2>
            <div className={styles.infoItems}>
                <p>Cinestar Studio</p>
                <p>+123-456-789</p>
                <p>hello@awesomesite.com</p>
            </div>
            <div className={styles.medias}>
                <a href="https://www.facebook.com/"><h3>FACEBOOK</h3></a>
                <a href="https://x.com/home"><h3>TWITTER</h3></a>
                <a href="https://dk.linkedin.com/"><h3>LINKEDIN</h3></a>
                <a href="https://www.instagram.com/"><h3>INSTAGRAM</h3></a>
                <a href="https://www.youtube.com/"><h3>YOUTUBE</h3></a>
            </div>
        </section>
    )
}

export default FooterInfo;