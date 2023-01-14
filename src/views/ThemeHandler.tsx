import React from "react";
import { useState, useEffect } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import Main from "./Main";
import '../styles/styles.css';
import {FaMoon} from 'react-icons/fa';

function ThemeHandler() {
  const [darkModeTheme, setDarkModeTheme]=useState(true);
console.log(!darkModeTheme? "darkModeTheme":"");
return(
  
  <div className={!darkModeTheme? "darkModeTheme":""}>
    

    
   <div style={{display:"flex", padding:"10px"}}><div className="togglePadding"><FaMoon /></div> <div className="togglePadding"><MDBSwitch id='darkMode' className="switch" label='' onClick={()=>setDarkModeTheme(!darkModeTheme)}/>  </div>
   </div><Main /></div>
)
}

export default ThemeHandler;
