const URL = `https://search.bossjob.com/api/v1/search/job_filter?size=12`;

const fetchJobs = async (filter, page) => {
  const response = await fetch(`${URL}&query=${filter}&page=${page}`);
  const data = await response.json();
  if (response.status >= 400 || data.status_code >= 400) {
    throw new Error(data.errors);
  }
  return data.data;
};

export { fetchJobs };
