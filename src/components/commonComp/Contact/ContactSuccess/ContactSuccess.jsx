import styles from "./contactSuccess.module.css"

const ContactSuccess = ({name, onClose}) => {
    return(
        <section className={styles.successContainer}>
            <div className={styles.successMessage}>
                <h2 className={styles.thankYouName}>Tak for din besked {name}!</h2>
                <p className={styles.responseTime}>Vi bestræber os på at kontakte dig via din email indenfor 24 timer</p>
                <button className={styles.closeButton} onClick={onClose}>Luk</button>
            </div>
        </section>
    )
}

export default ContactSuccess;