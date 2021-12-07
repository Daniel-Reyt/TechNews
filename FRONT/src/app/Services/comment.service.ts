import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './Url';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  deleteComment(id_comment: any) {
    return this.http.post(`${url}comments/delete`, {id_comment: id_comment}).pipe()
  }
}
