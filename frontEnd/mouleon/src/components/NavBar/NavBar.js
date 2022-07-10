import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
      <nav className={styles.NavBar}>
        <ul className={styles.NavList}>
          <li className={styles.NavListItem}>About</li>
          <li className={styles.NavListItem}>Work</li>
          <li className={styles.NavListItem}>Articles</li>
          <li className={styles.NavListItem}>Contact</li>
        </ul>
      </nav>
    );
}

export default NavBar;