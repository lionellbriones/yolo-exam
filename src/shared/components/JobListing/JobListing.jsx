import React, { Component } from "react";

import "./JobListing.css";

class JobListing extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    fetch(
      `https://search.bossjob.com/api/v1/search/job_filter?size=10&query=system`
    )
      .then(res => res.json())
      .then(jobList => {
        this.setState({
          jobs: jobList.data.jobs
        });
      });
  }

  render() {
    const { jobs } = this.state;
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

export default JobListing;
