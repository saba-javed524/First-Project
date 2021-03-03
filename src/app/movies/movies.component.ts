import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  query: string = '';
  
  constructor(private movieService: MovieService) {}

  searchMovies() {
    this.movieService.searchMovies(this.query).subscribe((data: any) => {
      console.log(data);
      this.movies = data.Search;
    });
  }

  ngOnInit(): void {}
}
