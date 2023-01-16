import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './components/flight/flight.component';
import { FlightsRoutingModule } from './flights-routing.module';
let FlightsModule = class FlightsModule {
};
FlightsModule = __decorate([
    NgModule({
        declarations: [
            FlightComponent
        ],
        imports: [
            CommonModule,
            FlightsRoutingModule
        ]
    })
], FlightsModule);
export { FlightsModule };
//# sourceMappingURL=flights.module.js.map