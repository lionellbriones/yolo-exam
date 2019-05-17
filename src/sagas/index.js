import { takeEvery } from "redux-saga/effects";

import { JOBS } from "../constants";

function* handleJobsLoad(action) {
  console.log("handleJobsLoad", action.filter);
}

function* rootSaga() {
  yield takeEvery(JOBS.LOAD, handleJobsLoad);
}

export default rootSaga;
