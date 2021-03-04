import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public searchNews(newsq: string) {
    return this.http.get(
      `https://newsapi.org/v2/everything?apiKey=a938f2904fbc47809b1f97811e00a4e5&q=${newsq}`
    );
  }

  public fetchMovieById(id: string) {
    return this.http.get(`https://newsapi.org/v2/everything?apiKey=a938f2904fbc47809b1f97811e00a4e5&q=${id}`);
  }

}
