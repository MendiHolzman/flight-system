import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UrlsService = class UrlsService {
    constructor() {
        this.mainURL = 'https://localhost:44364/';
        this.legs = {
            getLegFlights: this.mainURL + 'legs/getLegFlights',
            getLegDetailsById: this.mainURL + 'legs/getLegDetailsById',
        };
        this.flight = {
            getFlightPassengers: this.mainURL + 'flights/getFlightPassengers',
            getFlightDetails: this.mainURL + 'flights/getFlightDetails',
        };
    }
};
UrlsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UrlsService);
export { UrlsService };
//# sourceMappingURL=urls.service.js.map