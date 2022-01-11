import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './Url';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(
    private http: HttpClient,
  ) {}

  addProduit(produit: any) {
    return this.http.post(`${url}produits/`, produit).pipe();
  }

  getProduits() {
    return this.http.get(`${url}produits/`).pipe();
  }
}
