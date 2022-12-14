import {
  START_FETCHING_JOBS,
  SUCCESS_FETCHING_JOBS,
  ERROR_FETCHING_JOBS,
  SET_SEARCH,
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
export const successFetchingJobs = ({ jobs, pages }) => {
  return {
    type: SUCCESS_FETCHING_JOBS,
    jobs,
    pages,
  };
};

export const errorFetchingJobs = () => {
  return {
    type: ERROR_FETCHING_JOBS,
  };
};

export const fetchJobs = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingJobs());

    try {
      let params = {
        description: getState().jobs.description,
        // page: getState().jobs.page,
      };

      let res = await debouncedFetchJobs(params);

      dispatch(
        successFetchingJobs({
          jobs: res.data,
          page: res.data.page,
        })
      );
    } catch (error) {
      dispatch(errorFetchingJobs());
    }
  };
};

export const setSearch = (description) => {
  return {
    type: SET_SEARCH,
    description,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};
