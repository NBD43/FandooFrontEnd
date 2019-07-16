import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import {ForgetpasswordComponent} from './components/forgetpassword/forgetpassword.component';
import {ResetpasswordComponent} from './components/resetpassword/resetpassword.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
 { path: 'register', component:RegisterComponent },
 { path: 'forgetpassword', component: ForgetpasswordComponent },
 { path: 'resetpassword', component: ResetpasswordComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
