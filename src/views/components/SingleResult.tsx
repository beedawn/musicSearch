import React from "react";
import { useEffect, useState } from "react";
import MusicData from "../../interfaces/MusicData";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,CardLink } from "reactstrap"; 
function SingleResult(props:{
song:any

}) {
const song = props.song;
 return(



    <div>
        
        
        
        <Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
    {song.title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     {song.artist.name}
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src={song.album.cover}
    width="100%"
  />
  <CardBody>
    <CardText>
        
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Link
    </CardLink>
  </CardBody>
</Card>
        
        
        
        <div>song title: </div><div>artist name: {song.artist.name}</div><img src={song.album.cover}/></div>
  )}


export default SingleResult;
