import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MainComponent } from "./components/main/main.component";
import { BodyComponent } from "./components/body/body.component";
import { AudioComponent } from "./components/audio/audio.component";

const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "main", component: MainComponent },
{ path: "body", component: BodyComponent },
{ path: "audio", component: AudioComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class HomeRoutingModule {}
