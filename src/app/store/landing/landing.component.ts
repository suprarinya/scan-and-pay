import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  storeId: string | null = null

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }


  ngOnInit(): void {
    this.storeId = this.route.snapshot.paramMap.get('storeId')
  }




  navigateToMenu() {
    if(this.storeId){
      this.router.navigate([`/store/${this.storeId}/menu`])
    }
  }
}
