import React from "react";
import { useEffect, useState } from "react";
import MusicData from "../../interfaces/MusicData";

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
  return <div>

{handleData.map((song:any)=><div><p>song title: {song.title}</p><p>artist name: {song.artist.name}</p></div>)}
  </div>;
  }
}

export default Results;
