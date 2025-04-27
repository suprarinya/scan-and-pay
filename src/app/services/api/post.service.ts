import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASE_URL = 'http://localhost:3000/api/post';

  constructor(
    private http: HttpClient
  ) { }

  createOrder(orderData: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/orders`, orderData);
  }

  updatePaymentStatus(orderId: number, paymentData: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/payments/${orderId}`, paymentData);
  }

}
