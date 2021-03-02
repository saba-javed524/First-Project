import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  searchFilter: string = 'batman';

  movies: any[] = [];
  constructor(private movieService: MovieService) {
    this.movieService.searchMovies("Avengers")
      .subscribe((data: any) => {
        console.log(data);
        this.movies = data.Search;
      });
  }
}
