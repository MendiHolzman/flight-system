import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LegsIdNames } from '../../model/enums';
let Leg8Component = class Leg8Component {
    constructor(http, legs, urls) {
        this.http = http;
        this.legs = legs;
        this.urls = urls;
        this.legID = LegsIdNames.Leg8;
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
        this.getLeg8Details();
        setTimeout(() => {
            this.getLeg8Flights();
        }, 2000);
    }
    getLeg8Details() {
        this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
            .subscribe((res) => {
            if (res.data.id != -1) {
                this.legDetails = res.data;
                this.legDetails.skyOrGround === false ? this.skyOrGround = 'בקרקע' : this.skyOrGround = 'בשמים';
            }
        });
    }
    getLeg8Flights() {
        if (!this.legDetails || !this.legDetails.legNumber) {
            return;
        }
        this.http.get(this.urls.legs.getLegFlights + "?legNumber=" + this.legDetails.legNumber)
            .subscribe((res) => {
            this.list = res.data;
        });
    }
    goToFlight() {
        alert("Flight is coming!!");
    }
};
Leg8Component = __decorate([
    Component({
        selector: 'app-leg8',
        templateUrl: './leg8.component.html',
        styleUrls: ['./leg8.component.css']
    })
], Leg8Component);
export { Leg8Component };
//# sourceMappingURL=leg8.component.js.map