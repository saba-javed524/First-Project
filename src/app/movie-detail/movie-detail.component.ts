import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  imdbId: string = '';
  movie: any;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}
  fetchMovieById(imdbId: string) {
    this.movieService.fetchMovieById(imdbId).subscribe((data: any) => {
      this.movie = data;
      console.log('Movie', this.movie);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.imdbId = params.id;
      console.log('Recieved Id', this.imdbId);
      this.fetchMovieById(this.imdbId);
    });
  }
}
