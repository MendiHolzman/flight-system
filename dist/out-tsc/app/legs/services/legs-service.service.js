import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LegsServiceService = class LegsServiceService {
    constructor(router, http, urls) {
        this.router = router;
        this.http = http;
        this.urls = urls;
    }
    navigateToLeg(legNumber) {
        switch (legNumber) {
            case 444:
                this.router.navigate(['legs/hanger']);
                break;
            case 1:
                this.router.navigate(['legs/leg1']);
                break;
            case 2:
                this.router.navigate(['legs/leg2']);
                break;
            case 3:
                this.router.navigate(['legs/leg3']);
                break;
            case 4:
                this.router.navigate(['legs/leg4']);
                break;
            case 5:
                this.router.navigate(['legs/leg5']);
                break;
            case 6:
                this.router.navigate(['legs/leg6']);
                break;
            case 7:
                this.router.navigate(['legs/leg7']);
                break;
            case 8:
                this.router.navigate(['legs/leg8']);
                break;
            default:
                break;
        }
    }
    navigateToFlight(flightNumber) {
        this.router.navigate(['flights/flight', flightNumber]);
    }
};
LegsServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LegsServiceService);
export { LegsServiceService };
//# sourceMappingURL=legs-service.service.js.map