import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profiles from "./components/Profiles";
import Skills from "./components/Skills";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings:[],
    }
  }
  componentDidMount() {
    fetch("./dinosaurs.json")
      .then(response => response.json())
      .then(listings => {
        return this.setState({
          listings: listings
      })
    })
  }
  render() {
    return (
      <div className="App">

        <Header />
        <Profiles listings={this.state.listings} />
        <Footer />
      </div>
    );
  }
}

export default App;
