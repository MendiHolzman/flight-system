import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule) },
  { path: 'legs', loadChildren: () => import('../app/legs/legs.module').then(m => m.LegsModule) },
  { path: 'flights', loadChildren: () => import('../app/flights/flights.module').then(m => m.FlightsModule) },
  { path: '', redirectTo: '/home/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
