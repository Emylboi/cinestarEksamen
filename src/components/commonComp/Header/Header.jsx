import { Link } from "react-router-dom";
import styles from "./header.module.css"
import Navigation from "./Navigation/Navigation";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
