import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LegsIdNames } from '../../model/enums';
let Leg4Component = class Leg4Component {
    constructor(http, legs, urls) {
        this.http = http;
        this.legs = legs;
        this.urls = urls;
        this.legID = LegsIdNames.Leg4;
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
        this.getLeg4Details();
        setTimeout(() => {
            this.getLeg4Flights();
        }, 2000);
    }
    getLeg4Details() {
        this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
            .subscribe((res) => {
            if (res.data.id != -1) {
                this.legDetails = res.data;
                this.legDetails.skyOrGround === false ? this.skyOrGround = 'בקרקע' : this.skyOrGround = 'בשמים';
            }
        });
    }
    getLeg4Flights() {
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
Leg4Component = __decorate([
    Component({
        selector: 'app-leg4',
        templateUrl: './leg4.component.html',
        styleUrls: ['./leg4.component.css']
    })
], Leg4Component);
export { Leg4Component };
//# sourceMappingURL=leg4.component.js.map