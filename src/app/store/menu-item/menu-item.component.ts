import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from '../../services/api/get.service';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  image_url: string;
  price: string;
  menu_id: number;
  store_id: number;
  is_active: number;
}

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent implements OnInit {

  totalItem:number = 1
  itemId:string|null = null
  menuItem: MenuItem = {
    id: 0,
    name: '',
    description: '',
    image_url: '',
    price: '',
    menu_id: 0,
    store_id: 0,
    is_active: 1
  };
  pricePerUnit:number = 1
  totalPrice: number = 0
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getService: GetService
  ){
    
  } 

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('itemId')
    this.getService.getMenuItemsById(this.itemId).subscribe((data) => {
      this.menuItem = data
      this.pricePerUnit = parseFloat(this.menuItem.price)
      this.totalPrice = this.pricePerUnit
      console.log('Menu items loaded:', this.menuItem);
    })
  }

  toCart(orderId:number){
    this.router.navigate([`store/1/cart/${orderId}`])
  }

  toMenu(storeId:number){
    this.router.navigate([`store/1/menu/${storeId}`])
  }

  calcTotal(action:string){
    if(action == '+'){
      this.totalItem += 1
    } else if(action == '-') {
      this.totalItem -= 1
    }
    this.totalPrice = this.pricePerUnit * this.totalItem

  }
}