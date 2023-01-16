import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FlightComponent } from "./components/flight/flight.component";
const routes = [
    { path: "flight/:flightNumber", component: FlightComponent },
];
let FlightsRoutingModule = class FlightsRoutingModule {
};
FlightsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FlightsRoutingModule);
export { FlightsRoutingModule };
//# sourceMappingURL=flights-routing.module.js.map