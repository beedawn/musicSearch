import React from "react";
import MusicData from "../../interfaces/MusicData";
import Results from "./Results";


// Results takes an array of songs and maps over them and displays them with SingleResult Component
// if there are no results it returns Loading...
function ResultLoader(props: { handleData: Array<MusicData>, submitPressed:boolean, apiCalled:boolean }) {
  const handleData = props.handleData;
  const submitPressed = props.submitPressed;
  const apiCalled = props.apiCalled;
  if(!submitPressed){
    return(<></>)
  }

  if (apiCalled) {
    return <div className="loadingText">Loading...</div>;
  } 
  
  if(submitPressed && !handleData&&!apiCalled){

    return(<div className="noResultsText">No results found, please try again.</div>)
  }
  else {
    return (
      <>
       
          <Results handleData={handleData} />
       
      </>
    );
  }

  
}

export default ResultLoader;
