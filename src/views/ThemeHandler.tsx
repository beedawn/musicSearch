import React from "react";
import { useState } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import Main from "./Main";
import "../styles/styles.css";
import { FaMoon } from "react-icons/fa";

// ThemeHandler Compoenent. This component allows the view to switch to and from dark mode
// if the darkModeTheme variable is true, the view will change to darkmode
// this returns the toggle for the darkmode, and the Main Component.
function ThemeHandler() {
  const [darkModeTheme, setDarkModeTheme] = useState(true);
  return (
    <div className={!darkModeTheme ? "darkModeTheme" : ""}>
      <div style={{ display: "flex", padding: "10px" }}>
        <div className="togglePadding">
          <FaMoon />
        </div>{" "}
        <div className="togglePadding">
          <MDBSwitch
            id="darkMode"
            className="switch"
            label="darkModeSwitch"
            onClick={() => setDarkModeTheme(!darkModeTheme)}
          />{" "}
        </div>
      </div>
      <Main />
    </div>
  );
}

export default ThemeHandler;
