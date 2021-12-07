import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './Url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get(`${url}users/`).pipe();
  }
  ban(id_user: any) {
    return this.http.post(`${url}users/ban`, {id_user: id_user}).pipe();
  }
}
