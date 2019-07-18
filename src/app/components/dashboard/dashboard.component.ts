import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'FundooNotes';
  events: string[] = [];
  opened: boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() { }

  ngOnInit() {
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

}
