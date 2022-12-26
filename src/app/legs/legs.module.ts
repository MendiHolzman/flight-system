import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangerComponent } from './components/hanger/hanger.component';
import { LegsRoutingModule } from './legs-routing.module';



@NgModule({
  declarations: [
    HangerComponent
  ],
  imports: [
    CommonModule,
    LegsRoutingModule
  ]
})
export class LegsModule { }
