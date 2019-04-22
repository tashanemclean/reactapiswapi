import React from "react";
import ReactDOM from "react-dom";
import Api from "./api";
import Swapi from "./swapi";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Swapi />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
