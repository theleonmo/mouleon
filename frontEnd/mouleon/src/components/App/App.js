import React from "react";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar.js"
import LightDarkButton from "../LightDarkButton/LightDarkButton.js";

function App() {
// states
  

  return (
    <div className={styles.App}>
      <main>
        <div>
          <NavBar />
        </div>
      </main>
    </div>
  );
}

export default App;
