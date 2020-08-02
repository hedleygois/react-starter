import React, { Component, useState } from "react";
import "./App.css";
import { FilterInput } from "./components/FilterInput";
import { Options } from "./components/Options";
import { MoreInfo } from "./components/MoreInfo";

const App = () => {
  const [search, setSearch] = useState(undefined);
  const [selectedOption, setSelectionOption] = useState(undefined);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <label>Type the character name:</label>
            <FilterInput onChange={setSearch} onFocus={() => setSelectionOption(undefined)}/>
          </div>
        </div>
        <div className="App-header">
          <Options search={search} onSelect={selected => {
            setSelectionOption(selected);
            setSearch(undefined);
          }}/>
          <MoreInfo info={selectedOption}/>
          <p>Factris Technical Assignment</p>
        </div>
      </div>
    </div>
  );
};

export default App;
