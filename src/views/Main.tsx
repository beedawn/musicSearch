import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { Container, Row} from "reactstrap";
import Options from "../secrets/Options";
import "whatwg-fetch";
import '../styles/styles.css';
import ResultLoader from "./components/ResultLoader";
import MusicData from "../interfaces/MusicData";
// Main Component returns a view that renders the SearchBar component and the Results component, if there are results to show.
// this calls the API and passes the data to the Results component.
function Main() {
  const [userInput, setUserInput] = useState("");
  const [handleData, setHandleData] = useState(Array<MusicData>);
  const [submitPressed, setSubmitPressed] = useState(false);
  // callAPI makes the call to rapidapi to query the input data
  // it uses the fetch method to make this request
  function callAPI() {
    const options = Options;
    const url: string =
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + userInput;
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {setHandleData(response.data);})
      .catch((err) => console.error(err));
  }

  // handleSubmit is a function tied to the press of the input submit button
  // this function calls callAPI and prevents the default behavior of the submit button.
  function handleSubmit(event: Event) {
    setSubmitPressed(false);
    callAPI();
    event.preventDefault();
  }

  return (
    <div className="searchBar">
      <Container>
        <Row>
          <SearchBar
            userInput={userInput}
            setUserInput={setUserInput}
            handleSubmit={handleSubmit}
          />
        </Row>{" "}
        <ResultLoader handleData={handleData} submitPressed={submitPressed}/>
      </Container>
    </div>
  );
}

export default Main;
