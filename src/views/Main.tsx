import React from 'react';
import {useState, useEffect} from 'react';
import Results from './components/Results';
import SearchBar from './components/SearchBar';

import Options from "../secrets/Options";

function Main() {

  
    const[userInput,setUserInput]=useState("");
    function setHandleData(data:any){
console.log(data);
console.log("hello");
    }
    function callAPI(){
        const options = Options;
        const url:string="https://deezerdevs-deezer.p.rapidapi.com/search?q="+userInput;
  
        fetch(url, options)
        .then((response) => response.json())
        .then((response) => setHandleData(response.data))
        .catch((err) => console.error(err));
    }



    function handleSubmit(event: any, userInput:any) {
      callAPI();
        console.log("pizza");
        console.log(userInput);
        event.preventDefault();
        console.log(event);
      }
    
  return (
    <div className="App">
        <SearchBar userInput={userInput} setUserInput={setUserInput} handleSubmit={handleSubmit}/>
        yolo
     <Results query={userInput}/>
     </div>
  );
}

export default Main;
