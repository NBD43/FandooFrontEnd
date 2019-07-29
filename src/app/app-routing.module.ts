import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import {ForgotpasswordComponent} from './components/forgotpassword/forgotpassword.component';
import {ResetpasswordComponent} from './components/resetpassword/resetpassword.component';
import { RegisterComponent } from './components/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DemoComponent} from './components/demo/demo.component'
import { AuthGuard } from './service/auth.guard';
import { NoteiconComponent } from './components/noteicon/noteicon.component';
import { GetnoteComponent } from './components/getnote/getnote.component';
import { NoteeditComponent } from './components/noteedit/noteedit.component';
import { LabelComponent } from './components/label/label.component';
import { PracticeComponent } from './components/practice/practice.component';




const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'login', component: LoginComponent },
 { path: 'register', component:RegisterComponent },
 { path: 'forgotpassword', component: ForgotpasswordComponent },
 { path: 'resetpassword', component: ResetpasswordComponent },
 { path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
 { path:'demo',component:DemoComponent},
 { path:'icon',component:NoteiconComponent},
 { path:'getnote',component:GetnoteComponent},
 {
   path:'noteedit', component:NoteeditComponent
 },
 {
   path: 'label',component:LabelComponent
 },
 {
   path:'practice',component:PracticeComponent
 }
 

 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
