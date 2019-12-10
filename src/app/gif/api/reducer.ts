import { ShowOneGifAPIAction, ShowOneGifAPIActions } from './actions';
import { Action } from 'redux';
import { IShowOneGifList } from '../../gifs/model';

const INITIAL_STATE: IShowOneGifList = {
  item: {}
};

// A higher-order reducer: accepts an animal type and returns a reducer
// that only responds to actions for that particular animal type.
export function createShowOneShowOneGifAPIReducer() {
  return function gifReducer(state: IShowOneGifList = INITIAL_STATE,
                             a: Action): IShowOneGifList {

    const action = a as ShowOneGifAPIAction;

    switch (action.type) {
      case ShowOneGifAPIActions.LOAD_ONE_STARTED:
        return {
          ...state,
          item: { }
        };
      case ShowOneGifAPIActions.LOAD_ONE_SUCCEEDED:
        return {
          ...state,
          item: action.payload
        };
      case ShowOneGifAPIActions.LOAD_ONE_FAILED:
        return {
          ...state,
          item: { }
        };
    }

    return state;
  };
}
