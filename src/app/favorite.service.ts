import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteService {
    
  favoriteMovies: any = [
      {title: 'Title'}
  ]

  constructor() { }

}
