import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public searchMovies(q: string) {
    return this.http.get(`http://www.omdbapi.com/?apikey=897a51d8&s=${q}`);
  }
  public fetchMovieById(imdbId: string) {
    // return this.http.get(`http://www.omdbapi.com/?apikey=897a51d8&s=${q}`);

  }
}
