import { JOBS } from "../constants";

const loadJobs = filter => ({
  type: JOBS.LOAD,
  filter
});

const setJobs = jobs => ({
  type: JOBS.LOAD_SUCCESS,
  jobs
});

const setError = error => ({
  type: JOBS.LOAD_FAIL,
  error
});

export { loadJobs, setJobs, setError };
