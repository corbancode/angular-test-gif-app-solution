import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { IGif } from '../../gifs/model';


// Flux-standard-action gives us stronger typing of our actions.
type Payload = IGif;
interface MetaData { response_id?: string; msg?: string; status?: string; }
export type ShowOneGifAPIAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class ShowOneGifAPIActions {
  static readonly LOAD_ONE_GIF = 'LOAD_ONE_GIF';
  static readonly LOAD_ONE_STARTED = 'LOAD_ONE_STARTED';
  static readonly LOAD_ONE_SUCCEEDED = 'LOAD_ONE_SUCCEEDED';
  static readonly LOAD_ONE_FAILED = 'LOAD_ONE_FAILED';

  @dispatch()
  loadGIF = (): ShowOneGifAPIAction => ({
    type: ShowOneGifAPIActions.LOAD_ONE_GIF,
    meta: { },
    payload: null,
  })

  loadStarted = (): ShowOneGifAPIAction => ({
    type: ShowOneGifAPIActions.LOAD_ONE_STARTED,
    meta: { },
    payload: null,
  })

  @dispatch()
  loadSucceeded = (payload: Payload): ShowOneGifAPIAction => ({
    type: ShowOneGifAPIActions.LOAD_ONE_SUCCEEDED,
    meta: { },
    payload,
  })

  loadFailed = (error): ShowOneGifAPIAction => ({
    type: ShowOneGifAPIActions.LOAD_ONE_FAILED,
    meta: { },
    payload: null,
    error,
  })
}
