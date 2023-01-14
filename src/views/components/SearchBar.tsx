import React from "react";
import { useEffect, useState } from "react";
import {Button} from 'reactstrap';
function SearchBar(props:
   {userInput:any, setUserInput:any, handleSubmit:any}
  ) {
 const userInput=props.userInput;
 const setUserInput=props.setUserInput;
const handleSubmit=props.handleSubmit;


  return (
    <div>
     
      <form onSubmit={(e) => handleSubmit(e,userInput)}>
        <label>
          Name:
          <input
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              e.preventDefault();
            }}
          />
        </label>
        <Button color="primary" type="button" value="Submit" onClick={(e) => handleSubmit(e,userInput)} >Submit</Button>
         
      </form>
    </div>
  );
}

export default SearchBar;
