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
  return <div>

{handleData.map((song:any)=><SingleResult song={song} />)}
  </div>;
  }
}

export default Results;
