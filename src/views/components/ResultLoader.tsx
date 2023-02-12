import React from "react";
import MusicData from "../../interfaces/MusicData";
import Results from "./Results";


// Results takes an array of songs and maps over them and displays them with SingleResult Component
// if there are no results it returns Loading...
function ResultLoader(props: { handleData: Array<MusicData>, submitPressed:boolean }) {
  const handleData = props.handleData;
  if(props.submitPressed ){
    return(<div className="noResultsText">No results found please try again.</div>)
  }
  if (!handleData) {
    
    return <div className="loadingText">Loading...pizza</div>;
  } else {
    return (
      <>
        {handleData.map((song: MusicData) => (
          <Results handleData={handleData} />
        ))}
      </>
    );
  }
}

export default ResultLoader;
