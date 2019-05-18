import { JOBS } from "../constants";

const jobsReducer = (state = [], action) => {
  if (action.type === JOBS.LOAD_SUCCESS) {
    action.jobsData.jobs.map(job => {
      let range =
        job.salary_range_filters[0][
          Object.keys(job.salary_range_filters[0])[0]
        ];

      // Add currency to salary
      range = range.split(" - ");

      if (range.length > 1) {
        range = range.map(item => {
          return "₱" + item;
        });
      }

      range = range.join(" - ");
      job.yolo_salary_range = range;

      return job;
    });
    return action.jobsData;
  }
  return [];
};

export default jobsReducer;
