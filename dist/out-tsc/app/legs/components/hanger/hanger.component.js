import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LegsIdNames } from '../../model/enums';
let HangerComponent = class HangerComponent {
    constructor(http, legs, urls, legsSer) {
        this.http = http;
        this.legs = legs;
        this.urls = urls;
        this.legsSer = legsSer;
        this.legID = LegsIdNames.Hanger;
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
        this.getHangerDetails();
        setTimeout(() => {
            this.getHangerFlights();
        }, 2000);
    }
    getHangerDetails() {
        this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
            .subscribe((res) => {
            if (res.data.id != -1) {
                this.legDetails = res.data;
                this.legDetails.skyOrGround === false ? this.skyOrGround = 'בקרקע' : this.skyOrGround = 'בשמים';
            }
        });
    }
    getHangerFlights() {
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
HangerComponent = __decorate([
    Component({
        selector: 'app-hanger',
        templateUrl: './hanger.component.html',
        styleUrls: ['./hanger.component.css']
    })
], HangerComponent);
export { HangerComponent };
//# sourceMappingURL=hanger.component.js.map