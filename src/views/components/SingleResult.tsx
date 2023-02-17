import React from "react";
import MusicData from "../../interfaces/MusicData";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
} from "reactstrap";
import ReactAudioPlayer from "react-audio-player";

//SingleResult accepts a song object as a parameter and displays its information within a Card
function SingleResult(props: { song: MusicData }) {
  const song = props.song;
  return (
    <Col>
      <Card key={song.id}
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
        <CardLink href={song.link}>
          <img alt="Card cap" src={song.album.cover_xl} width="100%" />
        </CardLink>
        <CardBody>
          <ReactAudioPlayer
            src={song.preview}
            controls
            style={{ width: "100%" }}
          />
          <CardLink href={song.artist.link}>Link to Artist</CardLink>
          <CardLink href={song.link}>Song Info</CardLink>
        </CardBody>
      </Card>
    </Col>
  );
}

export default SingleResult;
