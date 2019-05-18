import React, { Component } from "react";
import moment from "moment";

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
        <section>
          {jobs.map(job => (
            <div className="JobCard" key={job.id}>
              <div className="JobCardTitleContainer">
                <h3 className="JobCardTitle">{job.job_category}</h3>
              </div>
              <div className="JobCardDetails">
                <div className="JobCardDetailsGroup">
                  <span className="JobCardDetailsItem">{job.job_location}</span>
                  <span className="JobCardDetailsItem">{job.xp_lvl}</span>
                </div>
                <div className="JobCardDetailsGroup">
                  <span className="JobCardDetailsItem">{job.degree}</span>
                  <span className="JobCardDetailsItem">{job.job_type}</span>
                </div>
              </div>
              <div className="JobCardCompany">
                <div className="JobCardCompanyDetails">
                  <img
                    className="JobCardCompanyLogo"
                    src={job.company_logo}
                    alt={job.company_name}
                  />
                  <span>{job.company_name}</span>
                </div>
                <div className="JobCardCompanyMoment">
                  <span>{moment(job.created_at).fromNow()}</span>
                </div>
              </div>
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
