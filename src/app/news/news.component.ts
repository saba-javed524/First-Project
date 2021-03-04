import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  newsList: any[] = []
  newsquery: string = '';

  constructor(private newsService: NewsService, private router: Router) { }


  searchNews() {
    this.newsService.searchNews(this.newsquery).subscribe((data: any) => {
      this.newsService.news = data.articles;
      this.newsList = data.articles;
    });
  }

  ngOnInit(): void { }

  goToDetailNewsPage(newsIndex: any) {
    this.router.navigate(['news', newsIndex]);
  }


}
