import React from "react";
import styles from "./LightDarkButton.module.css";
import moon from "../Images/moon.png"

function LightDarkButton() {
    return (
      <div>
        <div className={styles.dark}></div>
        <img className={styles.moon} src={moon} alt="moon"></img>
      </div>
    );
}

export default LightDarkButton;
