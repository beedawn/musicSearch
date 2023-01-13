import React from 'react';
import {useState} from 'react';
import Results from './components/Results';
import SearchBar from './components/SearchBar';

function Main() {

    const[userInput,setUserInput]=useState<
    string | number | readonly string[] | undefined
  >("");

    
  return (
    <div className="App">
        <SearchBar userInput={userInput}/>
        yolo
     <Results />
     </div>
  );
}

export default Main;
