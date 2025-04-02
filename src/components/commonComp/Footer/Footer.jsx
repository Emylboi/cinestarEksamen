import styles from "./footer.module.css";
import FooterCopyRight from "./FooterCopyRight/FooterCopyRight";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <FooterCopyRight/>
        </footer>
    )
}

export default Footer;