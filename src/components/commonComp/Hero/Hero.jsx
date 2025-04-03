import styles from "./hero.module.css";

import { NavLink } from "react-router-dom";


const Hero = ({ title, bc1, bc1Link, bc2, bc2Link, bc3, bc3Link }) => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.overlay}>
        <div className={styles.overlayItems}>
          <h1 className={styles.title}>{title}</h1>
          {/* Breadcrumbs */}
          <p className={styles.breadcrumbs}>
            <NavLink to={bc1Link} className={styles.breadcrumbLink}>
              {bc1}
            </NavLink>
            {bc2 && (
              <>
                {" / "}
                <NavLink to={bc2Link} className={bc3 ? styles.breadcrumbLink : styles.activeBreadcrumb}>
                  {bc2}
                </NavLink>
              </>
            )}
            {bc3 && (
              <>
                {" / "}
                <NavLink to={bc3Link} className={styles.activeBreadcrumb}>
                  {bc3}
                </NavLink>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
