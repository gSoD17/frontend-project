import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  constructor(private _searchMovies: MovieService) { }

  ngOnInit() {
  }
  
  newSearch() {
    this._searchMovies.searchMovie()
      .subscribe( data => {
        console.log(data)
      })
  }

}
