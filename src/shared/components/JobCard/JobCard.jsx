import React, { Component } from "react";
import moment from "moment";

import Pin from "../../../assets/images/Pin.svg";
import Briefcase from "../../../assets/images/Briefcase.svg";
import Education from "../../../assets/images/Education.svg";
import Clock from "../../../assets/images/Clock.svg";

import "./JobCard.css";

class JobCard extends Component {
  render() {
    const { jobs } = this.props;
    return (
      <div>
        {jobs.map(job => (
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
                  <img className="JobCardDetailsIcon" src={Clock} alt="Clock" />
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
      </div>
    );
  }
}

export default JobCard;
