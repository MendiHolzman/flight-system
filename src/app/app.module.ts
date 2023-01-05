import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HomeModule,
        FontAwesomeModule,
        AppRoutingModule,
        HttpClientModule
    ],
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, far);
    }
}
