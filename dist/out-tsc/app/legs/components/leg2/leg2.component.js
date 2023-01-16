import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LegsIdNames } from '../../model/enums';
let Leg2Component = class Leg2Component {
    constructor(http, legs, urls) {
        this.http = http;
        this.legs = legs;
        this.urls = urls;
        this.legID = LegsIdNames.Leg2;
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
        this.getLeg2Details();
        setTimeout(() => {
            this.getLeg2Flights();
        }, 2000);
    }
    getLeg2Details() {
        this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
            .subscribe((res) => {
            if (res.data.id != -1) {
                this.legDetails = res.data;
                this.legDetails.skyOrGround === false ? this.skyOrGround = 'בקרקע' : this.skyOrGround = 'בשמים';
            }
        });
    }
    getLeg2Flights() {
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
Leg2Component = __decorate([
    Component({
        selector: 'app-leg2',
        templateUrl: './leg2.component.html',
        styleUrls: ['./leg2.component.css']
    })
], Leg2Component);
export { Leg2Component };
//# sourceMappingURL=leg2.component.js.map