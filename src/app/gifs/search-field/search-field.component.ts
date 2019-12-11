import { Component, OnInit } from '@angular/core';
import { GifAPIActions } from '../api/actions';
import { GifAPIService } from '../api/service';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IGif, fromServer } from '../model';
import { pipe, values, sortBy, prop } from 'ramda';
import 'rxjs/add/operator/map';

export const sortGifs = obs$ => obs$
    .map(pipe(
        values,
        sortBy(prop('id'))));
@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    query: string;

    // Get gifs-related data out of the Redux store as observables.
    @select$(['gifs', 'items'], sortGifs)
    readonly gifs$: Observable<IGif[]>;

    @select(['gifs', 'loading'])
    readonly loading$: Observable<boolean>;

    @select(['gifs', 'error'])
    readonly error$: Observable<any>;
    constructor(private gifApiService: GifAPIService) {
    }

    async search() {
        if (this.query) {
            this.gifApiService.queryGifs(this.query);
        }
    }

    ngOnInit() {
    }
}
