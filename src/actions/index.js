import { JOBS } from "../constants";

const loadJobs = (filter, page) => ({
  type: JOBS.LOAD,
  filter,
  page
});

const setJobs = jobsData => ({
  type: JOBS.LOAD_SUCCESS,
  jobsData
});

const setError = error => ({
  type: JOBS.LOAD_FAIL,
  error
});

export { loadJobs, setJobs, setError };
