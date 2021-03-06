import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';

import {ApiService} from '../api.service';
import { LogoutComponent } from './logout/logout.component';

import {RegisterComponent} from './register/register.component';
import {SharedModule} from '../shared/shared.module';
import {TripStartComponent} from '../trip/trip-start/trip-start.component';
import {TripCreateComponent} from '../trip/trip-create/trip-create.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {
    path: '', component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'logout', component: LogoutComponent}
    ]
  },

];

@NgModule({
  declarations: [
    AuthComponent,
    LogoutComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes),
  ], exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class AuthModule { }
