import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from 'src/app/Product';
import { product } from 'src/app/Product_';
import { embedded, Products, ProductList, Links } from 'src/app/Products';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5000/products/';
  private apiUrl2 = 'http://localhost:8080/products/';

  constructor( private http:HttpClient ) { }

  getProducts() : Observable <Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  getEmbedded() : Observable <embedded> {
    const embedded = this.http.get<embedded>(this.apiUrl2);
    return embedded;
  }

  getProducts2() : Observable <Products> {
    return this.http.get<Products>(this.apiUrl2);
  }

  deleteProduct (product: Product) : Observable<Product> {
    const url =`${this.apiUrl2}/${product.id}`;
    return this.http.delete<Product>(url);
  }

  updateProduct (product:Product) : Observable<Product> {
    const url =`${this.apiUrl2}/${product.id}`;
    return this.http.put<Product>(url, product,httpOptions);
  }

  addProduct (product :Product) : Observable <product> {
    return this.http.post<product>(this.apiUrl2, product, httpOptions);
  }

  getProduct(id:number) : Observable <product> {
    return this.http.get<product>(this.apiUrl2+id);
  }
}
