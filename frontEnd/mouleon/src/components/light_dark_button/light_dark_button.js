import React from "react";
import styles from "./light_dark_button.module.css";

function LDButton() {
    return (
      <div className={styles.dark}>
        <img
            className={styles.moon}
            src={require("./kisspng-lunar-phase-moon-clip-art-crescent-5adae0d5c35a73.3103260215242938458002.png")}
            alt="crescent moon"></img>
      </div>
    );
}

export default LDButton;
