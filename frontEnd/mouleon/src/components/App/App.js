import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar.js"
import LightDarkButton from "../LightDarkButton/LightDarkButton.js";

function App() {
// states
  

  return (
    <div className="App">
      <main>
        <div>
          <LightDarkButton />
          <NavBar />
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
