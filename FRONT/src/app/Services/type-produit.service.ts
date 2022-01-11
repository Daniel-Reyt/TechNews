import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './Url';
@Injectable({
  providedIn: 'root'
})
export class TypeProduitService {
  constructor(
    private http: HttpClient,
  ) {}

  addTypeProduit(type_produit: any) {
    return this.http.post(`${url}typeProduits/`, type_produit).pipe();
  }

  getTypeProduits() {
    return this.http.get(`${url}typeProduits/`).pipe();
  }
}
