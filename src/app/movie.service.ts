import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  search_url: string = 'https://api.themoviedb.org/3/search/movie';
  api: string = '?api_key=51734426cecd2440b4f4ce9658af672f';
  options1: string = '&language=en-US';

  constructor(private _http: HttpClient) { }
  
  searchMovie(query: string) {
    return this._http.get(this.search_url + this.api + '&query=' + query)
  }

}
