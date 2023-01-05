import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AudioComponent } from './components/audio/audio.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    NgModule({
        declarations: [MainComponent, AudioComponent, BodyComponent, HomeComponent],
        imports: [
            CommonModule,
            HomeRoutingModule
        ],
        exports: [
            HomeComponent
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map