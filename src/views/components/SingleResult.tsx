import React from "react";
import { useEffect, useState } from "react";
import MusicData from "../../interfaces/MusicData";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";
import ReactAudioPlayer from "react-audio-player";
function SingleResult(props: { song: any }) {
  const song = props.song;
  return (
    <Col>
      <Card
        style={{
          width: "100%",
          marginTop: "5%",
          alignItems: "center",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">{song.title}</CardTitle>
          <CardSubtitle className="artistName mb-2" tag="h6">
            {song.artist.name}
          </CardSubtitle>
        </CardBody>
        <img alt="Card cap" src={song.album.cover_xl} width="100%" />
        <CardBody>
          <CardText>
            <ReactAudioPlayer
              src={song.preview}
              controls
              style={{ width: "100%" }}
            />
          </CardText>
          <CardLink href={song.artist.link}>Link to Artist</CardLink>
          <CardLink href={song.link}>Song Info</CardLink>
        </CardBody>
      </Card>
    </Col>
  );
}

export default SingleResult;
