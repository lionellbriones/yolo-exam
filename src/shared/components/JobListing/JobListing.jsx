import React, { Component } from "react";

import { connect } from "react-redux";
import { loadJobs } from "../../../actions";
import JobCard from "../JobCard";

import "./JobListing.css";

class JobListing extends Component {
  componentDidMount() {
    this.props.loadJobs("");
  }

  render() {
    const { jobs } = this.props;
    return (
      <div className="JobListingContainer">
        <div class="JobCount">{jobs.total_num} jobs found</div>
        <JobCard jobs={jobs.hasOwnProperty("jobs") ? jobs.jobs : []} />
      </div>
    );
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });

const mapDispatchToProps = dispatch => ({
  loadJobs: filter => dispatch(loadJobs(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobListing);
