import styles from "./navigation.module.css";

import { useState } from "react";

import useAuth from "../../../../hooks/useAuth";

import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const Navigation = () => {
  const [activeBM, setActiveBM] = useState(false);
  const { signOut, user } = useAuth();

  function navMenu() {
    setActiveBM((prev) => !prev);
  }

  return (
    <div className={styles.navigation}>
      <div className={`${styles.burgerMenu} ${activeBM ? styles.active : ""}`}>
        {!activeBM ? (
          <FaBarsStaggered
            onClick={navMenu}
            className={styles.burgerMenuIcon}
          />
        ) : (
          <FaXmark onClick={navMenu} className={styles.burgerMenuIcon} />
        )}
      </div>
      <div className={`${styles.nav} ${activeBM ? styles.show : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : null)}
          onClick={() => setActiveBM(false)}
        >
          FORSIDE
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? styles.active : null)}
          onClick={() => setActiveBM(false)}
        >
          BLOG
        </NavLink>

        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? styles.active : null)}
          onClick={() => setActiveBM(false)}
        >
          FAQ
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : null)}
          onClick={() => setActiveBM(false)}
        >
          KONTAKT
        </NavLink>

        {/* Shows Login if user is not logged in, and logout if user is logged in */}
        {!user || Object.keys(user).length === 0 ? (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : null)}
            onClick={() => setActiveBM(false)}
          >
            LOGIN
          </NavLink>
        ) : (
          <>
            <button
              className={styles.logout}
              onClick={() => {
                signOut();
                setActiveBM(false);
              }}
            >
              LOG UD
            </button>

            {/* If the user's role is admin, backoffice is visible on navigation. */}
            {user.role === "admin" && (
              <NavLink
                to="/backoffice"
                className={({ isActive }) => (isActive ? styles.active : null)}
                onClick={() => setActiveBM(false)}
              >
                BACKOFFICE
              </NavLink>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
