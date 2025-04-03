import styles from "./homeAwards.module.css";


const HomeAwards = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <img src="/award1.png" className={styles.awardLogo} alt="" />
                <img src="/award2.png" className={styles.awardLogo} alt="" />
                <img src="/award3.png" className={styles.awardLogo} alt="" />
            </div>

        </section>
        
    )
}

export default HomeAwards;