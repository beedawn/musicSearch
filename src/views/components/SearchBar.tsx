import React from "react";
import { Button } from "reactstrap";

// SearchBar component renders a search bar
// it takes the userInput and setUserInput variables as parameters from the Main component through props
// it also takes the handleSubmit function as a parameter from the Main component
// userInput and setUserInput should be defined with useState
// ex: [ userInput, setUserInput ] = useState("");
// it uses userInput for the value of the searchbar, and setUserInput for the onChange handler of input
// handleSubmit is used to handle the press of the submit button
function SearchBar(props: {
  userInput: string;
  setUserInput: Function;
  handleSubmit: Function;
}) {
  const { userInput, setUserInput, handleSubmit } = props;

  return (
    <div className="searchBar">
      <form onSubmit={(e) => handleSubmit(e, userInput)}>
        <div>
          <label>
            <input 
              alt="userInputTextBox"
              className="inputOne"
              type="text"
              placeholder="Search value..."
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
                e.preventDefault();
              }}
            />
          </label>
        </div>
        <div className="submitBtnContainer">
          <Button
            className="submitBtn"
            color="primary"
            type="button"
            value="Submit" 
            name="submitButton"
            onClick={(e) => handleSubmit(e, userInput)}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
