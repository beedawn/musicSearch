import React from "react";
import MusicData from "../../interfaces/MusicData";
import SingleResult from "./SingleResult";

// Results takes an array of songs and maps over them and displays them with SingleResult Component
// if there are no results it returns a message stating to pass data to this component
function Results(props: { handleData: Array<MusicData> }) {
  const handleData = props.handleData;
  if (!handleData) {
    return (<div>Please pass handleData to this component.</div>)
  }
  else
    return (
      <>
        {handleData.map((song: MusicData) => (
          <SingleResult key={song.id} song={song} />
        ))}
      </>
    );
}

export default Results;
