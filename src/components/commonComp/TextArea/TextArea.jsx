import styles from "./textArea.module.css"

const TextArea = ({ subTitle, title, text, imgSrc, backgroundColor}) => {
    return(
        <section className={styles.container} style={{backgroundColor: backgroundColor || "transparent"}}>
            <div className={styles.content}>
                {subTitle && <h4 className={styles.subTitle}>{subTitle}</h4>}
                {title && <h3 className={styles.title}>{title}</h3>}
                {text && <p className={styles.text}>{text || ""}</p>}
                {imgSrc && <img className={styles.image} src={imgSrc} alt="Cinestar" />}
            </div>
        </section>
    )
}

export default TextArea;