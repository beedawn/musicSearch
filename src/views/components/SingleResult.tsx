import React from "react";
import { useEffect, useState } from "react";
import MusicData from "../../interfaces/MusicData";
import { Row, Card,CardBody,CardTitle,CardSubtitle,CardText,CardLink } from "reactstrap"; 
function SingleResult(props:{
song:any

}) {
const song = props.song;
 return(



    <div>
        
        
        <Card
  style={{
    width:"25%"
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
    src={song.album.cover_xl}
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
        
        
        </div>
  )}


export default SingleResult;
