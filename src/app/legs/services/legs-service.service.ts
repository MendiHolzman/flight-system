import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { ResultData } from 'src/app/shared/models/resultData';
import { UrlsService } from 'src/app/shared/services/urls.service';

@Injectable({
  providedIn: 'root'
})
export class LegsServiceService {

  constructor(private router: Router, private http: HttpClient, private urls: UrlsService) { }

  navigateToLeg(legNumber: number) {
    switch (legNumber) {
      case 444:
        this.router.navigate(['legs/hanger']);
        break;

      case 1:
        this.router.navigate(['legs/leg1']);
        break;

      case 2:
        this.router.navigate(['legs/leg2']);
        break;

      case 3:
        this.router.navigate(['legs/leg3']);
        break;

      case 4:
        this.router.navigate(['legs/leg4']);
        break;

      case 5:
        this.router.navigate(['legs/leg5']);
        break;

      case 6:
        this.router.navigate(['legs/leg6']);
        break;

      case 7:
        this.router.navigate(['legs/leg7']);
        break;

      case 8:
        this.router.navigate(['legs/leg8']);
        break;

      default:
        break;
    }
  }

  navigateToFlight(flightNumber: number){
    this.router.navigate(['flights/flight', flightNumber]);
  }

}
