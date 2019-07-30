import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-noteedit',
  templateUrl: './noteedit.component.html',
  styleUrls: ['./noteedit.component.scss']
})
export class NoteeditComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<NoteeditComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }

  title = new FormControl(this.data.title);
  description = new FormControl(this.data.description);
  noteColor = this.data.color;
  ngOnInit() {
    console.log("data", this.data);

  }

  update(){
    //alert("update the notes");
    if(this.title.value == null && this.description.value == null){
      return false
    }
    else{
      this.title = this.title.value;
      this.description = this.description.value;
      var data2 ={
        "title":this.title,
        "description":this.description
      }
      this.dialogRef.close(data2);
    }
  }

}
