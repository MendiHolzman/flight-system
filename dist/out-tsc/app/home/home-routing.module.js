import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MainComponent } from "./components/main/main.component";
import { BodyComponent } from "./components/body/body.component";
import { AudioComponent } from "./components/audio/audio.component";
const routes = [
    { path: "home", component: HomeComponent },
    { path: "main", component: MainComponent },
    { path: "body", component: BodyComponent },
    { path: "audio", component: AudioComponent },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], HomeRoutingModule);
export { HomeRoutingModule };
//# sourceMappingURL=home-routing.module.js.map