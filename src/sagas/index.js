import { takeEvery, call, put } from "redux-saga/effects";

import { fetchJobs } from "../api";
import { setJobs } from "../actions";
import { JOBS } from "../constants";

function* handleJobsLoad(action) {
  const jobsData = yield call(fetchJobs, action.filter);
  yield put(setJobs(jobsData));
}

function* rootSaga() {
  yield takeEvery(JOBS.LOAD, handleJobsLoad);
}

export default rootSaga;
