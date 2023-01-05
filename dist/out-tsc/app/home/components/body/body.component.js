import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BodyComponent = class BodyComponent {
    constructor(legsSer) {
        this.legsSer = legsSer;
    }
    ngOnInit() {
    }
    goToLeg(legNumber) {
        this.legsSer.navigateToLeg(legNumber);
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