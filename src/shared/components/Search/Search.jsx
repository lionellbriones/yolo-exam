import React, { Component } from "react";
import { connect } from "react-redux";
import { loadJobs } from "../../../actions";

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
    this.props.loadJobs(this.state.jobsFilter);
  };

  render() {
    return (
      <form className="SearchContainer" onSubmit={this.handleSubmit}>
        <input
          className="SearchBox"
          placeholder="Search for job title or company name"
          value={this.state.jobsFilter}
          onChange={this.handleFilterChange}
        />
        <Button>Filter results</Button>
      </form>
    );
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  loadJobs: filter => dispatch(loadJobs(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
