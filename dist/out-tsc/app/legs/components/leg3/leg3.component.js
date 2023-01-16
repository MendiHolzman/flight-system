import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LegsIdNames } from '../../model/enums';
let Leg3Component = class Leg3Component {
    constructor(http, legs, urls) {
        this.http = http;
        this.legs = legs;
        this.urls = urls;
        this.legID = LegsIdNames.Leg3;
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
        this.getleg3Details();
        setTimeout(() => {
            this.getleg3Flights();
        }, 2000);
    }
    getleg3Details() {
        this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
            .subscribe((res) => {
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
            .subscribe((res) => {
            this.list = res.data;
        });
    }
    goToFlight() {
        alert("Flight is coming!!");
    }
};
Leg3Component = __decorate([
    Component({
        selector: 'app-leg3',
        templateUrl: './leg3.component.html',
        styleUrls: ['./leg3.component.css']
    })
], Leg3Component);
export { Leg3Component };
//# sourceMappingURL=leg3.component.js.map