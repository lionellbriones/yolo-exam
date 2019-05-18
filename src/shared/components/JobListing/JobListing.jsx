import React, { Component } from "react";

import { connect } from "react-redux";
import { loadJobs } from "../../../actions";
import JobCard from "../JobCard";

import "./JobListing.css";

class JobListing extends Component {
  componentDidMount() {
    this.props.loadJobs("", 1);
  }

  render() {
    const { jobs } = this.props;
    return (
      <div className="JobListingContainer">
        <div className="JobCount">{jobs.total_num} jobs found</div>
        <JobCard jobs={jobs.hasOwnProperty("jobs") ? jobs.jobs : []} />
      </div>
    );
  }
}

const mapStateToProps = ({ jobs }) => ({ jobs });

const mapDispatchToProps = dispatch => ({
  loadJobs: (filter, page) => dispatch(loadJobs(filter, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobListing);
