import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LegsIdNames } from '../../model/enums';
let Leg1Component = class Leg1Component {
    constructor(http, legs, urls, legsSer) {
        this.http = http;
        this.legs = legs;
        this.urls = urls;
        this.legsSer = legsSer;
        this.legID = LegsIdNames.Leg1;
        this.textDirection = 'rtl';
        this.list = [];
        this.legDetails = {};
        this.skyOrGround = "";
        this.imgUrl = "";
        this.imgAlt = "";
        this.imgUrl = '../../../../assets/images//air22.jpeg';
        this.imgAlt = "טיסה";
    }
    ngOnInit() {
        this.getLeg1Details();
        setTimeout(() => {
            this.getLeg1Flights();
        }, 2000);
    }
    getLeg1Details() {
        this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
            .subscribe((res) => {
            if (res.data.id != -1) {
                this.legDetails = res.data;
                this.legDetails.skyOrGround === false ? this.skyOrGround = 'בקרקע' : this.skyOrGround = 'בשמים';
            }
        });
    }
    getLeg1Flights() {
        if (!this.legDetails || !this.legDetails.legNumber) {
            return;
        }
        this.http.get(this.urls.legs.getLegFlights + "?legNumber=" + this.legDetails.legNumber)
            .subscribe((res) => {
            this.list = res.data;
        });
    }
    goToFlight(flightNumber) {
        this.legsSer.navigateToFlight(flightNumber);
    }
};
Leg1Component = __decorate([
    Component({
        selector: 'app-leg1',
        templateUrl: './leg1.component.html',
        styleUrls: ['./leg1.component.css']
    })
], Leg1Component);
export { Leg1Component };
//# sourceMappingURL=leg1.component.js.map