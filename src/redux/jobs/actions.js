import {
  START_FETCHING_JOBS,
  SUCCESS_FETCHING_JOBS,
  ERROR_FETCHING_JOBS,
  SET_DESCRIPTION,
  SET_LOCATION,
  SET_FULL_TIME,
  SET_PAGE,
} from './constants';

import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';

let debouncedFetchJobs = debounce(getData, 1000);

// START
export const startFetchingJobs = () => {
  return {
    type: START_FETCHING_JOBS,
  };
};

// SUCCESS
export const successFetchingJobs = ({ jobs }) => {
  return {
    type: SUCCESS_FETCHING_JOBS,
    jobs,
  };
};

export const errorFetchingJobs = () => {
  return {
    type: ERROR_FETCHING_JOBS,
  };
};

export const setLocation = (location) => {
  return {
    type: SET_LOCATION,
    location,
  };
};
export const setDescription = (description) => {
  return {
    type: SET_DESCRIPTION,
    description,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};
export const setFull_time = (full_time) => {
  return {
    type: SET_FULL_TIME,
    full_time,
  };
};

export const fetchJobs = (page) => {
  return async (dispatch, getState) => {
    dispatch(startFetchingJobs());

    try {
      let params = {
        page: page || 1,
        location: getState().jobs.location,
        description: getState().jobs.description,
        full_time: getState().jobs.full_time,
      };
      let res = await debouncedFetchJobs(params);

      const filtered = res.data.filter((item) => item !== null);

      dispatch(
        successFetchingJobs({
          jobs: filtered,
        })
      );
    } catch (error) {
      dispatch(errorFetchingJobs());
    }
  };
};
