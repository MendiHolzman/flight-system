import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HangerComponent } from "./components/hanger/hanger.component";
import { Leg1Component } from "./components/leg1/leg1.component";
import { Leg2Component } from "./components/leg2/leg2.component";
import { Leg3Component } from "./components/leg3/leg3.component";
import { Leg4Component } from "./components/leg4/leg4.component";
import { Leg5Component } from "./components/leg5/leg5.component";
import { Leg6Component } from "./components/leg6/leg6.component";
import { Leg7Component } from "./components/leg7/leg7.component";
import { Leg8Component } from "./components/leg8/leg8.component";
const routes = [
    { path: "hanger", component: HangerComponent },
    { path: "leg1", component: Leg1Component },
    { path: "leg2", component: Leg2Component },
    { path: "leg3", component: Leg3Component },
    { path: "leg4", component: Leg4Component },
    { path: "leg5", component: Leg5Component },
    { path: "leg6", component: Leg6Component },
    { path: "leg7", component: Leg7Component },
    { path: "leg8", component: Leg8Component },
];
let LegsRoutingModule = class LegsRoutingModule {
};
LegsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LegsRoutingModule);
export { LegsRoutingModule };
//# sourceMappingURL=legs-routing.module.js.map