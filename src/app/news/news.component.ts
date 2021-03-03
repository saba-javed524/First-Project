import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news : any[] = [];
  newsquery : string = '';

  constructor(private newsService: NewsService) { }

  searchNews() {
    this.newsService.searchNews(this.newsquery).subscribe((data:any) => {
      console.log(data);
      this.news = data.articles;
      console.log(this.news);
    });
  }

  ngOnInit(): void {
  }

}
