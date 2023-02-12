import React from "react";
import { useState } from "react";
import Main from "./Main";
import "../styles/styles.css";
import { Button } from "reactstrap";
// ThemeHandler Compoenent. This component allows the view to switch to and from dark mode
// if the darkModeTheme variable is true, the view will change to darkmode
// this returns the toggle for the darkmode, and the Main Component.
function ThemeHandler() {
  const [darkModeTheme, setDarkModeTheme] = useState(true);
  return (
    <div className={!darkModeTheme ? "darkModeTheme" : ""}>
      <div style={{ display: "flex", padding: "10px" }}>
        <div className="togglePadding">
          <Button 
          alt="darkModeButton"
            id="darkMode"
            className="switch"
            onClick={() => setDarkModeTheme(!darkModeTheme)}
          >
            Lights</Button>{" "}
        </div>
      </div>
      <Main />
    </div>
  );
}

export default ThemeHandler;
