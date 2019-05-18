import React, { Component } from "react";
import moment from "moment";

import Pin from "../../../assets/images/Pin.svg";
import Briefcase from "../../../assets/images/Briefcase.svg";
import Education from "../../../assets/images/Education.svg";
import Clock from "../../../assets/images/Clock.svg";

import { connect } from "react-redux";
import { loadJobs } from "../../../actions";

import "./JobListing.css";

class JobListing extends Component {
  componentDidMount() {
    this.props.loadJobs("");
  }

  render() {
    const { jobs } = this.props;
    if (!jobs.hasOwnProperty("jobs")) {
      return true;
    }

    return (
      <div className="JobListingContainer">
        <div class="JobCount">{jobs.total_num} jobs found</div>
        <section>
          {jobs.jobs.map(job => (
            <div className="JobCard" key={job.id}>
              <div className="JobCardTitleContainer">
                <h3 className="JobCardTitle">{job.job_category}</h3>
                <span>{job.yolo_salary_range}</span>
              </div>
              <div className="JobCardDetails">
                <div className="JobCardDetailsGroup">
                  <span className="JobCardDetailsItem">
                    <img className="JobCardDetailsIcon" src={Pin} alt="Pin" />
                    {job.job_location}
                  </span>
                  <span className="JobCardDetailsItem">
                    <img
                      className="JobCardDetailsIcon"
                      src={Briefcase}
                      alt="Briefcase"
                    />
                    {job.xp_lvl}
                  </span>
                </div>
                <div className="JobCardDetailsGroup">
                  <span className="JobCardDetailsItem">
                    <img
                      className="JobCardDetailsIcon"
                      src={Education}
                      alt="Education"
                    />
                    {job.degree}
                  </span>
                  <span className="JobCardDetailsItem">
                    <img
                      className="JobCardDetailsIcon"
                      src={Clock}
                      alt="Clock"
                    />
                    {job.job_type}
                  </span>
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
