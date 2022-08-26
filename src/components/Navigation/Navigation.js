import React from "react";
import styles from "./Navigation.module.scss";

import logo from "../../assets/logo.svg"
import Button from "../Button/Button";

function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.maxWidthContainer}>
        <div className={styles.navContainer}>

          <img src={logo} className={styles.logo} alt="" />
          <nav className={styles.nav}> 
            <ul className={styles.navList}>
              <li><a>Places to Stay</a></li>
              <li><a>Experiences</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <Button leadingIcon="globe" variant="icon" className={styles.languagesButton} />
          <Button leadingIcon="user" variant="primary">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
