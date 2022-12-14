import {
  START_FETCHING_JOBS,
  SUCCESS_FETCHING_JOBS,
  ERROR_FETCHING_JOBS,
  SET_SEARCH,
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
  pages: 2,
  description: '',
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
        pages: action.pages,
      };

    case SET_SEARCH:
      return {
        ...state,
        description: action.description,
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
