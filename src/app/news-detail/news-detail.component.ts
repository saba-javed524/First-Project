import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  newsIndex: number = -1;
  news: any;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {

  }



  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.newsIndex = params.index;
      if (this.newsIndex >= 0)
        this.news = this.newsService.news[this.newsIndex];
    });
  }

}
