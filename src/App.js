import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import "./App.css";

import Header from "./shared/components/Header";
import Search from "./shared/components/Search";
import JobListing from "./shared/components/JobListing";
import Pagination from "./shared/components/Pagination";

import configureStore from "./store";
const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Provider store={store}>
            <Fragment>
              <Header />
              <Search />
              <hr className="Divider" />
              <JobListing />
              <Pagination />
            </Fragment>
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
