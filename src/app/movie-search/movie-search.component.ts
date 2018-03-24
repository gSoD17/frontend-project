import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  constructor(private _searchMovies: MovieService, private _favoriteMovie: FavoriteService) { }

  movies: any
  results: object

  ngOnInit() {
  }
  
  newSearch(movie) {
    this._searchMovies.searchMovie(movie)
      .subscribe( movieData => {
        this.movies = movieData['results']
        console.log(movieData)
      })
  }
  
  newMovie(add) {
    this._favoriteMovie.addMovie(add)
  }

}
