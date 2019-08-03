import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full' },
  { path: 'home', component: LoginFormComponent  },
  { path:'dashboard', component: UserDashboardComponent },
  { path: '**', component: InvalidPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserDashboardComponent];
