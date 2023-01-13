import React from "react";
import { useEffect, useState } from "react";

function SearchBar(props:
   {userInput:any, setUserInput:any, handleSubmit:any}
  ) {
 const userInput=props.userInput;
 const setUserInput=props.setUserInput;
const handleSubmit=props.handleSubmit;


  return (
    <div>
      Search Bar :)
      <form >
        <label>
          Name:
          <input
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
        </label>
        <button type="button" value="Submit" onClick={(e) => handleSubmit(e,userInput)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
