import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiKey: string = '&apiKey=3ad67ec83b394ddb8a68e9e752ef7f1b';
  newsUrl: string = 'https://newsapi.org/v2/everything?q=';

  constructor(private http: HttpClient) { }

  getNews(queryString: string): Observable<Object> {
    return this.http.get(this.newsUrl + queryString + this.apiKey).pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }
  }
