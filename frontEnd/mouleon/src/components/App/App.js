import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TopBar from "../bar/bar.js"
import LDButton from "../light_dark_button/light_dark_button.js";

function App() {
// states
  

  return (
    <div className="App">
      <main>
        <div>
          <LDButton />
          <TopBar />
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
