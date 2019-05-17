import React, { Component } from "react";
import { connect } from "react-redux";
import { loadJobs } from "../../../actions";

import Button from "../Button";
import "./Search.css";

class Search extends Component {
  state = {
    jobsFilter: ""
  };

  handleFilterChange = e => {
    this.setState({
      jobsFilter: e.target.value
    });
  };

  render() {
    const { loadJobs } = this.props;
    return (
      <div className="SearchContainer">
        <input
          className="SearchBox"
          placeholder="Search for job title or company name"
          value={this.state.jobsFilter}
          onChange={this.handleFilterChange}
        />
        <Button onClick={() => loadJobs(this.state.jobsFilter)}>
          Filter results
        </Button>
      </div>
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
