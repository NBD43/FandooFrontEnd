import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-noteedit',
  templateUrl: './noteedit.component.html',
  styleUrls: ['./noteedit.component.scss']
})
export class NoteeditComponent implements OnInit {

  title = new FormControl('',Validators.required);
    description = new FormControl('',Validators.required);
  constructor(public dialogRef:MatDialogRef<NoteeditComponent>) { }

  
  ngOnInit() {
   

  }

  update(){
    //alert("update the notes");
    if(this.title.value == null && this.description.value == null){
      return false
    }
    else{
      this.title = this.title.value;
      this.description = this.description.value;
      var data ={
        "title":this.title,
        "description":this.description
      }
      this.dialogRef.close(data);
    }
  }

}
