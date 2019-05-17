import React, { Component } from "react";
import "./App.css";

import Header from "./shared/components/Header";
import Search from "./shared/components/Search";
import JobListing from "./shared/components/JobListing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <div style={{ padding: "10px 20px" }}>
            <Search />
            <JobListing />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
