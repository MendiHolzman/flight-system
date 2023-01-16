import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultData } from 'src/app/shared/models/resultData';
import { UrlsService } from 'src/app/shared/services/urls.service';
import { FlightDetails } from '../../model/models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flightNumber?: string | null = null;
  flightDetails: FlightDetails = {};
  textDirection: string = "rtl";
  list: number[] = [];
 
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private urls: UrlsService, private location: Location) {
    this.flightNumber = this.route.snapshot.paramMap.get('flightNumber') ?? null;
  }

  ngOnInit(): void {
    this.getFlightDetails()
  }

  getFlightDetails() {
    this.http.get(this.urls.flight.getFlightDetails + "?flightNumber=" + this.flightNumber)
      .subscribe((res: ResultData) => {
        if (res.data.id != -1) {
          this.flightDetails = res.data;
        }
      });
  }

  getFlightPassengers() {
    if (!this.flightNumber) {
      return;
    }

    this.http.get(this.urls.flight.getFlightPassengers + "?flightNumber=" + this.flightNumber)
      .subscribe((res: ResultData) => {
        this.list = res.data;
      });
  }

  back() {
    this.location.back(); 
  }

}
