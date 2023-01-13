import React from 'react';
import {useState} from 'react';
import Results from './components/Results';
import SearchBar from './components/SearchBar';

function Main() {

    const[userInput,setUserInput]=useState("");
let query:string="";
    function handleSubmit(event: any, userInput:any) {
        query=userInput;
        console.log("pizza");
        console.log(userInput);
        event.preventDefault();
        console.log(event);
      }
    
  return (
    <div className="App">
        <SearchBar userInput={userInput} setUserInput={setUserInput} handleSubmit={handleSubmit}/>
        yolo
     <Results query={query}/>
     </div>
  );
}

export default Main;
