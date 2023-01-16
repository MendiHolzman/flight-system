import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HttpClientModule } from '@angular/common/http';
let AppModule = class AppModule {
    constructor(library) {
        library.addIconPacks(fas, far);
    }
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
        ],
        providers: [],
        bootstrap: [AppComponent],
        imports: [
            BrowserModule,
            HomeModule,
            FontAwesomeModule,
            AppRoutingModule,
            HttpClientModule
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map