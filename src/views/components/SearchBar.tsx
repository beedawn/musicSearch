import React from 'react';
import {useEffect, useState} from 'react';


function SearchBar(){
const [userInput, setUserInput]= useState<React.ChangeEvent<HTMLInputElement>>();

function handleSubmit(){};

function handleChange(){

}
    return(<div>Search Bar :)


<form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={userInput} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserInput(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>



    </div>)
};

export default SearchBar;