import React from "react";
import styles from "./LightDarkButton.module.css";

function LightDarkButton() {
    return (
      <div>
        <div className={styles.dark}></div>
        <img className={styles.moon} alt="moon"></img>
      </div>
    );
}

export default LightDarkButton;
