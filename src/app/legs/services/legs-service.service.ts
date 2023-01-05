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

      default:
        break;
    }
  }

 
}
