import React from "react";
import { useEffect, useState } from "react";
import MusicData from "../../interfaces/MusicData";
import SingleResult from "./SingleResult";
function Results(props:{
  query:string,
  handleData:Array<MusicData>

}) {

 
 const handleData=props.handleData;
  if (!handleData) {
    return <div>Loading</div>;
  
  }else
  {
  return <>

{handleData.map((song:MusicData)=><SingleResult key={song.id} song={song} />)}
  </>;
  }
}

export default Results;
