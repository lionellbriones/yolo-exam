import { JOBS } from "../constants";

const jobsReducer = (state = [], action) => {
  if (action.type === JOBS.LOAD_SUCCESS) {
    return [...action.jobsData.jobs];
  }
  return [];
};

export default jobsReducer;
