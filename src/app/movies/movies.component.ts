import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  searchFilter : string = 'batman';

  movies: any[] = [
    
      {
        "movieId": 1,
        "movieName": "Batman",
        "releaseDate": "March 20, 2012",
        "movieType": "Episode",
        "movieRuntime": "02:20:02",
        "movieRating": 4.9,
      },
      {
        "movieId": 2,
        "movieName": "Harry Potter",
        "releaseDate": "January 22, 2019",
        "movieType": "Season",
        "movieRuntime": "02:50:01",
        "movieRating": 4.8,
      },
      {
        "movieId": 3,
        "movieName": "Attack On Titan",
        "releaseDate": "Feb 20, 2021",
        "movieType": "Season",
        "movieRuntime": "04:30:06",
        "movieRating": 5.0,
      },
  ];

}
