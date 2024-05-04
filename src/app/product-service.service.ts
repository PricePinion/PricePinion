import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //display all products
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/products');
  }

  //display all stores based on one product
  getOneProduct(productId: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/product/${productId}`);
  }
 
  //save a product in SaveForLater
  setSaveForLater(productID: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/customer/save-for-later`, { productID });
  }
}
