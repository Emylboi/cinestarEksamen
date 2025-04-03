import styles from "./footer.module.css";

import FooterCopyRight from "./FooterCopyRight/FooterCopyRight";


const Footer = () => {
    return(
        <footer className={styles.footer}>
            <FooterCopyRight/>
        </footer>
    )
}

export default Footer;