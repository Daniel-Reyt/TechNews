import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './Url';

@Injectable({
  providedIn: 'root'
})
export class MarquesService {

  constructor(
    private http: HttpClient
  ) { }

  getMarques() {
    return this.http.get(`${url}marques/`).pipe()
  }
  addMarque(marque: any) {
    return this.http.post(`${url}marques/add`, marque).pipe()
  }
}
