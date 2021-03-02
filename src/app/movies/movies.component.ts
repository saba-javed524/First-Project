import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: any[] = [
    [
      {
        "movieId": 1,
        "movieName": "Batman",
        "releaseDate": "March 20, 2012",
        "movieType": "Episode",
        "movieRuntime": "02:20:02",
        "movieRating": 4.9,
      },
      {
        "movieId": 1,
        "movieName": "Harry Potter",
        "releaseDate": "March 20, 2012",
        "movieType": "Season",
        "runTime": "02:20:02",
        "rating": 4.9,
      },
      {
        "movieId": 1,
        "movieName": "Attack On Titan",
        "releaseDate": "March 20, 2012",
        "movieType": "Season",
        "runTime": "02:20:02",
        "rating": 4.9,
      },
    ]
  ];

}
