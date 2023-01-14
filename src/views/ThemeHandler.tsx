import React from "react";
import { useState, useEffect } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import Main from "./Main";
import '../styles/styles.css';
function ThemeHandler() {
  const [darkModeTheme, setDarkModeTheme]=useState(false);

  if(darkModeTheme){
return(
  
  <div><MDBSwitch id='darkMode' className="switch" label='darkmode' onClick={()=>setDarkModeTheme(!darkModeTheme)}/>
  <Main /></div>
)
  }else{
  return (
    <div className="darkTheme">
     
     <MDBSwitch id='darkMode' className="switch" label='darkmode' onClick={()=>setDarkModeTheme(!darkModeTheme)}/>  <div className="darkTheme"><Main/>pizza</div>
    </div>
  );}
}

export default ThemeHandler;
