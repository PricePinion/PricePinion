import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // hostUrl: String = 'https://pricepinion-backend.azurewebsites.net/';
  hostUrl: String = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  //display all products
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.hostUrl}api/products`);
  }

  //display all stores based on one product
  getOneProduct(productId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.hostUrl}api/product/${productId}`);
  }
 
  //save a product in SaveForLater
  setSaveForLater(productID: string): Observable<any> {
    return this.http.post<any>(`${this.hostUrl}api/customer/save-for-later`, { productID }, { withCredentials: true });
  }

  //get status of save for later
  getSaveForLater():Observable<any> {
    return this.http.get<any>(`${this.hostUrl}api/save-for-later`, { withCredentials: true });
  }

  //delete one product from save for later screen
  deleteSflProduct(productID: string): Observable<any> {
    return this.http.delete<any>(`${this.hostUrl}api/customer/delete-one-product-from-sfl/${productID}`, { withCredentials: true });
  }

  //delete all products from save for later screen
  deleteAllSflProducts(): Observable<any> {
    return this.http.delete<any>(`${this.hostUrl}api/customer/delete-all-products-from-sfl`, { withCredentials: true });
  }

  authenticateGoogle(): Observable<any> {
    return this.http.get<any>(`${this.hostUrl}auth/google`);
  }
}
