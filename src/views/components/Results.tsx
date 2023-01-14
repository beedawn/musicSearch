import React from "react";
import { useEffect, useState } from "react";
import MusicData from "../../interfaces/MusicData";
import SingleResult from "./SingleResult";
function Results(props:{
  query:string,
  handleData:any

}) {

 
 const handleData=props.handleData;
  if (!handleData) {
    console.log(handleData);
    return <div>Loading</div>;
  
  }else
  { console.log(handleData);
  return <>

{handleData.map((song:any)=><SingleResult key={song.id} song={song} />)}
  </>;
  }
}

export default Results;
