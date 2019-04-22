import React from "react";
import axios from "axios";

export default class Swapi extends React.Component {
  constructor() {
    super();

    this.state = {
      luke: {},
      home: {},
      show: false
    };
  }

  componentDidMount() {
    axios("https://swapi.co/api/people/1/")
      .then(response => this.setState({ luke: response.data }))
      .catch(error => console.log(error));
    this.getHomePlanetInfo();
  }

  getHomePlanetInfo() {
    axios("https://swapi.co/api/planets/1/")
      .then(response => this.setState({ home: response.data }))
      .catch(error => console.log(error));
  }

  showPlanet() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const luke = this.state.luke;
    console.log(this.state.home);
    return (
      <div>
        <h1>SWAPI</h1>
        <h3>{luke.name}</h3>
        <p>{luke.height}</p>
        <button onClick={() => this.showPlanet()}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        <p style={{ display: this.state.show ? "block" : "none" }}>
          {this.state.home.name}
        </p>
      </div>
    );
  }
}
