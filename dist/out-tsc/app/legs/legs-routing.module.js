import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HangerComponent } from "./components/hanger/hanger.component";
const routes = [
    { path: "hanger", component: HangerComponent },
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