import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  menuList:any[] = Array.from({length: 2}, (_, index) => index + 1)
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

  }


  toPayment(orderId:Number){
    this.router.navigate([`store/1/payment/${orderId}`])
  }
}
