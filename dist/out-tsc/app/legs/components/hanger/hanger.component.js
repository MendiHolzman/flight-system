import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LegsIdNames } from '../../model/enums';
let HangerComponent = class HangerComponent {
    constructor(http, legs, urls) {
        this.http = http;
        this.legs = legs;
        this.urls = urls;
        this.legID = LegsIdNames.Hanger;
        this.textDirection = 'rtl';
        this.list = [];
        this.legDetails = {};
    }
    ngOnInit() {
        this.getHangerDetails();
        setTimeout(() => {
            this.getHangerFlights();
        }, 3000);
    }
    getHangerDetails() {
        this.http.get(this.urls.legs.getLegDetailsById + "?id=" + this.legID)
            .subscribe((res) => {
            this.legDetails = res.data;
        });
    }
    getHangerFlights() {
        this.http.get(this.urls.legs.getLegFlights + "?legNumber=" + this.legDetails.legNumber)
            .subscribe((res) => {
            this.list = res.data;
        });
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