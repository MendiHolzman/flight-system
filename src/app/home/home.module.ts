import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { AudioComponent } from './components/audio/audio.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [MainComponent, AudioComponent, BodyComponent, HomeComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    MainComponent,
    AudioComponent,
    BodyComponent,
     HomeComponent
  ]
})
export class HomeModule { }
