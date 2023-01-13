import React from "react";
import { useEffect, useState } from "react";
import MusicData from "../../interfaces/MusicData";

function Results(props:{
  query:string

}) {
  const [handleData, setHandleData] = useState<MusicData | undefined>(
    undefined
  );

  console.log("uyoloy");
  console.log(handleData);
  while (!handleData) {
    return <div>Loading</div>;
  }
  return <div>Search Land</div>;
}

export default Results;
