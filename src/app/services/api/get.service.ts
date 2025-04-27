import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  private BASE_URL = 'http://localhost:3000/api/get';

  constructor(
    private http: HttpClient
  ) { }

  getMenuItems(storeId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/get/menu-items/${storeId}`)
  }

  getOrderById(orderId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/orders/${orderId}`);
  }

}
