import React from 'react';
import {useState} from 'react';
import { MDBSwitch } from 'mdb-react-ui-kit';
import Main from './Main';
import '../styles/styles.css';
function ThemeHandler() {
  return (
    <div className="App">
      {/* <MDBSwitch id='darkMode' className="switch" label='darkmode'/> */}
     <Main />
     </div>
  );
}

export default ThemeHandler;
