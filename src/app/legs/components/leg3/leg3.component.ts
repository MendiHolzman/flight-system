import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResultData } from 'src/app/shared/models/resultData';
import { UrlsService } from 'src/app/shared/services/urls.service';
import { LegsIdNames } from '../../model/enums';
import { LegDetails } from '../../model/models';
import { LegsServiceService } from '../../services/legs-service.service';

@Component({
  selector: 'app-leg3',
  templateUrl: './leg3.component.html',
  styleUrls: ['./leg3.component.css']
})
export class Leg3Component implements OnInit {
  private legID: LegsIdNames = LegsIdNames.Leg3;

  textDirection: string = 'rtl';
  list: number[] = [];
  legDetails: LegDetails = {};
  skyOrGround: string = "";
  imgUrl: string = "";
  imgAlt: string = "";
  
  constructor(private http: HttpClient, private legs: LegsServiceService,
    private urls: UrlsService) {
    this.imgUrl = '../../../../assets/images//air22.jpeg';
    this.imgAlt = "טיסה"; 
  }

  ngOnInit(): void {
    this.getleg3Details();
    setTimeout(() => {
      this.getleg3Flights();
    }, 2000);
  }

  getleg3Details() {
    this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
      .subscribe((res: ResultData) => {
        if (res.data.id != -1) {
          this.legDetails = res.data;
          this.legDetails.skyOrGround === false ? this.skyOrGround = 'בקרקע' : this.skyOrGround = 'בשמים';
        }
      });
  }

  getleg3Flights() {
    if (!this.legDetails || !this.legDetails.legNumber) {
      return;
    }

    this.http.get(this.urls.legs.getLegFlights + "?legNumber=" + this.legDetails.legNumber)
      .subscribe((res: ResultData) => {
        this.list = res.data;
      });
  }

  goToFlight() {
    alert("Flight is coming!!");
  }

}





 

 

