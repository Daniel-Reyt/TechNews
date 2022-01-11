import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './Url';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  addNews(news: any) {
    return this.http.post(`${url}news/`, news).pipe();
  }

  getAllNews() {
    return this.http.get(`${url}news/`).pipe();
  }

  postComment(news: any) {
    return this.http.post(`${url}news/comment`, news).pipe();
  }

  getAllCommentByNews(id_news: any) {
    return this.http.post(`${url}news/getComments/`, {id_news: id_news}).pipe();
  }
}
