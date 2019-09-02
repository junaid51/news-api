import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/services/app.service';

@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  selectedNews: any;

  constructor(private newsService: AppService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const paramVar = params['query'];
      console.log(paramVar);
      this.getNews(paramVar);
    });

  }

  getNews(query: string) {
  this.newsService.getNews(query).subscribe(
    news => {
      this.selectedNews = news;
    }
  );
  }
}
