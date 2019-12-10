import { GifAPIAction, GifAPIActions } from './actions';
import { IGifList } from '../model';
import { Action } from 'redux';

const INITIAL_STATE: IGifList = {
  items: [],
  loading: false,
  error: null,
};

// A higher-order reducer: accepts an gifs type and returns a reducer
// that only responds to actions for that particular gifs type.
export function createGifAPIReducer() {
  return function gifsReducer(state: IGifList = INITIAL_STATE,
                              a: Action): IGifList {

    const action = a as GifAPIAction;

    switch (action.type) {
      case GifAPIActions.LOAD_STARTED:
        return {
          ...state,
          items: [],
          loading: true,
          error: null,
        };
      case GifAPIActions.LOAD_SUCCEEDED:
        return {
          ...state,
          items: action.payload,
          loading: false,
          error: null,
        };
      case GifAPIActions.LOAD_FAILED:
        return {
          ...state,
          items: [],
          loading: false,
          error: action.error,
        };
    }

    return state;
  };
}
