import React from "react";
import { useState, useEffect } from "react";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import { Container, Row, Col } from "reactstrap";
import Options from "../secrets/Options";

function Main() {
  const [userInput, setUserInput] = useState("");
  const [handleData, setHandleData] = useState();
  function callAPI() {
    const options = Options;
    const url: string =
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + userInput;

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setHandleData(response.data))
      .catch((err) => console.error(err));
  }

  function handleSubmit(event: any, userInput: any) {
    callAPI();
    event.preventDefault();
  }

  return (
    <div>
      <SearchBar
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
      />
      <Container>
        {" "}
        <Row xs={1} md={3} xl={5} xxl={6}>
          {handleData != undefined ? (
            <Results
              key={userInput}
              query={userInput}
              handleData={handleData}
            />
          ) : (
            <div></div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Main;
