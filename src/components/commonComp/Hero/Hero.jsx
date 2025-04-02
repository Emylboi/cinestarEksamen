import styles from "./hero.module.css"

const Hero = ({title}) => {
    return(
        <section className={styles.heroContainer}>
            <div className={styles.overlay}>
                <div className={styles.overlayItems}>
                    <h1 className={styles.title}>{title}</h1>
                    {/* Breadcrumbs */}
                    <p className={styles.breadcrumbs}>Forside / </p>
                </div>
                
            </div>
        </section>
    )
}

export default Hero;