import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AddGradComponent} from './components/add-grad/add-grad.component';
import {EditGradComponent} from './components/edit-grad/edit-grad.component';
import {ViewGradComponent} from './components/view-grad/view-grad.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'addGrad', component : AddGradComponent},
  {path : 'viewGrad', component : ViewGradComponent},
  {path : 'editGrad', component : EditGradComponent},
  {path : '**', component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
