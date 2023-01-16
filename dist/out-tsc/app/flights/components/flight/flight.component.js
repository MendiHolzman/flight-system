import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FlightComponent = class FlightComponent {
    constructor(route, http, urls, location) {
        this.route = route;
        this.http = http;
        this.urls = urls;
        this.location = location;
        this.flightNumber = null;
        this.flightDetails = {};
        this.textDirection = "rtl";
        this.list = [];
        this.flightNumber = this.route.snapshot.paramMap.get('flightNumber') ?? null;
    }
    ngOnInit() {
        this.getFlightDetails();
    }
    getFlightDetails() {
        this.http.get(this.urls.flight.getFlightDetails + "?flightNumber=" + this.flightNumber)
            .subscribe((res) => {
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
            .subscribe((res) => {
            this.list = res.data;
        });
    }
    back() {
        this.location.back();
    }
};
FlightComponent = __decorate([
    Component({
        selector: 'app-flight',
        templateUrl: './flight.component.html',
        styleUrls: ['./flight.component.css']
    })
], FlightComponent);
export { FlightComponent };
//# sourceMappingURL=flight.component.js.map