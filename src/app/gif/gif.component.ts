import { Component, OnInit } from '@angular/core';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { pipe, values, sortBy, prop } from 'ramda';
import 'rxjs/add/operator/map';
import { IGif } from '../gifs/model';
import { ShowOneGifAPIActions } from './api/actions';

export const sortGif = obs$ => obs$
.map(value => value);

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  @select(['gif', 'item'])
  readonly gif$: Observable<IGif>;

  gif: IGif;
  constructor(private actions: ShowOneGifAPIActions) {
    this.gif$.subscribe((value) => {
      this.gif = value;
    });
  }

  ngOnInit() {
  }

}
