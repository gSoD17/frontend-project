import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movieData: any;

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getMovie()
      .subscribe( (data: any) => {
        this.movieData = data
      })
  }

}
