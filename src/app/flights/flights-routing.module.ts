import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlightComponent } from "./components/flight/flight.component";


const routes: Routes = [
{ path: "flight/:flightNumber", component: FlightComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class FlightsRoutingModule {}
