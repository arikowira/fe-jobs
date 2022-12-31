import {
  START_FETCHING_JOBS,
  SUCCESS_FETCHING_JOBS,
  ERROR_FETCHING_JOBS,
  SET_DESCRIPTION,
  SET_LOCATION,
  SET_FULL_TIME,
  SET_PAGE,
} from './constants';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

const initialState = {
  data: [],
  page: 1,
  location: '',
  description: '',
  full_time: false,
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_JOBS:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_JOBS:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_JOBS:
      return {
        ...state,
        status: statuslist.success,
        data: action.jobs,
      };

    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.description,
      };

    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    case SET_FULL_TIME:
      return {
        ...state,
        full_time: action.full_time,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
}
