import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FavoriteService {
    
  favoriteMovies: any = []
  
  newMovie: object

  constructor(private _http: HttpClient) { }

  base_url: string = 'http://gino-spring-2018-phortonssf.c9users.io:8080/api/appUsers/'
  
  addMovie(newMovie) {
    this.favoriteMovies.push(newMovie)
    //add http post 
    let token = sessionStorage.getItem('token')
    let userId = sessionStorage.getItem('userId')
    return this._http.post(this.base_url + userId + '/movies?access_token=' + token, newMovie)
  }

}
