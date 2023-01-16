import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LegsIdNames } from '../../model/enums';
let Leg6Component = class Leg6Component {
    constructor(http, legs, urls) {
        this.http = http;
        this.legs = legs;
        this.urls = urls;
        this.legID = LegsIdNames.Leg6;
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
        this.getleg6Details();
        setTimeout(() => {
            this.getleg6Flights();
        }, 2000);
    }
    getleg6Details() {
        this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
            .subscribe((res) => {
            if (res.data.id != -1) {
                this.legDetails = res.data;
                this.legDetails.skyOrGround === false ? this.skyOrGround = 'בקרקע' : this.skyOrGround = 'בשמים';
            }
        });
    }
    getleg6Flights() {
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
Leg6Component = __decorate([
    Component({
        selector: 'app-leg6',
        templateUrl: './leg6.component.html',
        styleUrls: ['./leg6.component.css']
    })
], Leg6Component);
export { Leg6Component };
//# sourceMappingURL=leg6.component.js.map