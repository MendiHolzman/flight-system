import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LegsServiceService {

  constructor(private router: Router) { }

  navigateToLeg(legNumber: number) {
    switch (legNumber) {
      case 444:
        this.router.navigate(['/hanger']);
        break;

      default:
        break;
    }
  }
}
