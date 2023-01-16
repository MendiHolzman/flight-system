import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LegsNumbersNames } from 'src/app/legs/model/enums';
let BodyComponent = class BodyComponent {
    constructor(legsSer) {
        this.legsSer = legsSer;
    }
    ngOnInit() {
    }
    goToLeg(legNumber) {
        this.legsSer.navigateToLeg(legNumber);
    }
    get connectionResult() {
        return LegsNumbersNames;
    }
};
BodyComponent = __decorate([
    Component({
        selector: 'app-body',
        templateUrl: './body.component.html',
        styleUrls: ['./body.component.css']
    })
], BodyComponent);
export { BodyComponent };
//# sourceMappingURL=body.component.js.map