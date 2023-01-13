import React from "react";
import { useEffect, useState } from "react";
import Options from "../../secrets/Options";
import MusicData from "../../interfaces/MusicData";

function Results(props:{
  query:string

}) {
  const [handleData, setHandleData] = useState<MusicData | undefined>(
    undefined
  );
const query=props.query;
  useEffect(() => {
    const options = Options;
    const url:string="https://deezerdevs-deezer.p.rapidapi.com/search?q="+query;
console.log(query);
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setHandleData(response.data))
      .catch((err) => console.error(err));
  }, [query]);
  console.log("uyoloy");
  console.log(handleData);
  while (!handleData) {
    return <div>Loading</div>;
  }
  return <div>Search Land</div>;
}

export default Results;
