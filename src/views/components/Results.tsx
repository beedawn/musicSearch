import React from "react";
import MusicData from "../../interfaces/MusicData";
import SingleResult from "./SingleResult";

// Results takes 
function Results(props: { handleData: Array<MusicData> }) {
  const handleData = props.handleData;
  if (!handleData) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {handleData.map((song: MusicData) => (
          <SingleResult key={song.id} song={song} />
        ))}
      </>
    );
  }
}

export default Results;
