import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { IGif, SearchTerm } from '../model';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = IGif[];
interface MetaData { response_id?: string; msg?: string; status?: string; }
export type GifAPIAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class GifAPIActions {
  static readonly LOAD_GIFS = 'LOAD_GIFS';
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  @dispatch()
  loadGIFS = (searchTerm: SearchTerm): GifAPIAction => ({
    type: GifAPIActions.LOAD_GIFS,
    meta: { },
    payload: null,
  })

  loadStarted = (searchTerm: SearchTerm): GifAPIAction => ({
    type: GifAPIActions.LOAD_STARTED,
    meta: { },
    payload: null,
  })

  @dispatch()
  loadSucceeded = (searchTerm: SearchTerm, payload: Payload): GifAPIAction => ({
    type: GifAPIActions.LOAD_SUCCEEDED,
    meta: { },
    payload,
  })

  loadFailed = (searchTerm: SearchTerm, error): GifAPIAction => ({
    type: GifAPIActions.LOAD_FAILED,
    meta: { },
    payload: null,
    error,
  })
}
