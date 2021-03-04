import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any[] = [];
  newsquery: string = '';

  constructor(private newsService: NewsService, private router : Router,) {}


  searchNews() {
    this.newsService.searchNews(this.newsquery).subscribe((data: any) => {
      console.log(data);
      this.news = data.articles;
      console.log(this.news);
    });
  }

  ngOnInit(): void {}

  goToDetailNewsPage(news: any) {
    
    let newsIndex = news.index;
    console.log('Index',newsIndex)
    let newsTitle = news.title;
    console.log('Title',newsTitle)
    
  }


}
