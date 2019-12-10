import { Injectable } from '@angular/core';

import { SearchTerm } from '../model';
import { GifAPIActions } from './actions';
import { GifAPIHttpService } from './http-service';

@Injectable()
export class GifAPIService {
  constructor(
    private service: GifAPIHttpService,
    private actions: GifAPIActions,
  ) {}

  public queryGifs(query: SearchTerm) {
    this.actions.loadStarted(query);
    this.service.getGifs(query)
        .subscribe((data: any) => {
          this.actions.loadSucceeded(query, data.data);
        },
                    err => this.actions.loadFailed(query, {
                        status: '' + err.status,
                      })
        );
  }
}
