import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { createGifAPIReducer } from '../gifs/api/reducer';
import { createShowOneShowOneGifAPIReducer } from '../gif/api/reducer';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    gifs: createGifAPIReducer(),
    gif: createShowOneShowOneGifAPIReducer(),
    router: routerReducer,
  }));
