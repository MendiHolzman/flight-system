import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HangerComponent } from "./components/hanger/hanger.component";

const routes: Routes = [
{ path: "hanger", component: HangerComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class LegsRoutingModule {}
