import React from "react";
import { useEffect, useState } from "react";

function SearchBar(props:
    string | number | readonly string[] | undefined
  ) {
  const [userInput, setUserInput] = useState<
    string | number | readonly string[] | undefined
  >("");

  function handleSubmit(event: any) {
    console.log("pizza");
    event.preventDefault();
    console.log(event);
  }

  function handleChange() {}
  return (
    <div>
      Search Bar :)
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
        </label>
        <button type="button" value="Submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
