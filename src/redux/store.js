import {
    combineReducers,
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
  } from 'redux';

  import thunk from 'redux-thunk';
  import jobsReducer from './jobs/reducer';

  const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const rootReducers = combineReducers({
    jobs: jobsReducer,
  });
  const store = createStore(
    rootReducers,
    composerEnhancer(applyMiddleware(thunk))
  );

  export default store;
