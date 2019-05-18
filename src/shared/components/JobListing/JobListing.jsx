import React, { Component } from "react";
import { connect } from "react-redux";
import { loadJobs } from "../../../actions";

import "./JobListing.css";

class JobListing extends Component {
  componentDidMount() {
    this.props.loadJobs("");
  }

  render() {
    const { jobs } = this.props;
    return (
      <div className="JobListingContainer">
        <section className="JobCardContainer">
          {jobs.map(job => (
            <div className="JobCard" key={job.id}>
              <h3>{job.job_category}</h3>
              <p>{job.job_location}</p>
              <p>{job.xp_lvl}</p>
              <p>{job.degree}</p>
              <p>{job.job_type}</p>
              <img
                src={job.company_logo}
                alt={job.company_name}
                style={{ width: "100px" }}
              />
              <p>{job.updated_at}</p>
            </div>
          ))}
        </section>
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
