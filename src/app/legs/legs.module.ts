import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangerComponent } from './components/hanger/hanger.component';
import { LegsRoutingModule } from './legs-routing.module';
import { Leg6Component } from './components/leg6/leg6.component';
import { Leg7Component } from './components/leg7/leg7.component';
import { Leg5Component } from './components/leg5/leg5.component';
import { Leg8Component } from './components/leg8/leg8.component';
import { Leg1Component } from './components/leg1/leg1.component';
import { Leg2Component } from './components/leg2/leg2.component';
import { Leg3Component } from './components/leg3/leg3.component';
import { Leg4Component } from './components/leg4/leg4.component';



@NgModule({
  declarations: [
    HangerComponent,
    Leg6Component,
    Leg7Component,
    Leg5Component,
    Leg8Component,
    Leg1Component,
    Leg2Component,
    Leg3Component,
    Leg4Component
  ],
  imports: [
    CommonModule,
    LegsRoutingModule
  ]
})
export class LegsModule { }
