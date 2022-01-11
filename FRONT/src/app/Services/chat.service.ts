import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './Url';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(`${url}chat/messages`).pipe();
  }
  sendMessageGeneral(message: any, id_user: any) {
    const date_send = new Date();
    let body = {
      id_user: id_user,
      message: message,
      date_message: date_send
    }
    return this.http.post(`${url}chat/`, body).pipe();
  }
}
