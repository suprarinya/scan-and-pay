import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {  
  menuList:any[] = Array.from({length: 8}, (_, index) => index + 1)


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  goBack() {
    this.router.navigate(['store/1/landing'])
  }

  toMenuItem(index:number){
    this.router.navigate([`store/1/menu/${index}`])
  }
}
