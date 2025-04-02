import { Link } from "react-router-dom";
import styles from "./footerCopyRight.module.css"

const FooterCopyRight = () => {
    return(
        <section className={styles.copyRightContainer}>
            <div className={styles.overlay}>
                <Link className={styles.linkIcon} to="/">
                    <img src="/logo.png" alt="Logo" className={styles.logo} />
                </Link>
                <h3 className={styles.copyRight}>COPYRIGHT 2025 &copy; CINESTAR | POWERED BY ROMETHEM E STUDIO </h3>
            </div>
        </section>
    )
}

export default FooterCopyRight;