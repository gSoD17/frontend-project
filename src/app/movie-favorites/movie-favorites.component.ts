import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-movie-favorites',
  templateUrl: './movie-favorites.component.html',
  styleUrls: ['./movie-favorites.component.scss']
})
export class MovieFavoritesComponent implements OnInit {

  constructor(private _favoriteMovies: FavoriteService) { }
  
  // favoriteList = this._favoriteMovies.favoriteMovies

  ngOnInit() {
  }
  
  // saveFavorites() {
  //   console.log('Favorited')
  //   this._user.saveMovie()
  //   .subscribe(
  //     favMov => console.log(favMov, 'works')
  //   )
  // }

}
