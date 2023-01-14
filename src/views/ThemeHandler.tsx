import React from "react";
import { useState, useEffect } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import Main from "./Main";
import '../styles/styles.css';
function ThemeHandler() {
  const [darkModeTheme, setDarkModeTheme]=useState(true);
console.log(!darkModeTheme? "darkModeTheme":"");
return(
  
  <div className={!darkModeTheme? "darkModeTheme":""}><MDBSwitch id='darkMode' className="switch" label='darkmode' onClick={()=>setDarkModeTheme(!darkModeTheme)}/>
  <Main /></div>
)
}

export default ThemeHandler;
