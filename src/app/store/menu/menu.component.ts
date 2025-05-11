import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from '../../services/api/get.service';
import { PostService } from '../../services/api/post.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {  
  menuList:any[] = Array.from({length: 8}, (_, index) => index + 1)
  storeId:string|null = null

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getService: GetService,
    private postService: PostService
  ) {

  }

  ngOnInit(): void {
    this.storeId = this.route.snapshot.paramMap.get('storeId')
    this.getService.getAllMenuItemsById(this.storeId).subscribe((data) => {
      this.menuList = data
      console.log('Menu items loaded:', this.menuList);
    })
  }

  placeOrder() {
    let order = {
      items: [{ menu_item_id: 1, quantity: 2 }],
      total_amount: 5.00
    };

    this.postService.createOrder(order).subscribe((res) => {
      console.log('Order placed successfully!', res);
    })
  }

  goBack() {
    this.router.navigate(['store/1/landing'])
  }

  toMenuItem(index:number){
    this.router.navigate([`store/1/menu/${index}`])
  }


}
