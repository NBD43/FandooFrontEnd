import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { HttpService } from 'src/app/service/http-service'
import { error } from 'util';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {DemoComponent} from '../demo/demo.component'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  email:any;
  token:any;
  profile:string;
  title = 'FundooNotes';
  events: string[] = [];
  opened: boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private router:Router,private snackBar: MatSnackBar, private httpService: HttpService,private dialog: MatDialog
    ) { }

  

  openDialog() {
    const dialogRef = this.dialog.open(DemoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit() {
    this.token=localStorage.getItem('token')
    this.email=localStorage.getItem('emailId')
    console.log(this.token)
    console.log(this.email)
    
   
  
  }


  selectProfile() {
    const dialogRef = this.dialog.open(DemoComponent,
      {
        width: '400px',
        height:'500px'
      });
  
      dialogRef.afterClosed().subscribe(
        (x:any) =>
        {
          if(x!=null)
          { 
            console.log("hjkjhkjh",x.file)
            this.httpService.uploadProfileImage('uploadprofile',x.file).subscribe(
            value =>
            {
              console.log(value);
              this.onRefresh();
            
            }
          );
          }
    })
    
  }
  

  onRefresh(){
    window.location.reload();
  }
  onlogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('emailId');
     this.router.navigate(['/login']);
  }

  onNotes(){
    alert("Notes are here");

  }

  onReminder(){
    alert("Reminder Notes");

  }

  onEditLabel(){
    alert("EditLabel for Notes");

  }

  onArchive(){
    alert("Archieve Notes are Here");

  }

  onDelete(){
    alert("trash notes are here");

  }
upload(event){
  console.log("clicked event",event);


  this.httpService.uploadImage('uploadprofile',this.token,event).subscribe(
    
      (response: any) => {
        console.warn("thr response");-
        console.log(response);
        
        if (!error && response.statusCode == 200) {
       
          localStorage.setItem('token',response.token);
          this.snackBar.open(
            
            "profile updated  Successfully",
            "undo",
            { duration: 2500 }
            
          )
          this.router.navigate(['/dashboard'])
        } else {
          console.log(response);
          this.snackBar.open(
            " Failed to upload profile",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )


  }

}
