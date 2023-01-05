import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    { path: 'home', loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule) },
    { path: 'legs', loadChildren: () => import('../app/legs/legs.module').then(m => m.LegsModule) },
    { path: '', redirectTo: '/home/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home/home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map