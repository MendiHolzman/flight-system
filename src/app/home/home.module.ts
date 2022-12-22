import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { AudioComponent } from './components/audio/audio.component';
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [MainComponent, AudioComponent, BodyComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    MainComponent,
    AudioComponent,
    BodyComponent
  ]
})
export class HomeModule { }
