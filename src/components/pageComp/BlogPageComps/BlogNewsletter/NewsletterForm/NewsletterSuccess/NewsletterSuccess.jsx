import styles from "./newsletterSuccess.module.css"


const NewsletterSuccess = ({email}) => {
    return(
        <section className={styles.successContainer}>
            <div className={styles.successMessage}>
                <h2 className={styles.thankYouEmail}>{email} <br/> er blevet tilmeldt!</h2>
            </div>
        </section>
    )
}

export default NewsletterSuccess;