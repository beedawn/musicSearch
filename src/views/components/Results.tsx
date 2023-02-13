import React from "react";
import MusicData from "../../interfaces/MusicData";
import SingleResult from "./SingleResult";

// Results takes an array of songs and maps over them and displays them with SingleResult Component
// if there are no results it returns Loading...
function Results(props: { handleData: Array<MusicData> }) {
  const handleData = props.handleData;
    return (
      <>
        {handleData.map((song: MusicData) => (
          <SingleResult key={song.id} song={song} />
        ))}
      </>
    );
  }

export default Results;
