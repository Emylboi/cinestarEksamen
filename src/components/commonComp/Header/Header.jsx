import styles from "./header.module.css"

import { Link } from "react-router-dom";

import Navigation from "./Navigation/Navigation";


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
