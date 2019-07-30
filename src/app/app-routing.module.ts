import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path:'dashboard', component: UserDashboardComponent },
  { path: '**', component: InvalidPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserDashboardComponent];
