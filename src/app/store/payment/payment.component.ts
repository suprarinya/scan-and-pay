import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  constructor(
        private router: Router,
        private route: ActivatedRoute
  ){

  }

  copyImage() {
    console.log('copyImage!!!');
  }

  refreshStatus(orderId:number){
    this.router.navigate([`store/1/queue/${orderId}`])
  }
}
