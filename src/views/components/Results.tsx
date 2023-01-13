import React from "react";
import { useEffect, useState } from "react";
import Options from "../../secrets/Options";
import MusicData from "../../interfaces/MusicData";

function Results() {
  const [handleData, setHandleData] = useState<MusicData | undefined>(
    undefined
  );

  useEffect(() => {
    const options = Options;

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", options)
      .then((response) => response.json())
      .then((response) => setHandleData(response.data))
      .catch((err) => console.error(err));
  }, []);
  console.log("uyoloy");
  console.log(handleData);
  while (!handleData) {
    return <div>Loading</div>;
  }
  return <div>Search Land</div>;
}

export default Results;
