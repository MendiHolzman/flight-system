import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangerComponent } from './components/hanger/hanger.component';
import { LegsRoutingModule } from './legs-routing.module';
let LegsModule = class LegsModule {
};
LegsModule = __decorate([
    NgModule({
        declarations: [
            HangerComponent
        ],
        imports: [
            CommonModule,
            LegsRoutingModule
        ]
    })
], LegsModule);
export { LegsModule };
//# sourceMappingURL=legs.module.js.map