import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './components/flight/flight.component';
import { FlightsRoutingModule } from './flights-routing.module';


@NgModule({
  declarations: [
    FlightComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule
  ]
})
export class FlightsModule { }
