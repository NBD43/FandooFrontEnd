import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  email:string;
  token:string;
  title = 'FundooNotes';
  events: string[] = [];
  opened: boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private router:Router
    ) { }

  
  ngOnInit() {
    this.token=localStorage.getItem('token')
    this.email=localStorage.getItem('email')
  }


  onlogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
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
  
}
}
