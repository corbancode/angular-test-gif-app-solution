import { IGifList, IShowOneGifList } from '../gifs/model';

export interface IAppState {
  gifs?: IGifList;
  gif?: IShowOneGifList;
  routes?: any;
  feedback?: any;
}
