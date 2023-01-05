import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResultData } from 'src/app/shared/models/resultData';
import { UrlsService } from 'src/app/shared/services/urls.service';
import { LegsIdNames } from '../../model/enums';
import { LegDetails } from '../../model/models';
import { LegsServiceService } from '../../services/legs-service.service';

@Component({
  selector: 'app-hanger',
  templateUrl: './hanger.component.html',
  styleUrls: ['./hanger.component.css']
})
export class HangerComponent implements OnInit {
  private legID: LegsIdNames = LegsIdNames.Hanger;

  textDirection: string = 'rtl';
  list: number[] = [];
  legDetails: LegDetails = {};


  constructor(private http: HttpClient, private legs: LegsServiceService, private urls: UrlsService) { }

  ngOnInit(): void {

    this.getHangerDetails();

    setTimeout(() => {
      this.getHangerFlights();
    }, 3000);
  }

  getHangerDetails() {
    this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
      .subscribe((res: ResultData) => {
        this.legDetails = res.data;
      });
  }

  getHangerFlights() {
    this.http.get(this.urls.legs.getLegFlights + "?legNumber=" + this.legDetails.legNumber)
      .subscribe((res: ResultData) => {
        this.list = res.data;
      });
  }

  goToFlight() {
    alert("Flight is coming!!");
  }

}
