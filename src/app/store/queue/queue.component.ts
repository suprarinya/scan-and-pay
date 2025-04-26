import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.css'
})
export class QueueComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  toMenu(storeId:number) {
    this.router.navigate([`store/${storeId}/menu`])
  }


}
