import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MainComponent = class MainComponent {
    constructor() {
        this.isSimulatorStart = false;
    }
    ngOnInit() {
    }
    startSimulator() {
        this.isSimulatorStart = true;
    }
    stopSimulator() {
        this.isSimulatorStart = false;
    }
};
MainComponent = __decorate([
    Component({
        selector: 'app-main',
        templateUrl: './main.component.html'
    })
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map