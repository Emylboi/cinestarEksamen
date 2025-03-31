import styles from "./textArea.module.css"

const TextArea = ({ subTitle, title, text}) => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h4 className={styles.subTitle}>{subTitle}</h4>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </section>
    )
}

export default TextArea;