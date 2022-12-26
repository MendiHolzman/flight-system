import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../app/home/home.module'

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule) }
]

// {
//   path: '', component: HomeModule, children: [
//     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//     { path: 'dashboard', component: MainPageComponent },
//     { path: 'payments', component: PaymentPageComponent },
//     { path: '**', component: PageNotFoundComponent }
//   ]
// }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
