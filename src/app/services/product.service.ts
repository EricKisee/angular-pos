import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from 'src/app/Product';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5000/products';

  constructor( private http:HttpClient ) { }

  getProducts() : Observable <Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  deleteProduct (product: Product) : Observable<Product> {
    const url =`${this.apiUrl}/${product.id}`;
    return this.http.delete<Product>(url);
  }

  updateProduct (product:Product) : Observable<Product> {
    const url =`${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product,httpOptions);
  }

  addProduct (product :Product) : Observable <Product> {
    return this.http.post<Product>(this.apiUrl, product, httpOptions);
  }
}
