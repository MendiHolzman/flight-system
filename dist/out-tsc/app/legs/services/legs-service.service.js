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
            default:
                break;
        }
    }
};
LegsServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LegsServiceService);
export { LegsServiceService };
//# sourceMappingURL=legs-service.service.js.map