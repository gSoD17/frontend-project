import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  api: string = '?api_key=51734426cecd2440b4f4ce9658af672f';
  base_url: string = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient) { }

  getMovie() {
      return this.http.get(this.base_url + 550 +  this.api);
  }

}
