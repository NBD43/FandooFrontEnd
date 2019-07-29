import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from 'src/app/material-module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatSidenavModule,MatIconModule} from '@angular/material';
import { DemoComponent } from './components/demo/demo.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthGuard } from './service/auth.guard';
import {MatCardModule} from '@angular/material/card';
import { NoteiconComponent } from './components/noteicon/noteicon.component';
import { GetnoteComponent } from './components/getnote/getnote.component';
import { NoteeditComponent } from './components/noteedit/noteedit.component';
import { LabelComponent } from './components/label/label.component';
import { PracticeComponent } from './components/practice/practice.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    RegisterComponent,
    DashboardComponent,
    DemoComponent,
    NoteiconComponent,
    GetnoteComponent,
    NoteeditComponent,
    LabelComponent,
    PracticeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,MatIconModule,
    FlexLayoutModule,MatSidenavModule,MatInputModule,ImageCropperModule,MatMenuModule,MatDialogModule,MatCardModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
