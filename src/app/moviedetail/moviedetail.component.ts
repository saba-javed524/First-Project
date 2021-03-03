import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  constructor(private movieDetail: MovieService) {
    fetchMovieById() {
      this.movieService.searchMovies(this.query).subscribe((data: any) => {
        console.log(data);
        this.movies = data.Search;
      });
   }

  ngOnInit(): void {
  }

}  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

