import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { AudioComponent } from './components/audio/audio.component';



@NgModule({
  declarations: [MainComponent, AudioComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    MainComponent,
    AudioComponent
  ]
})
export class HomeModule { }
