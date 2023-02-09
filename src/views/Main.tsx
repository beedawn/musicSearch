import React from "react";
import { useState } from "react";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import { Container, Row} from "reactstrap";
import Options from "../secrets/Options";
import "whatwg-fetch";
import '../styles/styles.css';
// Main Component returns a view that renders the SearchBar component and the Results component, if there are results to show.
// this calls the API and passes the data to the Results component.
function Main() {
  const [userInput, setUserInput] = useState("");
  const [handleData, setHandleData] = useState();
  const [submitPressed, setSubmitPressed] = useState(false);
  const [apiCalled,setApiCalled] = useState(false);
  const [dataTotal,setDataTotal] =useState(0);
  // callAPI makes the call to rapidapi to query the input data
  // it uses the fetch method to make this request
  function callAPI() {
    const options = Options;
 
    const url: string =
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + userInput;
    // const url2: string = "https://shazam.p.rapidapi.com/search?term=" + userInput;
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {setHandleData(response.data);setDataTotal(response.total)})
      .catch((err) => console.error(err));



      // const options2 = {
      //   method: 'GET',
      //   headers: {
      //     'X-RapidAPI-Key': '7103bc01ffmsh0015f63447d9ee6p1fd9c8jsn9269fe6a285c',
      //     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      //   }
      // };
      
      // fetch(url2, options2)
      //   .then(response => response.json())
      //   .then(response => console.log(response))
      //   .catch(err => console.error(err));
  }

  // handleSubmit is a function tied to the press of the input submit button
  // this function calls callAPI and prevents the default behavior of the submit button.
  function handleSubmit(event: Event) {
    setSubmitPressed(false);
    setApiCalled(true);
    callAPI();
    setSubmitPressed(true); 
    setApiCalled(false); 
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
        
          {submitPressed ? (handleData !== undefined && dataTotal>0 ? (
            <Row xs={1} sm={1} md={2} lg={3} xl={4}>
            <Results
              handleData={handleData}
            /></Row>
          ) : (<div className="noResultsText">No Results Found, please try again.</div>)): (apiCalled ? (<div className="loadingText">Loading...</div>):(<></>))}
       
      </Container>
    </div>
  );
}

export default Main;
