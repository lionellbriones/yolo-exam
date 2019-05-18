import React, { Component } from "react";
import { connect } from "react-redux";
import { loadJobs } from "../../../actions";

import Lens from "../../../assets/images/Lens.svg";
import Button from "../Button";
import "./Search.css";

class Search extends Component {
  state = {
    jobsFilter: ""
  };

  handleFilterChange = event => {
    this.setState({
      jobsFilter: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loadJobs(this.state.jobsFilter, 1);
  };

  render() {
    return (
      <form className="SearchContainer" onSubmit={this.handleSubmit}>
        <div className="SearchBoxContainer">
          <div>
            <img src={Lens} width="18px" alt="Search" />
          </div>
          <input
            className="SearchBox"
            placeholder="Search for job title or company name"
            value={this.state.jobsFilter}
            onChange={this.handleFilterChange}
          />
        </div>
        <Button>Filter results</Button>
      </form>
    );
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  loadJobs: (filter, page) => dispatch(loadJobs(filter, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
