import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import {ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component';
import {ResetpasswordComponent} from './components/resetpassword/resetpassword.component';
import { RegisterComponent } from './components/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
 { path: 'register', component:RegisterComponent },
 { path: 'forgotpassword', component: ForgotpasswordComponent },
 { path: 'resetpassword', component: ResetpasswordComponent },
 { path:'dashboard', component:DashboardComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }