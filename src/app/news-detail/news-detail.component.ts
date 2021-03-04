import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  newsId: string = '';
  news: any;

  constructor(
    private newsService: NewsService,
  ) { }

  fetchNewsById(newsId: string) {
    this.newsService.fetchNewsById(newsId).subscribe((data: any) => {
      this.news = data;
      console.log('News check', this.news);
    });
  }

  ngOnInit(): void {
  }

}
