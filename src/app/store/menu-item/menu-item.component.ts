import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {

  totalItem:number = 1

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){
    
  } 

  toCart(orderId:number){
    this.router.navigate([`store/1/cart/${orderId}`])
  }

  calcTotal(action:string){
    if(action == '+'){
      this.totalItem += 1
    } else if(action == '-') {
      this.totalItem -= 1
    }
  }
}