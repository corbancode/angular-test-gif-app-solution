import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SearchTerm, IGif, fromServer } from '../model';

// Gif URL.
const URL = 'https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&limit=25&lang=en';

@Injectable()
export class GifAPIHttpService {
  constructor(private http: HttpClient) {}

  getGifs = (searchTerm: SearchTerm, offset: number = 0) =>
    this.http.get(`${URL}&q=${searchTerm}&offset=${offset}`)
              // .subscribe(data => console.log(data));
}
