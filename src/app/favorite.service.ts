import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteService {
    
  favoriteMovies: any = []
  
  newMovie: object

  constructor() { }
  
  addMovie(newMovie) {
    this.favoriteMovies.push(newMovie)
  }

}
